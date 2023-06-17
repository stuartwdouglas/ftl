package dal

import (
	"bytes"
	"context"
	"io"
	"testing"

	"github.com/alecthomas/assert/v2"
	"github.com/alecthomas/types"

	"github.com/TBD54566975/ftl/common/model"
	"github.com/TBD54566975/ftl/common/sha256"
	"github.com/TBD54566975/ftl/controlplane/internal/sql/sqltest"
	"github.com/TBD54566975/ftl/schema"
)

func TestPostgresDAL(t *testing.T) {
	conn := sqltest.OpenForTesting(t)
	dal := NewPostgres(conn)
	assert.NotZero(t, dal)
	testDAL(t, dal)
}

func TestLocalDAL(t *testing.T) {
	dal := NewLocal(t.TempDir())
	assert.NotZero(t, dal)
	testDAL(t, dal)
}

func testDAL(t *testing.T, dal DAL) {
	t.Helper()
	var testContent = bytes.Repeat([]byte("sometestcontentthatislongerthanthereadbuffer"), 100)
	var testSHA = sha256.Sum(testContent)

	var err error

	ctx := context.Background()

	t.Run("UpsertModule", func(t *testing.T) {
		err = dal.UpsertModule(ctx, "go", "test")
		assert.NoError(t, err)
	})

	var testSha sha256.SHA256

	t.Run("CreateArtefact", func(t *testing.T) {
		testSha, err = dal.CreateArtefact(ctx, testContent)
		assert.NoError(t, err)
	})

	module := &schema.Module{Name: "test"}
	var deploymentKey model.DeploymentKey
	t.Run("CreateDeployment", func(t *testing.T) {
		deploymentKey, err = dal.CreateDeployment(ctx, "go", module, []DeploymentArtefact{{
			Digest:     testSha,
			Executable: true,
			Path:       "dir/filename",
		}})
		assert.NoError(t, err)
	})

	deployment := &model.Deployment{
		Module:   "test",
		Language: "go",
		Schema:   module,
		Key:      deploymentKey,
		Artefacts: []*model.Artefact{
			{Path: "dir/filename",
				Executable: true,
				Digest:     testSHA,
				Content:    io.NopCloser(bytes.NewReader(testContent))},
		},
	}
	expectedContent := artefactContent(t, deployment.Artefacts)

	t.Run("GetDeployment", func(t *testing.T) {
		actual, err := dal.GetDeployment(ctx, deploymentKey)
		assert.NoError(t, err)
		actualContent := artefactContent(t, actual.Artefacts)
		assert.Equal(t, expectedContent, actualContent)
		assert.Equal(t, deployment, actual)
	})

	t.Run("GetMissingDeployment", func(t *testing.T) {
		_, err := dal.GetDeployment(ctx, model.NewDeploymentKey())
		assert.IsError(t, err, ErrNotFound)
	})

	t.Run("GetMissingArtefacts", func(t *testing.T) {
		misshingSHA := sha256.MustParseSHA256("fae7e4cbdca7167bbea4098c05d596f50bbb18062b61c1dfca3705b4a6c2888c")
		missing, err := dal.GetMissingArtefacts(ctx, []sha256.SHA256{testSHA, misshingSHA})
		assert.NoError(t, err)
		assert.Equal(t, []sha256.SHA256{misshingSHA}, missing)
	})

	runnerID := model.NewRunnerKey()
	t.Run("RegisterRunner", func(t *testing.T) {
		err = dal.UpsertRunner(ctx, Runner{
			Key:      runnerID,
			Language: "go",
			Endpoint: "http://localhost:8080",
			State:    RunnerStateIdle,
		})
		assert.NoError(t, err)
	})

	t.Run("RegisterRunnerFailsOnDuplicate", func(t *testing.T) {
		err = dal.UpsertRunner(ctx, Runner{
			Key:      model.NewRunnerKey(),
			Language: "go",
			Endpoint: "http://localhost:8080",
			State:    RunnerStateIdle,
		})
		assert.Error(t, err)
		assert.IsError(t, err, ErrConflict)
	})

	t.Run("GetIdleRunnersForLanguage", func(t *testing.T) {
		expectedRunner := Runner{
			Key:      runnerID,
			Language: "go",
			Endpoint: "http://localhost:8080",
			State:    RunnerStateIdle,
		}
		runners, err := dal.GetIdleRunnersForLanguage(ctx, "go", 10)
		assert.NoError(t, err)
		assert.Equal(t, []Runner{expectedRunner}, runners)
	})

	expectedRunner := Runner{
		Key:      runnerID,
		Language: "go",
		Endpoint: "http://localhost:8080",
		State:    RunnerStateClaimed,
	}

	t.Run("GetDeploymentsNeedingReconciliation", func(t *testing.T) {
		reconcile, err := dal.GetDeploymentsNeedingReconciliation(ctx)
		assert.NoError(t, err)
		assert.Equal(t, []Reconciliation{}, reconcile)
	})

	t.Run("SetDeploymentReplicas", func(t *testing.T) {
		err := dal.SetDeploymentReplicas(ctx, deploymentKey, 1)
		assert.NoError(t, err)
	})

	t.Run("GetDeploymentsNeedingReconciliation", func(t *testing.T) {
		reconcile, err := dal.GetDeploymentsNeedingReconciliation(ctx)
		assert.NoError(t, err)
		assert.Equal(t, []Reconciliation{{
			Deployment:       deploymentKey,
			Module:           deployment.Module,
			Language:         deployment.Language,
			AssignedReplicas: 0,
			RequiredReplicas: 1,
		}}, reconcile)
	})

	t.Run("ReserveRunnerForInvalidDeployment", func(t *testing.T) {
		_, err := dal.ClaimRunnerForDeployment(ctx, "go", model.NewDeploymentKey(), 0)
		assert.Error(t, err)
		assert.IsError(t, err, ErrNotFound)
		assert.EqualError(t, err, "deployment: not found")
	})

	t.Run("ClaimRunnerForDeployment", func(t *testing.T) {
		actualRunner, err := dal.ClaimRunnerForDeployment(ctx, "go", deploymentKey, 0)
		assert.NoError(t, err)
		assert.Equal(t, expectedRunner, actualRunner)
	})

	t.Run("ExpireRunnerClaims", func(t *testing.T) {
		count, err := dal.ExpireRunnerClaims(ctx)
		assert.NoError(t, err)
		assert.Equal(t, 1, count)
		runners, err := dal.GetIdleRunnersForLanguage(ctx, "go", 10)
		assert.NoError(t, err)
		assert.Equal(t, 1, len(runners))
	})

	t.Run("ReserveRunnerForDeploymentFailsOnInvalidDeployment", func(t *testing.T) {
		_, err = dal.ClaimRunnerForDeployment(ctx, "go", model.NewDeploymentKey(), 0)
		assert.IsError(t, err, ErrNotFound)
	})

	t.Run("UpdateRunnerAssigned", func(t *testing.T) {
		err := dal.UpsertRunner(ctx, Runner{
			Key:        runnerID,
			Language:   "go",
			Endpoint:   "http://localhost:8080",
			State:      RunnerStateAssigned,
			Deployment: types.Some(deploymentKey),
		})
		assert.NoError(t, err)
	})

	t.Run("GetDeploymentsNeedingReconciliation", func(t *testing.T) {
		reconcile, err := dal.GetDeploymentsNeedingReconciliation(ctx)
		assert.NoError(t, err)
		assert.Equal(t, []Reconciliation{}, reconcile)
	})

	t.Run("GetRoutingTable", func(t *testing.T) {
		routes, err := dal.GetRoutingTable(ctx, deployment.Module)
		assert.NoError(t, err)
		assert.Equal(t, []string{expectedRunner.Endpoint}, routes)
	})

	t.Run("UpdateRunnerInvalidDeployment", func(t *testing.T) {
		err := dal.UpsertRunner(ctx, Runner{
			Key:        runnerID,
			Language:   "go",
			Endpoint:   "http://localhost:8080",
			State:      RunnerStateAssigned,
			Deployment: types.Some(model.NewDeploymentKey()),
		})
		assert.Error(t, err)
		assert.IsError(t, err, ErrNotFound)
	})

	t.Run("ReleaseRunnerReservation", func(t *testing.T) {
		err = dal.UpsertRunner(ctx, Runner{
			Key:      runnerID,
			Language: "go",
			Endpoint: "http://localhost:8080",
			State:    RunnerStateIdle,
		})
		assert.NoError(t, err)
	})

	t.Run("ReserveRunnerForDeploymentAfterRelease", func(t *testing.T) {
		actualRunner, err := dal.ClaimRunnerForDeployment(ctx, "go", deploymentKey, 0)
		assert.NoError(t, err)
		assert.Equal(t, expectedRunner, actualRunner)
	})

	t.Run("GetRoutingTable", func(t *testing.T) {
		_, err := dal.GetRoutingTable(ctx, deployment.Module)
		assert.IsError(t, err, ErrNotFound)
	})

	t.Run("DeregisterRunner", func(t *testing.T) {
		err = dal.DeregisterRunner(ctx, runnerID)
		assert.NoError(t, err)
	})

	t.Run("DeregisterRunnerFailsOnMissing", func(t *testing.T) {
		err = dal.DeregisterRunner(ctx, runnerID)
		assert.IsError(t, err, ErrNotFound)
	})
}

func artefactContent(t testing.TB, artefacts []*model.Artefact) [][]byte {
	t.Helper()
	var result [][]byte
	for _, a := range artefacts {
		content, err := io.ReadAll(a.Content)
		assert.NoError(t, err)
		result = append(result, content)
		a.Content = nil
	}
	return result
}

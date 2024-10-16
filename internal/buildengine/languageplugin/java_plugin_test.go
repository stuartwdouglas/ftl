package languageplugin

import (
	"context"
	"path/filepath"
	"testing"

	"github.com/TBD54566975/ftl/internal/moduleconfig"
	"github.com/alecthomas/assert/v2"
	"github.com/alecthomas/types/optional"
)

func TestExtractModuleDepsKotlin(t *testing.T) {
	deps, err := extractKotlinFTLImports("test", "testdata/alphakotlin")
	assert.NoError(t, err)
	assert.Equal(t, []string{"builtin", "other"}, deps)
}

func TestJavaConfigDefaults(t *testing.T) {
	t.Parallel()
	watch := []string{
		"pom.xml",
		"src/**",
		"build/generated",
		"target/generated-sources",
	}
	for _, tt := range []struct {
		language string
		dir      string
		expected moduleconfig.CustomDefaults
	}{
		{
			language: "kotlin",
			dir:      "testdata/echokotlin",
			expected: moduleconfig.CustomDefaults{
				Build:              optional.Some("mvn -B package"),
				DeployDir:          "target",
				GeneratedSchemaDir: optional.Some("src/main/ftl-module-schema"),
				Watch:              watch,
				LanguageConfig: map[string]any{
					"build-tool": "maven",
				},
			},
		},
		{
			language: "kotlin",
			dir:      "testdata/externalkotlin",
			expected: moduleconfig.CustomDefaults{
				Build:              optional.Some("mvn -B package"),
				DeployDir:          "target",
				GeneratedSchemaDir: optional.Some("src/main/ftl-module-schema"),
				Watch:              watch,
				LanguageConfig: map[string]any{
					"build-tool": "maven",
				},
			},
		},
	} {
		t.Run(tt.dir, func(t *testing.T) {
			t.Parallel()

			ctx := context.Background()
			dir, err := filepath.Abs(tt.dir)
			assert.NoError(t, err)

			plugin, err := New(ctx, nil, "java")
			assert.NoError(t, err)

			defaults, err := plugin.ModuleConfigDefaults(ctx, dir)
			assert.NoError(t, err)

			assert.Equal(t, tt.expected, defaults)
		})
	}
}

package providers

import (
	"context"
	"errors"
	"fmt"
	"net/url"
	"strings"

	"github.com/zalando/go-keyring"

	"github.com/TBD54566975/ftl/internal/configuration"
)

type Keychain struct{}

var _ configuration.SynchronousProvider[configuration.Secrets] = Keychain{}

func (Keychain) Role() configuration.Secrets { return configuration.Secrets{} }
func (k Keychain) Key() string               { return "keychain" }

func (k Keychain) Load(ctx context.Context, ref configuration.Ref, key *url.URL) ([]byte, error) {
	value, err := keyring.Get(k.serviceName(ref), key.Host)
	if err != nil {
		if errors.Is(err, keyring.ErrNotFound) {
			return nil, fmt.Errorf("no keychain entry for %q: %w", key.Host, configuration.ErrNotFound)
		}
		return nil, fmt.Errorf("failed to get keychain entry for %q: %w", key.Host, err)
	}
	return []byte(value), nil
}

func (k Keychain) Store(ctx context.Context, ref configuration.Ref, value []byte) (*url.URL, error) {
	err := keyring.Set(k.serviceName(ref), ref.Name, string(value))
	if err != nil {
		return nil, fmt.Errorf("failed to set keychain entry for %q: %w", ref, err)
	}
	return &url.URL{Scheme: "keychain", Host: ref.Name}, nil
}

func (k Keychain) Delete(ctx context.Context, ref configuration.Ref) error {
	err := keyring.Delete(k.serviceName(ref), ref.Name)
	if err != nil {
		if errors.Is(err, keyring.ErrNotFound) {
			return fmt.Errorf("no keychain entry for %q: %w", ref, configuration.ErrNotFound)
		}
		return fmt.Errorf("failed to delete keychain entry for %q: %w", ref, err)
	}
	return nil
}

func (k Keychain) serviceName(ref configuration.Ref) string {
	return "ftl-secret-" + strings.ReplaceAll(ref.String(), ".", "-")
}

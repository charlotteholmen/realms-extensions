#!/usr/bin/env bash
# Run tests for system_info extension
# Delegates to the shared test runner
exec "$(dirname "$0")/../_shared/testing/scripts/run_tests.sh" "$@"

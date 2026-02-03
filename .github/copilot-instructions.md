<!-- Short, focused instructions for AI coding agents working in this repository. -->
# Copilot / AI Agent Instructions

Purpose: Help an AI agent become productive quickly when the repository contents are present.

1) First steps (discovery-first)
- Check for a root `README.md` and any language manifests: `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `go.mod`. These indicate the primary language and standard build/test commands.
- Look for `Dockerfile`, `docker-compose.yml`, or `.github/workflows/` to understand CI, containerization, and runtime shape.
- Identify top-level directories that define boundaries: commonly `src/`, `services/`, `api/`, `web/`, `worker/`, `cmd/`, or `internal/`.

2) Inferring the architecture (how to read the repo)
- If `package.json` or `pyproject.toml` exists, use those to find the entrypoint (e.g., `main`/`start` script or `__main__`).
- `Dockerfile` + `docker-compose.yml` often show service boundaries and required external services (databases, caches, queues) via `ENV` or `depends_on` — use that to list integration points.
- Look for `api/` or `routes/` files to find HTTP surface area and request/response shapes. Example files to inspect: README, `src/main.py` or `src/index.js`, `services/*/README.md`.

3) Build, test, and dev commands (try these in order when corresponding files exist)
- Node: run `npm ci` then `npm test` or `npm run build` depending on `package.json` scripts.
- Python: create a venv, install dependencies, then run `pytest` or `python -m pytest` if `pyproject.toml`/`requirements.txt` present.
- Go: run `go mod download` then `go test ./...`.
- Containers: `docker-compose up --build` or `docker build -t projobs .` when Docker artifacts exist.

4) Project-specific conventions to look for
- Naming: services may be grouped under `services/<name>/` or `pkg/` and `internal/` for reusable code.
- Configuration: check for `.env`, `.env.example`, or `config/*.yaml` for runtime settings and secrets keys (look for `DB_URL`, `REDIS_URL`, `BROKER_URL`).
- Tests: unit tests often live next to implementation files (`*_test.py`, `__tests__`, or `.spec.js`). Use the repo's test runner if configured in CI.

5) Integration points and external dependencies
- Search for environment variable names or `secrets` in CI workflows to find external services. Pay attention to `docker-compose` service names and `host:port` patterns.
- Look for SDK usage (e.g., `boto3`, `aws-sdk`, `psycopg2`, `pg`/`pgx`) to identify cloud or DB integrations.

6) Editing and PR guidance for the agent
- Make minimal, focused changes per PR. Prefer small commits and preserve repository style and formatting (follow existing eslint/black/formatter configs if present).
- Update or add tests that exercise the changed behavior when possible.

7) When repository is empty or missing files
- If key files are missing (no README, no manifests), create a short `README.md` and a root manifest for the chosen language before adding larger features. Document assumptions in the PR description.

8) Where to look for more context
- CI workflows: `.github/workflows/*` (if present) show build/test steps and secrets usage.
- Service docs: `services/*/README.md` or `docs/` often contain rationale and operational notes.

If anything in these instructions is unclear or you want the file tailored to observed files in the repo, tell me which files to inspect and I'll merge repository-specific examples into this document.

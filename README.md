# My Personal Production Platform

This repository contains my personal production platform, a full-stack portfolio application that will be developed and operated throughout the senior capstone.

## Current Status

The initial repository structure and Git/GitHub development workflow have been established. The repository currently includes a root `.gitignore`, the project style guide, and assignment tracking documents.

The frontend and backend directories are placeholders for now. The frontend, backend, database, deployment environments, and other production capabilities will be added incrementally.

## Repository Structure

- `frontend/` — React frontend (not yet created)
- `backend/` — application backend (not yet created)
- `docs/` — engineering and production documentation
- `requirements/` — implementation requirements and completion evidence for production-platform capabilities
- `.gitignore` — ignore rules for build output, dependencies, IDE files, local environment files, secrets, and operating-system files

## Development Workflow

Development is performed from WSL/Linux, with the active repository stored in the Linux filesystem.

Changes are developed on focused branches and merged into the protected `main` branch through pull requests. After each merge, local `main` is updated from GitHub and the completed branch is deleted locally and remotely.

## Engineering Conventions

Project conventions are documented in the [style guide](docs/style-guide.md) at `docs/style-guide.md`.

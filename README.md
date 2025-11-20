# GitHub-Actions
Required Assignment 24.2 Test and Deploy an Application Using GitHub Actions

## Overview
This project demonstrates the implementation of GitHub Actions workflows for testing and deploying a simple Node.js application.

## Application
A simple Express.js REST API with the following endpoints:
- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /api/info` - Application information
- `POST /api/calculate` - Calculator endpoint (add, subtract, multiply, divide)

## GitHub Actions Workflows

### CI Workflow (test.yml)
**Triggers:** Push to `main` or `copilot/add-github-actions-workflow` branches, and pull requests to `main`

**Features:**
- Tests on multiple Node.js versions (16.x, 18.x, 20.x)
- Runs ESLint for code quality
- Executes Jest tests with coverage
- Uploads coverage reports as artifacts

### CD Workflow (deploy.yml)
**Triggers:** Push to `main` branch, or manual trigger via workflow_dispatch

**Features:**
- Runs tests before deployment
- Simulates build process
- Simulates deployment to production
- Creates deployment summary

## Local Development

### Installation
```bash
npm install
```

### Run Tests
```bash
npm test
```

### Run Linter
```bash
npm run lint
```

### Start Application
```bash
npm start
```

The server will start on port 3000.

## Testing the Workflows
1. Push code to trigger the CI workflow
2. Merge to main branch to trigger the CD workflow
3. Monitor workflow execution in the Actions tab on GitHub

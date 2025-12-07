# AshFlix Backend (Planned)

The AshFlix backend will be a collection of small services focused on DevSecOps best practices and AWS-native design.

## Services (planned)

- **Auth Service**
  - Handles login, JWT issuance, and session validation.
  - Deployed as AWS Lambda behind API Gateway.

- **Catalog Service**
  - Serves movie/series metadata to the frontend.
  - Reads from DynamoDB tables.
  - Exposes REST endpoints like `/catalog/sections` and `/catalog/title/{id}`.

- **Recommendation Service (AI)**
  - Uses embeddings + simple ML logic to generate "Recommended for You" rows.
  - Async jobs via Lambda + queues (future).

- **Health / Status Endpoint**
  - `/health` endpoint used by uptime checks and dashboards.
  - Returns build version, region, and status.

## Tech Stack (planned)

- Node.js + TypeScript
- AWS Lambda + API Gateway
- DynamoDB for metadata
- S3 for images/thumbnails
- Terraform for all infrastructure

This folder will later contain:

- `src/handlers/*.ts` Lambda handlers
- `package.json` with scripts
- CI workflows for building and deploying Lambdas.

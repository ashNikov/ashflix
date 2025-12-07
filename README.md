# AshFlix – AI-Powered Streaming SaaS (DevSecOps Monorepo)

AshFlix is a **Netflix-style streaming platform** built as a **DevSecOps & Cloud Engineering showcase**.

It combines:

- 🌩️ **Cloud-native architecture** on AWS  
- 🐳 **Containerized microservices** orchestrated with Kubernetes  
- 🔐 **DevSecOps best practices** (CI/CD, security scanning, infra-as-code)  
- 🤖 **AI-powered features** (recommendations, search, thumbnails, intro audio)  
- 🎬 A custom brand identity: **AshFlix Helix Ident (AHI)**

---

## 🎯 Project Goals

- Demonstrate how a **DevSecOps / Cloud Engineer** can design, secure, and operate a modern SaaS.
- Use a **realistic streaming domain** (movies, shows, trailers) instead of dummy “Hello World”.
- Integrate **AI services** to power recommendations, content discovery, and automation.
- Show **end-to-end delivery**: from source → CI/CD → cloud → monitoring.

---

## 🧱 Tech Stack

### Frontend
- React + TypeScript
- Vite
- TailwindCSS
- Framer Motion (for AHI intro & animations)

### Backend / APIs
- Node.js + TypeScript
- Express or Fastify
- REST (initially), gRPC/GraphQL (optional later)
- AWS Lambda for async / AI tasks

### Data & Storage
- DynamoDB for movie metadata and user profiles
- S3 for static assets (images, thumbnails, banners)
- Optional: PostgreSQL (RDS) for relational data

### Cloud / Infra
- AWS S3 + CloudFront (frontend hosting + CDN)
- AWS Lambda + API Gateway (serverless backend)
- AWS IAM (least-privilege roles & policies)
- Optional: EKS (Kubernetes) for microservices

### DevSecOps
- GitHub Actions (CI/CD)
- Terraform (infra-as-code)
- Trivy / Snyk for container & dependency scanning
- Dependabot for dependency updates
- JWT-based auth, HTTPS everywhere, security headers

### AI Features
- AI-powered recommendation engine
- Natural language search (“dark sci-fi from 2010s”)
- Automatic thumbnail generation
- AI-generated AshFlix intro sound (“Àh-heeeeeeee”)
- Auto-generated content summaries

---

## 📁 Repository Layout

```text
ashflix/
  frontend/        # React + Vite frontend (AshFlix UI + AHI intro)
  backend/         # Backend services / APIs / Lambdas
  infra/
    terraform/     # Terraform modules & stacks for AWS infra
  docs/            # Architecture, design decisions, ADRs, diagrams
  .github/
    workflows/     # GitHub Actions (CI/CD, security, deploy)
  README.md        # You are here


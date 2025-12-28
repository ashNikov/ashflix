<h1 align="center">
  <a href="https://d18qc73pgklufe.cloudfront.net" target="_blank">
    🎬 AshFlix
  </a>
</h1>

<p align="center">
  <strong>Netflix-Style AI Streaming SaaS Demo</strong><br/>
  DevSecOps • AWS • Terraform • CI/CD • CloudFront • App Runner
</p>

<p align="center">
  <a href="https://d18qc73pgklufe.cloudfront.net" target="_blank">
    <img src="frontend/public/ashflix-af-icon.svg" width="120" alt="AshFlix Logo"/>
  </a>
</p>

<p align="center">
  🔗 <a href="https://d18qc73pgklufe.cloudfront.net" target="_blank"><strong>LIVE DEMO</strong></a>
</p>

---

## 🧠 Overview

**AshFlix** is a **Netflix-inspired streaming dashboard** built as a **real-world DevSecOps & Cloud Engineering portfolio project**.

It is designed to demonstrate:
- production-style AWS architecture
- secure infrastructure practices
- CI/CD discipline
- free-tier-safe cloud deployments

> ⚠️ This README documents **only what is currently deployed**.  
> Planned features are clearly marked as *future phases*.

---

## 🌐 Live URLs

| Component | URL |
|---------|-----|
| Frontend (CloudFront) | https://d18qc73pgklufe.cloudfront.net |
| Backend (AWS App Runner) | https://p3xh7pammx.eu-west-1.awsapprunner.com |
| Health Endpoint | `/health` |
| Catalog API | `/api/catalog` |

---

## 🧱 Project Structure

```text
ashflix/
├── frontend/            # React + Vite frontend
├── backend/             # Node.js + Express API
├── infra/               # Terraform IaC
│   ├── s3-cloudfront/
│   ├── apprunner/
│   └── ecr/
├── .github/workflows/   # CI/CD pipelines
└── README.md
🏗️ Current Architecture (LIVE)
Frontend
React + Vite

Static build output

Hosted on Amazon S3

Served globally via Amazon CloudFront

Backend
Node.js + Express

Dockerized container

Hosted on AWS App Runner

HTTPS enabled by default

🗺️ Architecture Diagram (Mermaid)
mermaid
Copy code
flowchart LR
    User[User Browser] --> CF[CloudFront]
    CF --> S3[S3 Static Frontend]
    S3 -->|API Calls| AR[AWS App Runner]
    AR --> API[Express API]
🔄 CI/CD Pipeline (Safe Mode)
Current CI/CD Scope: Frontend only

Trigger: push to main

Build: Vite production build

Deploy steps:

Sync build to S3

Invalidate CloudFront cache

❗ Explicitly Disabled (By Design)
❌ No backend auto-deploy

❌ No Terraform apply in CI

❌ No secrets committed to repo

This ensures maximum safety and free-tier protection.

🔐 Security & DevSecOps Practices
IAM-scoped AWS credentials

Secrets stored in GitHub Actions Secrets

CORS locked to CloudFront domain

No hard-coded credentials

Infrastructure defined via Terraform

Free-tier-aware architecture choices

📦 AWS Services Used
Currently Deployed
Amazon S3

Amazon CloudFront

AWS App Runner

Amazon ECR

IAM

Terraform

Planned (Future Phase)
ECS Fargate

OIDC-based CI/CD

Application Load Balancer (ALB)

AWS Secrets Manager

CloudWatch dashboards

🚀 Features
Frontend
Cinematic Netflix-style UI

API-driven movie catalog

Watch page demo player

Backend health debug panel

Backend
/health endpoint

/api/catalog endpoint

Dockerized & horizontally scalable

🎯 Why This Project Matters
AshFlix is not a toy app.

It demonstrates:

real AWS deployments

real CI/CD discipline

infrastructure ownership

security-first thinking

production-grade decision making

Built intentionally for DevOps / Cloud / Platform Engineer interviews.

👨‍💻 Author
Uwem Udo (ashNikov)
DevSecOps & Cloud Engineer
Portfolio Project

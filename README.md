<h1 align="center">
  <a href="https://d18qc73pgklufe.cloudfront.net" target="_blank">
    🎬 AshFlix
  </a>
</h1>

<p align="center">
  <strong>Netflix-style AI Streaming Demo</strong><br/>
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

## 📌 Overview

**AshFlix** is a **Netflix-style streaming dashboard** built as a **DevSecOps & Cloud Engineering portfolio project**.

This project focuses on:
- clean architecture
- safe infrastructure
- production-style workflows
- free-tier-friendly AWS usage

It is intentionally scoped to **what is actually deployed today**, with future phases clearly marked.

---

## 🌐 Live URLs

| Component | URL |
|---------|-----|
| Frontend (CloudFront) | https://d18qc73pgklufe.cloudfront.net |
| Backend (App Runner) | https://p3xh7pammx.eu-west-1.awsapprunner.com |
| Health Check | /health |
| Catalog API | /api/catalog |

---

## 🧱 Project Structure

```text
ashflix/
├── frontend/          # React + Vite frontend
├── backend/           # Node.js + Express API
├── infra/             # Terraform (ECR, App Runner, S3, CloudFront)
├── .github/workflows/ # CI/CD (frontend-only)
└── README.md

⚙️ Current Architecture (LIVE)
Frontend

React + Vite

Built to static assets

Hosted on S3

Served globally via CloudFront

Backend

Node.js + Express

Containerized with Docker

Hosted on AWS App Runner

HTTPS enabled by default

Data Flow
flowchart LR
    User --> CF[CloudFront]
    CF --> S3[S3 Static Frontend]
    S3 -->|API calls| AR[App Runner Backend]

🔄 CI/CD (Safe Mode)

Current CI/CD scope: frontend only

Trigger: push to main

Build: Vite production build

Deploy:

Sync to S3

CloudFront cache invalidation

❗ No backend auto-deploy
❗ No Terraform apply in CI
❗ No secrets committed to repo

🔐 Security & DevSecOps Practices

IAM-scoped AWS credentials

Secrets stored in GitHub Actions Secrets

CORS locked to CloudFront domain

No hard-coded credentials

Infrastructure managed via Terraform

Free-tier safe design

📦 AWS Services Used

Currently deployed

Amazon S3

Amazon CloudFront

AWS App Runner

Amazon ECR

IAM

Terraform

Planned (future phase)

ECS Fargate

OIDC-based CI/CD

ALB

Secrets Manager

CloudWatch dashboards

🚀 Features
Frontend

Cinematic Netflix-style UI

Browse catalog (API-driven)

Watch page demo player

Backend health debug panel

Backend

/health endpoint

/api/catalog endpoint

Containerized & scalable

🧠 Why This Project Matters

AshFlix is not a toy app.

It demonstrates:

real AWS deployments

real CI/CD discipline

infrastructure ownership

security awareness

production thinking

Built intentionally for DevOps / Cloud / Platform Engineer interviews.

👨‍💻 Author

Uwem Udo (ashNikov)
DevSecOps & Cloud Engineer
Portfolio project



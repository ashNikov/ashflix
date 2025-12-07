# AshFlix Architecture (Draft)

## 1. Overview
AshFlix is a cloud-native, AI-powered streaming SaaS built to demonstrate senior DevSecOps engineering skills.  
This document will evolve as the system grows.

---

## 2. High-Level Components
- **Frontend**: React + Vite (served via S3 + CloudFront)
- **Backend**: Node.js/TypeScript microservices (Lambda or EKS)
- **Data Layer**: DynamoDB, S3, optional PostgreSQL
- **AI Layer**: Recommendations, search embeddings, thumbnail generation, intro audio
- **Infrastructure**: Terraform IaC for AWS resources
- **CI/CD**: GitHub Actions for tests, scanning, and deployments
- **Security**: IAM roles, secrets management, HTTPS everywhere, scans

---

## 3. System Flow (Simplified)
1. User visits AshFlix → CloudFront → S3 (frontend SPA)
2. AHI intro animation plays (client-side)
3. Frontend calls backend APIs via API Gateway
4. Backend fetches data from DynamoDB/S3
5. AI Lambdas generate:
   - recommendations
   - natural language search results
   - thumbnails
   - intro sound
6. CI/CD automates deployments and security checks

---

## 4. DevSecOps Principles
- Trunk-based development
- Small, frequent commits
- Automated tests & scans
- Infrastructure-as-Code
- Least-privilege IAM
- GitHub Actions + Terraform automation


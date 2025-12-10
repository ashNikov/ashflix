<h1 align="center">🎬 AshFlix — AI Streaming SaaS</h1>
<p align="center">A Production-Grade DevSecOps Portfolio Project • Docker • Terraform • AWS • CI/CD • ECS • Observability</p>

<p align="center">
  <img src="https://img.shields.io/badge/DevOps-Active-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Docker-Containerized-success?style=for-the-badge&logo=docker" />
  <img src="https://img.shields.io/badge/Terraform-IaC-informational?style=for-the-badge&logo=terraform" />
  <img src="https://img.shields.io/badge/AWS-ECR%20Deployed-orange?style=for-the-badge&logo=amazonaws" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-brightgreen?style=for-the-badge&logo=githubactions" />
  <img src="https://img.shields.io/badge/ECS-Fargate%20Ready-purple?style=for-the-badge&logo=amazonaws" />
</p>

---

# 📌 Overview  
AshFlix is a **Netflix-style AI streaming platform** built as a **full DevSecOps + Cloud Engineering showcase**.  
It demonstrates:

- 🐳 **Dockerized microservices**  
- ⚙️ **GitHub Actions CI/CD with OIDC (no access keys)**  
- ☁️ **AWS ECR container registry**  
- 🧱 **Terraform Infrastructure-as-Code**  
- 🚀 **ECS Fargate production-ready architecture**  
- 🔐 **Zero-trust IAM + image scanning + DevSecOps pipeline**  
- 📊 **CloudWatch Observability + SRE dashboards**  

---

# 🧱 Project Structure  
```
ashflix/
  frontend/          # React + Vite + Nginx build
  backend/           # Node.js + Express API
  infra/
    terraform/       # AWS IaC (ECR, IAM, App Runner/ECS)
  .github/workflows/ # CI/CD pipelines
  README.md
```

---

# ⚙️ Architecture (Phase 1 — Local + Docker + AWS ECR)

## 🏗️ Local Dev + Docker Architecture
```mermaid
flowchart LR
    subgraph Dev["Developer Machine"]
        FE[React Frontend] 
        BE[NodeJS Backend]
        Docker[Docker Desktop]
    end

    Docker --> FEContainer[Frontend Container (Nginx)]
    Docker --> BEContainer[Backend Container]

    FEContainer --> User[(User Browser)]
    BEContainer --> User
```

---

# ☁️ AWS Cloud Architecture (Phase 2 — ECS Production)

```mermaid
flowchart TB
    User[(User Browser)] --> CF[CloudFront CDN]
    CF --> S3[S3 Frontend Hosting]

    User --> ALB[Application Load Balancer]

    subgraph ECS["ECS Cluster (Fargate)"]
        Task1[Backend Task<br/>ashflix-backend:latest]
    end

    ALB --> Task1

    Task1 --> ECR[(AWS ECR)]
    GitHub[GitHub Actions] --> ECR

    GitHub --> TF[Terraform IaC]
```

---

# 🔄 CI/CD Pipeline Architecture

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub Actions
    participant ECR as AWS ECR
    participant ECS as ECS Deploy (Future)

    Dev->>GH: Push to main
    GH->>GH: Build Docker backend image
    GH->>ECR: Push :latest via OIDC
    ECR->>ECS: (Future) Trigger new deployment
```

---

# 🛡️ Security Architecture (IAM + OIDC + Zero Trust)

```mermaid
flowchart TB
    GH[GitHub Actions] --> OIDC[OIDC Provider]
    OIDC --> IAMRole[DeployRole]

    subgraph AWS
        IAMRole --> ECR
        IAMRole --> ECS
        Secrets[Secrets Manager]
    end

    Secrets --> ECS
    ECR --> Scan[ECR Vulnerability Scan]
```

---

# 📊 Observability Architecture (CloudWatch)

```mermaid
flowchart LR
    ECS[ECS Backend] --> Logs[CloudWatch Logs]
    ECS --> Metrics[CloudWatch Metrics]

    ALB[Load Balancer] --> Logs
    CF[CloudFront] --> Metrics

    Logs --> Insights[Logs Insights Queries]
    Metrics --> Dash[Dashboards]
    Dash --> Alerts[SNS Alerts]
```

---

# 🚀 Features Delivered (Phase 1)

### ✔ **Frontend**
- React + Vite
- Nginx production build
- AshFlix cinematic intro
- Modal UI + authentication mock

### ✔ **Backend**
- Express API
- `/health` + `/catalog` endpoints
- Dockerized for production

### ✔ **DevOps**
- Docker images for both services  
- Docker Compose multi-service environment  
- GitHub Actions CI/CD pipeline  
- OIDC authentication (no AWS keys needed)  
- Backend image automatically pushed to ECR  
- Terraform setup with ECR + IAM + outputs  

---

# 🛠️ DevSecOps Pipeline (Security Gates)

```mermaid
flowchart LR
    Code[Commit] --> Lint[Lint + Type Check]
    Lint --> Trivy[Trivy Scan]
    Trivy --> Snyk[Snyk Dependency Scan]
    Snyk --> Build[Docker Build]
    Build --> ECRScan[ECR Scan on Push]
    ECRScan --> Deploy[Deploy to ECS/App Runner]
```

---

# 📦 AWS Infrastructure (Terraform)

Provisioned so far:

- **ECR repository**
- **IAM OIDC Deploy Role**
- **Lifecycle rules**
- **Terraform state + outputs**

Outputs example:
```
backend_ecr_repo_url = "183376096120.dkr.ecr.eu-west-1.amazonaws.com/ashflix-backend"
```

---

# 🚧 Phase 2 (Upcoming)
- ECS Fargate deployment  
- CloudFront + S3 for frontend hosting  
- HTTPS (ACM certificate)  
- Secrets Manager  
- ALB + Auto scaling  
- Monitoring dashboards  

---

# 🏁 Summary
AshFlix now demonstrates a **real-world DevSecOps workflow**, including:

- Modern CI/CD  
- Secure AWS deployment  
- Docker microservices  
- Infrastructure-as-Code  
- Monitoring & security foundations  

This project serves as a **strong DevOps, Cloud, and Platform Engineering portfolio piece**.

---

# 👨‍💻 Author  
Built by **Uwem Udo (ashNikov)** — DevSecOps Engineer in progress.



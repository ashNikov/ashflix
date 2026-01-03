# 🧩 AshFlix Backend — DevSecOps API Layer

The AshFlix backend powers core functionality for **AshFlix — AI Streaming SaaS**.  
It is built with **TypeScript + Express**, following DevSecOps best practices and an AWS-native design.

---

# ✅ Current Features (Implemented)

### 🌐 Health / Status Endpoint
- `GET /`
- Returns metadata: service name, status, poweredBy, region.

### 🎬 Movie Catalog Placeholder API
- `GET /api/movies`
- Temporary in-memory dataset (to be replaced by DynamoDB)
- Used by the frontend for Browse & Details modal.

### 🔐 CORS Enabled
- Frontend can access backend during development.

### 🛠 Scripts
- `npm run dev` – run local TS backend (ts-node-dev)
- `npm run build` – compile TypeScript → `dist/`
- `npm start` – run compiled server

---

# 🚀 Planned AshFlix Microservices (AWS)

### **Auth Service**
- Handles login, JWT issuance, and session validation.
- Deployed as AWS Lambda behind API Gateway.

### **Catalog Service**
- Serves movie/series metadata to the frontend.
- Reads from DynamoDB tables.
- REST endpoints like `/catalog/sections`, `/catalog/title/{id}`.

### **Recommendation Service (AI)**
- Uses embeddings + simple ML logic to generate “Recommended for You”.
- Async jobs via Lambda + SQS (future).

### **Health / Status Endpoint**
- `/health` used by uptime checks & dashboards.
- Returns build version, region, and status.

---

# 🧰 Tech Stack (Planned AWS Architecture)

- Node.js + TypeScript
- AWS Lambda + API Gateway
- DynamoDB (metadata)
- S3 (images / thumbnails)
- Terraform for Infrastructure as Code
- CI/CD (GitHub Actions)

This folder will later contain:

- `src/handlers/*.ts` Lambda handlers  
- CI workflows for deploy  
- Production-ready environment configs  

---

# 📡 API Endpoints (Current Local Dev)

| Method | Endpoint         | Description                          |
|--------|------------------|--------------------------------------|
| GET    | `/`              | Service health + metadata            |
| GET    | `/api/movies`    | Returns sample movie data (temporary)|

---

### 🔥 Powered by **UWEM** · DevSecOps • Cloud • AI


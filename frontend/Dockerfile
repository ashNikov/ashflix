# ---------- 1) Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Only install deps first (better caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy rest of the frontend code
COPY . .

# Build production assets
RUN npm run build

# ---------- 2) Nginx runtime ----------
FROM nginx:1.27-alpine

# Copy our SPA config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder image
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


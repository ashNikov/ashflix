# AshFlix Terraform Infrastructure

This folder will contain Infrastructure-as-Code for:

- S3 bucket + CloudFront (frontend hosting)
- Lambda functions (AI tasks & core backend logic)
- API Gateway
- DynamoDB tables
- IAM roles & policies
- Optional: VPC + EKS for container services

## Goals
- Fully reproducible AWS environment
- Version-controlled infrastructure
- Zero manual clicking in AWS console
- Security-focused IAM configurations
- Remote backend (S3) for Terraform state


terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

locals {
  project_name = "ashflix"
  environment  = "dev"
}

# AshFlix backend ECR repository
resource "aws_ecr_repository" "ashflix_backend" {
  name = "ashflix-backend"

  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

# Simple lifecycle: clean up old untagged images
resource "aws_ecr_lifecycle_policy" "ashflix_backend_untagged_policy" {
  repository = aws_ecr_repository.ashflix_backend.name

  policy = jsonencode({
    rules = [
      {
        rulePriority = 1
        description  = "Expire untagged images older than 14 days"
        selection = {
          tagStatus   = "untagged"
          countType   = "sinceImagePushed"
          countUnit   = "days"
          countNumber = 14
        }
        action = {
          type = "expire"
        }
      }
    ]
  })
}


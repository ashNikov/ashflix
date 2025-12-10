output "project_name" {
  value = local.project_name
}

output "environment" {
  value = local.environment
}

output "region" {
  value = var.aws_region
}

output "backend_ecr_repo_url" {
  description = "ECR repository URL for the AshFlix backend image"
  value       = aws_ecr_repository.ashflix_backend.repository_url
}


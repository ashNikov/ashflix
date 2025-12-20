resource "aws_ecr_repository" "backend" {
  name                 = "${var.project_name}-backend"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

output "backend_ecr_repo_url" {
  value = aws_ecr_repository.backend.repository_url
}

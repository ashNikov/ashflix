##############################
# IAM role for App Runner ECR access
##############################

resource "aws_iam_role" "ashflix_apprunner_ecr_access" {
  name = "ashflix-apprunner-ecr-access"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "build.apprunner.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# Attach managed policy so App Runner can pull from ECR
resource "aws_iam_role_policy_attachment" "ashflix_apprunner_ecr_access_policy" {
  role       = aws_iam_role.ashflix_apprunner_ecr_access.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess"
}

##############################
# App Runner service for AshFlix backend
##############################

resource "aws_apprunner_service" "ashflix_backend" {
  service_name = "ashflix-backend-dev"

  source_configuration {
    # Tell App Runner to use this role to pull from private ECR
    authentication_configuration {
      access_role_arn = aws_iam_role.ashflix_apprunner_ecr_access.arn
    }

    image_repository {
      image_repository_type = "ECR"
      # Use the ECR repo Terraform already created + dev-local tag
      image_identifier = "${aws_ecr_repository.ashflix_backend.repository_url}:dev-local"

      image_configuration {
        port = "5001"

        runtime_environment_variables = {
          NODE_ENV     = "production"
          SERVICE_NAME = "ashflix-backend"
        }
      }
    }

    # We’ll control deploys manually for now
    auto_deployments_enabled = false
  }

  health_check_configuration {
    protocol = "HTTP"
    path     = "/health"
    # leave the defaults for thresholds/intervals
  }

  # Simple tags so it looks professional
  tags = {
    Project     = "AshFlix"
    Environment = "dev"
    Component   = "backend"
    ManagedBy   = "terraform"
  }
}


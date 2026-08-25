data "aws_iam_policy_document" "apprunner_assume" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["build.apprunner.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "apprunner_ecr_access" {
  name               = "${var.project_name}-apprunner-ecr-access"
  assume_role_policy = data.aws_iam_policy_document.apprunner_assume.json
}

resource "aws_iam_role_policy_attachment" "apprunner_ecr_access" {
  role       = aws_iam_role.apprunner_ecr_access.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess"
}

resource "aws_apprunner_service" "backend" {
  service_name = "${var.project_name}-backend"

  source_configuration {
    authentication_configuration {
      access_role_arn = aws_iam_role.apprunner_ecr_access.arn
    }

    image_repository {
      image_identifier      = "${aws_ecr_repository.backend.repository_url}:latest"
      image_repository_type = "ECR"

      image_configuration {
        port = "5001"

        runtime_environment_variables = {
          PORT = "5001"

          # Production frontend origin (CloudFront)
          ASHFLIX_FRONTEND_ORIGIN = "https://${aws_cloudfront_distribution.frontend.domain_name}"
        }
      }
    }

    auto_deployments_enabled = true
  }
}

output "backend_apprunner_url" {
  value = "https://${aws_apprunner_service.backend.service_url}"
}

output "backend_apprunner_host" {
  value = aws_apprunner_service.backend.service_url
}

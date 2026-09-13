locals {
  region = var.aws_region

  name = "${var.project_name}-${var.environment}"

  vpc_cidr = "10.0.0.0/16"

  azs = [
    "${var.aws_region}a",
    "${var.aws_region}b",
    "${var.aws_region}c"
  ]

  public_subnets = [
    "10.0.1.0/24",
    "10.0.2.0/24",
    "10.0.3.0/24"
  ]

  private_subnets = [
    "10.0.11.0/24",
    "10.0.12.0/24",
    "10.0.13.0/24"
  ]

  intra_subnets = [
    "10.0.21.0/24",
    "10.0.22.0/24",
    "10.0.23.0/24"
  ]

  tags = {
    Project     = var.project_name
    Environment = var.environment
    Terraform   = "true"
  }
}

provider "aws" {
  region = local.region

  default_tags {
    tags = local.tags
  }
}

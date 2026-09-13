module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "6.7.0"

  name = local.name
  cidr = local.vpc_cidr

  azs = local.azs

  public_subnets  = local.public_subnets
  private_subnets = local.private_subnets
  intra_subnets   = local.intra_subnets

  enable_dns_hostnames = true
  enable_dns_support   = true

  enable_nat_gateway = true

  # One NAT Gateway keeps the development environment cheaper.
  # For production HA, use one NAT Gateway per AZ.
  single_nat_gateway = true

  # Public subnets
  map_public_ip_on_launch = true

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
  }

  # Private subnets
  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = "1"
  }

  tags = local.tags
}

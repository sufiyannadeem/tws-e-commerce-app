module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "21.25.0"

  name               = local.name
  kubernetes_version = "1.34"

  endpoint_public_access = true

  enable_cluster_creator_admin_permissions = true

  vpc_id = module.vpc.vpc_id

  subnet_ids = module.vpc.private_subnets

  control_plane_subnet_ids = module.vpc.intra_subnets

  access_entries = {
    sufiyan = {
      principal_arn = "arn:aws:iam::80539xxxxxx:user/sufiyan"

      policy_associations = {
        admin = {
          policy_arn = "arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy"

          access_scope = {
            type = "cluster"
          }
        }
      }
    }
  }


  addons = {
    vpc-cni = {
      most_recent    = true
      before_compute = true
    }

    kube-proxy = {
      most_recent    = true
      before_compute = true
    }

    coredns = {
      most_recent = true
    }

    eks-pod-identity-agent = {
      most_recent = true
    }
  }

  eks_managed_node_groups = {
    e-comm-ng = {
      min_size     = 2
      max_size     = 3
      desired_size = 2

      instance_types = ["m7i-flex.large"]
      capacity_type  = "ON_DEMAND"

      ami_type  = "AL2023_x86_64_STANDARD"
      disk_size = 35

      labels = {
        Environment = var.environment
        Project     = var.project_name
      }

      tags = {
        Name        = "e-comm-ng"
        Environment = var.environment
        Project     = var.project_name
      }
    }
  }

  tags = local.tags
}

resource "aws_vpc_security_group_ingress_rule" "jenkins_to_eks_api" {
  security_group_id            = module.eks.cluster_security_group_id
  referenced_security_group_id = aws_security_group.jenkins.id

  ip_protocol = "tcp"
  from_port   = 443
  to_port     = 443

  description = "Allow Jenkins EC2 to access EKS API"
}

resource "aws_vpc_security_group_ingress_rule" "bastion_to_eks_api" {
  security_group_id            = module.eks.cluster_security_group_id
  referenced_security_group_id = aws_security_group.bastion.id

  ip_protocol = "tcp"
  from_port   = 443
  to_port     = 443

  description = "Allow Bastion Host to access EKS API"
}

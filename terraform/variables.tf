variable "aws_region" {
  description = "AWS region where resources will be created"
  type        = string
  default     = "eu-west-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "e-commerce-app"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "instance_type" {
  description = "EC2 instance type for Jenkins"
  type        = string
  default     = "m7i-flex.large"
}

variable "ssh_cidr" {
  description = "CIDR allowed to access SSH"
  type        = string
  default     = "0.0.0.0/0"
}

variable "jenkins_cidr" {
  description = "CIDR allowed to access Jenkins on port 8080"
  type        = string
  default     = "0.0.0.0/0"
}

variable "public_key_path" {
  description = "Path to the SSH public key"
  type        = string
  default     = "terra-key.pub"
}

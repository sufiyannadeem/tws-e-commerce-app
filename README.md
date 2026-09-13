# 🛒 EasyShop - E-Commerce DevOps Project

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.1.1-green?style=for-the-badge&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-D24939?style=for-the-badge&logo=jenkins)
![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-326CE5?style=for-the-badge&logo=kubernetes)
![ArgoCD](https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?style=for-the-badge&logo=argo)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform)
![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazonaws)
![Trivy](https://img.shields.io/badge/Trivy-Security-1904DA?style=for-the-badge)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Dashboard-F46800?style=for-the-badge&logo=grafana)

EasyShop is a full-stack e-commerce application deployed on AWS using modern DevOps, CI/CD, Kubernetes, and GitOps practices.

The project demonstrates a complete end-to-end deployment workflow starting from application source code and continuing through Continuous Integration, Docker image creation, security scanning, GitOps-based deployment, Kubernetes orchestration, HTTPS, autoscaling, and monitoring.

---


# Project Overview


EasyShop is an e-commerce application built using Next.js, TypeScript, React, Redux, Tailwind CSS, and MongoDB.

The application is containerized using Docker and deployed on Amazon Elastic Kubernetes Service (EKS).

Terraform is used as Infrastructure as Code to provision the AWS infrastructure.

Jenkins is used for Continuous Integration and automating the application build pipeline.

Docker Hub is used as the container image registry.

Argo CD is used for GitOps-based Continuous Delivery.

NGINX Ingress Controller is used to expose the application to the internet.

cert-manager and Let's Encrypt are used to provide HTTPS certificates.

Kubernetes Horizontal Pod Autoscaler is used to automatically scale the application according to CPU utilization.

Prometheus and Grafana are used for monitoring, metrics collection, and visualization.

---


# Application Features


EasyShop provides the following application features:

- Modern responsive user interface
- Mobile-first design
- User authentication
- JWT-based authentication
- Product browsing
- Product search
- Product filtering
- Product categories
- Shopping cart
- Checkout functionality
- User profiles
- Order history
- Dark and light mode
- Responsive design for different screen sizes

---


# Application Architecture


The application follows a three-tier architecture.

The three main layers are:

1. Presentation Layer
2. Application Layer
3. Data Layer


## Presentation Layer


The presentation layer is responsible for the user interface.

Technologies used include:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redux

Users interact with the application through a web browser.


## Application Layer


The application layer contains the application logic and API functionality.

It handles:

- User authentication
- JWT authentication
- Product operations
- Shopping cart operations
- Checkout functionality
- Order management
- User profile functionality
- API requests


## Data Layer


MongoDB is used as the database.

The application communicates with MongoDB through the Kubernetes MongoDB service.

The database is used to store application data such as:

- Users
- Products
- Categories
- Orders
- Application information

---


# DevOps Architecture


The project follows a complete CI/CD and GitOps workflow.

The overall deployment flow is:

```text
                         Developer
```text
                             |
                             |
```
                       Push Application Code
```text
                             |
                             v
```
                  GitHub Application Repository
```text
                             |
                             |
                      GitHub Webhook
                             |
                             v
```
                         Jenkins CI
```text
                             |
              +--------------+--------------+
              |                             |
              v                             v
```
        Run Application Tests        Trivy Filesystem Scan
```text
              |                             |
              +--------------+--------------+
                             |
                             v
```
                  Build Docker Images
```text
                             |
                             v
```
                  Trivy Image Scan
```text
                             |
                             v
- Docker Hub
                             |
                             v
```
                 Update GitOps Repository
```text
                             |
                             v
```
                  GitHub GitOps Repository
```text
                             |
                             v
```

## Argo CD

```text
                             |
                             v
```

# Amazon EKS

```text
                             |
                             v
```

# Kubernetes Deployment

```text
                             |
                             v
```
                    EasyShop Application
```text
                             |
                             v
```

# NGINX Ingress Controller

```text
                             |
                             v
                    HTTPS / Let's Encrypt
                             |
                             v
- Users

```
Monitoring and autoscaling operate alongside the application:


# Amazon EKS

```text
                             |
                +------------+------------+
                |                         |
                v                         v
```
          Metrics Server              Prometheus
```text
                |                         |
                v                         v
```
               HPA                     Grafana
```text
                |                         |
                v                         v
```
        Application Scaling       Monitoring Dashboards

# Project Repositories


The project uses separate repositories for application source code, Kubernetes deployment configuration, and Jenkins shared functionality.


## Application Repository


The application source code is maintained in:

https://github.com/sufiyannadeem/tws-e-commerce-app

```text
Application branch:

master

```
This repository contains:

- Application source code
- Dockerfile
- Dockerfile.dev
- Jenkinsfile
- Terraform infrastructure
- Kubernetes-related project files
- Application configuration
- Scripts

## GitOps Repository


The Kubernetes deployment configuration is maintained separately in:

https://github.com/sufiyannadeem/tws-e-commerce-gitops

```text
GitOps branch:

main

```
The GitOps repository contains the Kubernetes manifests used by Argo CD.

Jenkins updates the Docker image tags in this repository after successfully building and pushing new images.


# Jenkins Shared Library


Reusable Jenkins pipeline functionality is maintained in:

https://github.com/sufiyannadeem/jenkins-shared-libraries

```text
Shared library branch:

main

```
The shared library provides reusable functions for the Jenkins pipeline and GitOps repository update process.


# Technology Stack


The project uses the following technologies.


## Application

- Next.js 14.1.0
- React
- TypeScript
- Redux
- Tailwind CSS

# MongoDB


## DevOps

- Git
- GitHub
- Jenkins

## Docker

- Docker Hub

## Trivy


## Infrastructure


## AWS


## Terraform

- Amazon VPC
- Amazon EC2

# Amazon EKS


# NAT Gateway

- Security Groups
- AWS Load Balancer

## Kubernetes


## Kubernetes


# Amazon EKS

- Deployment
- Service
- Job
- ConfigMap
- Secret
- Ingress
- Horizontal Pod Autoscaler

# Metrics Server


## GitOps


## Argo CD


## Networking


# NGINX Ingress Controller

- AWS Load Balancer
- Kubernetes Service

## HTTPS

- cert-manager
- Let's Encrypt

## Monitoring


# Metrics Server


# Prometheus


# Grafana


# Prerequisites


Before deploying EasyShop, make sure the required tools, accounts, credentials, and network configuration are available.


## Required Tools


The following tools are required:

- AWS CLI

## Terraform

- kubectl

## Helm


## Docker

- Git
- Jenkins
- Argo CD CLI

## Trivy

- OpenSSL
- curl
- jq

## Verify Installation


Check the installed versions using:

```text
aws --version
terraform version
kubectl version --client
helm version
docker --version
```
git --version
```text
argocd version --client
trivy --version
openssl version
curl --version
jq --version
```

## Required Accounts


The following accounts are required:

- AWS account
- GitHub account
- Docker Hub account
- Registered domain
- DNS management access

## AWS Account


An AWS account is required to provision and manage:

- Amazon VPC
Public and private subnets

# NAT Gateway

- Security Groups
EC2 instances

# Amazon EKS

EKS managed node groups
AWS Load Balancers

Configure AWS CLI:

```text
aws configure

```
Verify AWS access:

```text
aws sts get-caller-identity

```
The AWS identity used for Terraform and EKS administration must have sufficient permissions for the resources being created.


## GitHub Account


GitHub is used for:

- Application source code
GitOps Kubernetes manifests

# Jenkins Shared Library

Jenkins webhook integration

Application repository:

https://github.com/sufiyannadeem/tws-e-commerce-app

GitOps repository:

https://github.com/sufiyannadeem/tws-e-commerce-gitops

```text
Shared Library repository:

```
https://github.com/sufiyannadeem/jenkins-shared-libraries

## Docker Hub Account


Docker Hub is used as the container image registry.

The Jenkins pipeline builds and pushes the following images:

```text
sufiyannadeem/easyshop-app:<BUILD_NUMBER>

sufiyannadeem/easyshop-migration:<BUILD_NUMBER>

```
Docker Hub credentials must be configured in Jenkins.


## Domain Name


A registered domain is required for public HTTPS access.

The EasyShop application uses:

easyshop.nadeemsufiyan.in

The DNS record must point to the AWS Load Balancer created for the NGINX Ingress Controller.


## Network Requirements


The deployment requires internet connectivity for:

- GitHub
- Docker Hub
AWS APIs
Terraform providers
Helm repositories
- Let's Encrypt
Container image pulls

Port 80 must be reachable from the internet during Let's Encrypt HTTP-01 certificate validation.


# Project Structure


The main application repository contains the following important directories and files:

tws-e-commerce-app/
```text
│
├── .db/
│
├── kubernetes/
│
├── public/
│
├── scripts/
│
├── src/
│
├── terraform/
│
├── .dockerignore
├── .env
├── .gitignore
├── Dockerfile
├── Dockerfile.dev
├── Jenkinsfile
├── JENKINS.md
├── docker-compose.yml
├── ecosystem.config.cjs
├── next.config.cjs
├── next.config.js
├── package.json
├── package-lock.json
├── yarn.lock
├── tailwind.config.ts
└── tsconfig.json

```
The GitOps repository contains the Kubernetes deployment configuration:

tws-e-commerce-gitops/
```text
│
└── kubernetes/
    │
    ├── deployment.yaml
    ├── service.yaml
    ├── ingress.yaml
    ├── configmap.yaml
    ├── secret.yaml
    ├── mongodb.yaml
    ├── migration-job.yaml
    └── hpa.yaml

```
The exact GitOps files may change as the Kubernetes configuration evolves.


# Infrastructure with Terraform


Terraform is used to provision the AWS infrastructure.

The infrastructure includes:


## VPC

- Availability Zones
- Public subnets
- Private subnets
- Intra subnets

# NAT Gateway

- Security Groups
- Jenkins EC2 instance

# Bastion Host

- EKS cluster
- EKS managed node group
- EKS add-ons

The Terraform configuration is located inside:

terraform/

Initialize Terraform:

```text
cd terraform
terraform init

```
Format Terraform files:

```text
terraform fmt -recursive

```
Validate the configuration:

```text
terraform validate

```
Review the infrastructure plan:

```text
terraform plan

```
Apply the infrastructure:

```text
terraform apply

```
To destroy the infrastructure:

```text
terraform destroy

```
Always review the Terraform plan before applying changes.


# Terraform Infrastructure Configuration


The project uses the following Terraform modules and AWS resources.


## VPC


The VPC is created using:

terraform-aws-modules/vpc/aws

The project uses version:

6.7.0

The VPC contains:

- Public subnets
- Private subnets
- Intra subnets

# NAT Gateway


DNS hostnames and DNS support are enabled.


## EKS


The EKS cluster is created using:

terraform-aws-modules/eks/aws

The project uses version:

21.25.0

# VPC Architecture


The project uses a custom AWS VPC.

The VPC contains:

AWS VPC
```text
│
├── Public Subnets
│   ├── Jenkins EC2
│   ├── Bastion Host
│   └── Internet-facing Load Balancer
│
├── Private Subnets
│   └── EKS Worker Nodes
│
└── Intra Subnets
    └── EKS Control Plane

```
Public subnets are configured for internet-facing resources.

Private subnets are used for EKS worker nodes.

Intra subnets are used for the EKS control plane.


# NAT Gateway


The development environment uses a single NAT Gateway.

The Terraform configuration uses:

```text
enable_nat_gateway = true
single_nat_gateway  = true

```
Using a single NAT Gateway reduces development infrastructure costs.

Private EKS nodes use the NAT Gateway for outbound internet connectivity.

For production environments, one NAT Gateway per Availability Zone can be used for improved availability.


# Jenkins Infrastructure


Jenkins is deployed on an Ubuntu 24.04 LTS EC2 instance.

The Jenkins instance uses:

```text
Operating System : Ubuntu 24.04 LTS
Architecture     : x86_64
Root Disk        : 30 GB gp3

```
The Jenkins server is deployed in a public subnet and receives a public IP address.

The Jenkins Security Group allows:

```text
SSH
HTTP
```

## HTTPS

Jenkins port 8080
Outbound internet traffic

Jenkins requires access to:

- GitHub
- Docker Hub

## AWS

Trivy vulnerability databases
GitOps repository

# Jenkins EC2 Security


The Jenkins Security Group contains:

```text
SSH     : 22
HTTP    : 80
HTTPS   : 443
Jenkins : 8080

SSH access is restricted using:

```
ssh_cidr

Jenkins port 8080 is restricted using:

jenkins_cidr

```text
HTTP and HTTPS are available for web access and reverse-proxy configurations.

```

# Bastion Host


A Bastion Host is provisioned for administrative access.

The Bastion Host uses:

```text
Operating System : Ubuntu 24.04 LTS
Instance Type    : t3.micro
Root Disk        : 10 GB gp3

```
The Bastion Host is deployed in a public subnet.

```text
SSH access is restricted using:

```
ssh_cidr

The Bastion Host can be used for administrative access to the infrastructure and Kubernetes environment.


# EC2 Security


Both Jenkins and Bastion EC2 instances use:

```text
IMDSv2

```
Terraform configures:

```text
http_endpoint = enabled
http_tokens   = required

```
Root EBS volumes are encrypted using:

```text
gp3

```
and are configured to be deleted when the instances are terminated.


# Amazon EKS


Amazon EKS is used as the Kubernetes platform for running EasyShop.

The cluster is configured with:

```text
Kubernetes Version : 1.34
Endpoint           : Public

```
The EKS worker nodes are deployed in private subnets.

The control plane uses the intra subnets.

The managed node group is configured as:

```text
Node Group       : e-comm-ng
Instance Type    : m7i-flex.large
Capacity Type    : ON_DEMAND
Minimum Nodes    : 2
Desired Nodes    : 2
Maximum Nodes    : 3
AMI              : AL2023 x86_64
Disk Size        : 35 GB
```

# EKS Access


The Terraform configuration uses EKS access entries for cluster access.

The configured IAM user is granted:

```text
AmazonEKSClusterAdminPolicy

```
Cluster creator admin permissions are also enabled.

After creating the EKS cluster, configure kubectl:

```text
aws eks update-kubeconfig \
```
  --region <AWS_REGION> \
  --name <EKS_CLUSTER_NAME>

Verify access:

```text
kubectl get nodes

```
Check cluster information:

```text
kubectl cluster-info
```

# EKS Add-ons


The following EKS add-ons are enabled:

- VPC CNI
- kube-proxy
- CoreDNS
- EKS Pod Identity Agent

The VPC CNI is configured before compute resources are created.

The add-ons are managed through Terraform.


# EKS API Security


Jenkins and the Bastion Host are allowed to access the EKS API.

TCP port:

```text
443

```
is allowed from the Jenkins and Bastion Security Groups to the EKS cluster Security Group.

This allows administrative and CI/CD components to communicate with the Kubernetes API.


# Jenkins CI Pipeline


Jenkins provides the Continuous Integration portion of the project.

The Jenkins pipeline is triggered when code is pushed to the application GitHub repository.

```text
Application branch:

master

```
A GitHub webhook notifies Jenkins when new commits are pushed.

The pipeline performs:

Workspace cleanup
Application repository checkout
Testing
Filesystem security scanning
Docker image building
Docker image security scanning
Docker image pushing
GitOps manifest update

# Jenkins Pipeline Stages


### 1. Cleanup Workspace


The Jenkins workspace is cleaned before every build.

This prevents files from previous builds from interfering with the current build.


### 2. Clone Repository


Jenkins clones the EasyShop application repository:

https://github.com/sufiyannadeem/tws-e-commerce-app.git

Branch:

```text
master
```

### 3. Run Tests


The application dependencies are installed and application tests are executed.

The pipeline should stop if the test stage fails.


### 4. Security Scan - Filesystem


Trivy scans the application filesystem.

Example:

```text
trivy fs .

```
This identifies known vulnerabilities in the project dependencies and filesystem.


### 5. Build Docker Images


Two Docker images are built.

```text
Application image:

sufiyannadeem/easyshop-app:<BUILD_NUMBER>

Migration image:

sufiyannadeem/easyshop-migration:<BUILD_NUMBER>
```

### 6. Security Scan - Docker Images


The generated Docker images are scanned using Trivy.

Example:

```text
trivy image sufiyannadeem/easyshop-app:<BUILD_NUMBER>

```
The migration image is also scanned.


### 7. Push Docker Images


After successful validation and scanning, Jenkins pushes the images to Docker Hub.

```text
docker push sufiyannadeem/easyshop-app:<BUILD_NUMBER>

docker push sufiyannadeem/easyshop-migration:<BUILD_NUMBER>
```

### 8. Update GitOps Manifests


Jenkins clones the GitOps repository.

The Kubernetes image tags are updated.

The changes are committed and pushed to:

```text
main

```
The commit message follows:

chore: update image tags to <BUILD_NUMBER>

Argo CD detects the GitOps repository change.


# Docker and Docker Hub


Docker is used to containerize the EasyShop application.

The application repository contains:

- Dockerfile
- Dockerfile.dev

The production Dockerfile is used by Jenkins.

The migration workload uses a separate Docker image.

```text
Application image:

sufiyannadeem/easyshop-app

Migration image:

sufiyannadeem/easyshop-migration

```
Image tags are based on the Jenkins build number.

Example:

```text
easyshop-app:15
easyshop-migration:15
```

# Docker Image Lifecycle


The image lifecycle is:

Application Code
```text
      |
      v
- Jenkins
      |
      v
```
Docker Build
```text
      |
      v
```
Trivy Image Scan
```text
      |
      v
- Docker Hub
      |
      v
```

## GitOps Repository

```text
      |
      v
```

## Argo CD

```text
      |
      v
```

# Amazon EKS


# Security Scanning with Trivy


Trivy is integrated into the Jenkins CI pipeline.

Trivy performs filesystem scanning:

```text
trivy fs .

```
Docker image scanning:

```text
trivy image <IMAGE_NAME>:<TAG>

```
The purpose of the security scanning stage is to identify known vulnerabilities before container images are deployed to Kubernetes.


# Jenkins Credentials


Jenkins uses credentials to communicate securely with external services.

The project uses:

```text
GitHub:
```
github-credentials

```text
Docker Hub:
```
dockerhub-credentails

The Docker Hub credential ID contains the spelling:

dockerhub-credentails

because this is the credential ID configured for the pipeline.

Credentials should be stored inside Jenkins Credentials Manager.

Credentials should not be hardcoded inside the Jenkinsfile.


# Jenkins Shared Library


The project uses a Jenkins Shared Library for reusable pipeline functionality.

Repository:

https://github.com/sufiyannadeem/jenkins-shared-libraries

Branch:

```text
main

Configured library name:

Shared

```
The shared library provides reusable Jenkins functions.

One important function updates the Docker image tags in the GitOps repository.

The workflow is:

- Jenkins
```text
   |
   v
```
Clone GitOps Repository
```text
   |
   v
```
Update Kubernetes Image Tags
```text
   |
   v
```
Git Commit
```text
   |
   v
```
Git Push
```text
   |
   v
```

## GitOps Repository


# GitOps with Argo CD


Argo CD is used for Continuous Delivery.

GitOps repository:

https://github.com/sufiyannadeem/tws-e-commerce-gitops

Branch:

```text
main

```
Argo CD continuously monitors the GitOps repository.

When Jenkins updates a Docker image tag, Argo CD detects the change and synchronizes the Kubernetes resources.

The GitOps architecture separates:

Application Source Code

from:

Kubernetes Deployment Configuration

This provides a clear separation between CI and CD.


# Argo CD Application


The Argo CD application is:

easyshop-app

Argo CD namespace:

argocd

Application namespace:

easyshop

The Argo CD Application uses:

```text
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: easyshop-app
  namespace: argocd
spec:
  project: default

  source:
    repoURL: https://github.com/sufiyannadeem/tws-e-commerce-gitops.git
    targetRevision: main
    path: kubernetes

  destination:
    server: https://kubernetes.default.svc
    namespace: easyshop

  syncPolicy:
    automated:
      prune: true
      selfHeal: true

    syncOptions:
```
      - CreateNamespace=true

The destination:

https://kubernetes.default.svc

refers to the Kubernetes cluster where Argo CD is installed.


# Argo CD Automated Synchronization


Argo CD uses:

```text
automated:
  prune: true
  selfHeal: true

```
This provides:


## Automated Deployment


Git changes are automatically synchronized with Kubernetes.


## Pruning


Resources removed from Git can be removed from the Kubernetes environment.


## Self Healing


If Kubernetes resources are manually changed, Argo CD can restore them to the desired state stored in Git.


# Kubernetes Deployment


EasyShop runs inside:

easyshop

namespace.

The application is deployed using a Kubernetes Deployment.

The Deployment manages multiple EasyShop replicas.

The application is exposed internally through:

```text
easyshop-service

```
The service configuration is:

```text
Service Port : 80
Target Port  : 3000

```
The EasyShop application listens on:

```text
3000

```
The Kubernetes Service provides stable internal networking for the application pods.


# EasyShop Kubernetes Architecture


The application workload follows:

                    Kubernetes Namespace
                         easyshop
```text
                            |
                            v
```
                    EasyShop Deployment
```text
                            |
                  +---------+---------+
                  |         |         |
                  v         v         v
```
                Pod       Pod       Pod
```text
                  \         |         /
                   \        |        /
                    +-------+-------+
                            |
                            v
                    easyshop-service
                            |
                            v
```
                      NGINX Ingress

# MongoDB


MongoDB is deployed inside the EasyShop Kubernetes environment.

The MongoDB workload is exposed using:

mongodb-service

The application connects to MongoDB using the Kubernetes service name.

The connection format is:

```text
mongodb://mongodb-service:27017/easyshop

```
MongoDB stores the application data required by EasyShop.


# Database Migration


The project uses a separate database migration image.

```text
Migration image:

sufiyannadeem/easyshop-migration:<BUILD_NUMBER>

```
The migration job connects to MongoDB using:

```text
mongodb://mongodb-service:27017/easyshop

```
The migration Kubernetes Job is configured as an Argo CD PreSync hook.

This ensures database migrations run before the main application synchronization.

The migration hook uses:

```text
argocd.argoproj.io/hook: PreSync

```
and:

```text
argocd.argoproj.io/hook-delete-policy: BeforeHookCreation

```
This avoids Kubernetes Job immutability problems when a new migration image is deployed.

Check migration jobs:

```text
kubectl get jobs -n easyshop

```
Check migration pods:

```text
kubectl get pods -n easyshop

```
A successful migration should show:

```text
Completed
```

# Database Migration Workflow


The migration workflow is:

- Jenkins
```text
   |
   v
```
Build Migration Image
```text
   |
   v
```
Trivy Scan
```text
   |
   v
- Docker Hub
   |
   v
```

## GitOps Repository

```text
   |
   v
```

## Argo CD

```text
   |
   v
```
PreSync Migration Job
```text
   |
   v
```

# MongoDB

```text
   |
   v
```
Application Deployment

# Kubernetes ConfigMap


Non-sensitive application configuration can be stored using Kubernetes ConfigMaps.

Examples include:

```text
NODE_ENV
NEXT_PUBLIC_API_URL
NEXTAUTH_URL
MONGODB_URI

```
ConfigMaps should only contain non-sensitive configuration.


# Kubernetes Secrets


Sensitive values should be stored using Kubernetes Secrets.

Examples include:

```text
NEXTAUTH_SECRET
JWT_SECRET

```
Secrets should not be committed as plaintext values to public repositories.

For production environments, use a dedicated secret-management solution where possible.

If a secret is accidentally exposed in source control, rotate it immediately.


# NGINX Ingress Controller


NGINX Ingress Controller is used to expose EasyShop outside the Kubernetes cluster.

The project uses a single NGINX Ingress Controller.

Namespace:

```text
ingress-nginx

```
The NGINX controller is exposed using an AWS Load Balancer.

Traffic flow:

Internet
```text
    |
    v
- AWS Load Balancer
    |
    v
```

# NGINX Ingress Controller

```text
    |
    v
easyshop-ingress
    |
    v
easyshop-service
    |
    v
```
EasyShop Pods

The EasyShop Ingress uses:

```text
Ingress Class: nginx
```

# EasyShop Domain


The application uses:

easyshop.nadeemsufiyan.in

The Kubernetes Ingress uses the same hostname.

Verify the Ingress:

```text
kubectl get ingress -n easyshop

```
Example:

NAME               CLASS   HOSTS                       ADDRESS
```text
easyshop-ingress   nginx   easyshop.nadeemsufiyan.in   <AWS-LOAD-BALANCER>
```

# HTTPS with cert-manager


cert-manager is used to automatically manage TLS certificates.

Let's Encrypt is used as the Certificate Authority.

Production ClusterIssuer:

```text
letsencrypt-prod

```
Let's Encrypt production ACME endpoint:

https://acme-v02.api.letsencrypt.org/directory

The certificate is requested for:

easyshop.nadeemsufiyan.in

TLS secret:

```text
easyshop-tls-secret

```
The Ingress contains:

```text
cert-manager.io/cluster-issuer: letsencrypt-prod

HTTPS traffic is terminated at the NGINX Ingress Controller.

```

# Let's Encrypt HTTP-01 Challenge


cert-manager uses the HTTP-01 challenge to validate domain ownership.

The process is:

- cert-manager
```text
     |
     v
- Let's Encrypt
     |
     | HTTP-01 Challenge
     v
```
NGINX Ingress
```text
     |
     v
```

## Kubernetes


Port 80 must be publicly reachable during certificate validation.

Check certificates:

```text
kubectl get certificates -n easyshop

```
Check certificate requests:

```text
kubectl get certificaterequests -n easyshop

```
Check cert-manager:

```text
kubectl get pods -n cert-manager
```

# DNS Configuration


Create a DNS record for:

easyshop.nadeemsufiyan.in

The record should point to the AWS Load Balancer created for the NGINX Ingress Controller.

Expected traffic flow:

easyshop.nadeemsufiyan.in
```text
          |
          v
```
         DNS
```text
          |
          v
- AWS Load Balancer
          |
          v
```

# NGINX Ingress Controller

```text
          |
          v
easyshop-service
          |
          v
```
EasyShop Pods

Verify DNS:

```text
nslookup easyshop.nadeemsufiyan.in

```
or:

```text
dig easyshop.nadeemsufiyan.in
```

# Horizontal Pod Autoscaling


Kubernetes Horizontal Pod Autoscaler is used to automatically scale the EasyShop Deployment.

Current configuration:

```text
Minimum Replicas : 3
Maximum Replicas : 5
CPU Target       : 70%

```
The HPA monitors CPU utilization.

When CPU utilization increases, Kubernetes can increase the number of application replicas.

When CPU utilization decreases, Kubernetes can reduce replicas while respecting the minimum replica count.

Check HPA:

```text
kubectl get hpa -n easyshop

```
Example:

NAME           REFERENCE              TARGETS    MINPODS   MAXPODS   REPLICAS
easyshop-hpa   Deployment/easyshop    3%/70%     3         5         3

# Metrics Server


Metrics Server provides resource metrics required by Kubernetes HPA.

Check Metrics Server:

```text
kubectl get pods -n kube-system | grep metrics

```
Check node metrics:

```text
kubectl top nodes

```
Check pod metrics:

```text
kubectl top pods -n easyshop

```
Metrics Server is primarily used for Kubernetes resource metrics and HPA.


# Monitoring with Prometheus and Grafana


Prometheus and Grafana are used for monitoring the Kubernetes environment.

The project uses the kube-prometheus-stack.

Add the Prometheus Community Helm repository:

```text
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

```
Update Helm repositories:

```text
helm repo update

```
Create monitoring namespace:

```text
kubectl create namespace monitoring

```
Install kube-prometheus-stack:

```text
helm install kube-prometheus-stack \
```
  prometheus-community/kube-prometheus-stack \
  -n monitoring

Check monitoring components:

```text
kubectl get pods -n monitoring

```
The monitoring stack provides:


# Prometheus


# Grafana

- Alertmanager
- Kubernetes monitoring
- Node metrics
- Cluster metrics
- Pod metrics

# Prometheus


Prometheus collects metrics from the Kubernetes environment.

It can be used to monitor:

CPU utilization
Memory utilization
Pod status
Node status
Kubernetes resources
- Application metrics
Cluster health

Check Prometheus resources:

```text
kubectl get pods -n monitoring
```

# Grafana


Grafana provides dashboards for visualizing collected metrics.

Grafana can be used to monitor:

Kubernetes cluster health
Node CPU usage
Node memory usage
Pod resource usage
Application performance
Kubernetes workloads
Prometheus metrics

Grafana uses Prometheus as a metrics data source.


# Grafana Credentials


Grafana credentials can be retrieved from the Kubernetes Secret.

Get the Grafana admin password:

```text
kubectl get secret kube-prometheus-stack-grafana \
```
  -n monitoring \
```text
  -o jsonpath="{.data.admin-password}" | base64 --decode

```
echo

Get the Grafana admin username:

```text
kubectl get secret kube-prometheus-stack-grafana \
```
  -n monitoring \
```text
  -o jsonpath="{.data.admin-user}" | base64 --decode

```
echo

The credentials should be treated as sensitive information.


# Argo CD Monitoring


Argo CD provides metrics endpoints that can be integrated into monitoring.

Important Argo CD components include:

argocd-metrics
argocd-server-metrics
argocd-repo-server

These metrics can be used to monitor Argo CD health and GitOps activity.

Check Argo CD components:

```text
kubectl get pods -n argocd

```
Check Argo CD services:

```text
kubectl get svc -n argocd
```

# Complete CI/CD Workflow


The complete CI/CD workflow is:


1. Developer

```text
      |
      v
2. Push Code to GitHub
      |
      v
3. GitHub Webhook
      |
      v
4. Jenkins Pipeline
      |
      +--> Cleanup Workspace
      |
      +--> Clone Repository
      |
      +--> Run Tests
      |
      +--> Trivy Filesystem Scan
      |
      +--> Build Docker Images
      |
      +--> Trivy Docker Image Scan
      |
      +--> Push Images to Docker Hub
      |
      +--> Update GitOps Repository
      |
      v
5. GitOps Repository
      |
      v
6. Argo CD Detects Change
      |
      v
7. Argo CD Synchronizes Kubernetes
      |
      v
8. PreSync Database Migration
      |
      v
9. EasyShop Deployment Updated
      |
      v
10. Kubernetes Pods Running
      |
      v
11. NGINX Ingress
      |
      v
12. HTTPS
      |
      v
13. End User
```

# CI and CD Separation


The project separates Continuous Integration and Continuous Delivery.


## Continuous Integration


Jenkins is responsible for:

Code
```text
 |
 v
```
Testing
```text
 |
 v
```
Security Scan
```text
 |
 v
```
Docker Build
```text
 |
 v
```
Image Scan
```text
 |
 v
- Docker Hub
```

## Continuous Delivery


Argo CD is responsible for:


## GitOps Repository

```text
 |
 v
```
Detect Change
```text
 |
 v
```
Synchronize
```text
 |
 v
```

## Kubernetes

```text
 |
 v
```

## EKS


This separation follows the GitOps deployment model.


# Deployment Verification


After deployment, verify the Kubernetes namespace:

```text
kubectl get all -n easyshop

```
Check pods:

```text
kubectl get pods -n easyshop

```
Expected application pods should show:

```text
Running

```
Check Deployment:

```text
kubectl get deployment -n easyshop

```
Check Service:

```text
kubectl get svc -n easyshop

```
Check Ingress:

```text
kubectl get ingress -n easyshop

```
Check HPA:

```text
kubectl get hpa -n easyshop

```
Check certificates:

```text
kubectl get certificate -n easyshop

```
Check migration jobs:

```text
kubectl get jobs -n easyshop

```
Check Argo CD Application:

```text
kubectl get application -n argocd

```
Expected application status:

```text
Synced
Healthy
```

# Application Health Verification


Check the application pods:

```text
kubectl get pods -n easyshop

```
Check application deployment:

```text
kubectl get deployment easyshop -n easyshop

```
Check endpoints:

```text
kubectl get endpoints easyshop-service -n easyshop

```
The service should have active application endpoints.


# Useful Kubernetes Commands


## View all resources

```text
kubectl get all -n easyshop
```

## View pods

```text
kubectl get pods -n easyshop
```

## Watch pods

```text
kubectl get pods -n easyshop -w
```

## Describe a pod

```text
kubectl describe pod <POD_NAME> -n easyshop
```

## View application logs

```text
kubectl logs deployment/easyshop -n easyshop
```

## View service

```text
kubectl get svc -n easyshop
```

## View ingress

```text
kubectl get ingress -n easyshop
```

## View HPA

```text
kubectl get hpa -n easyshop
```

## View resource metrics

```text
kubectl top pods -n easyshop
```

## View node metrics

```text
kubectl top nodes
```

## View jobs

```text
kubectl get jobs -n easyshop
```

## View certificates

```text
kubectl get certificates -n easyshop
```

## View cert-manager pods

```text
kubectl get pods -n cert-manager
```

## View Argo CD applications

```text
kubectl get applications -n argocd
```

# Troubleshooting


## Pods Are Not Starting


Check:

```text
kubectl get pods -n easyshop

```
Describe the pod:

```text
kubectl describe pod <POD_NAME> -n easyshop

```
Check logs:

```text
kubectl logs <POD_NAME> -n easyshop

```
Check recent events:

```text
kubectl get events -n easyshop --sort-by=.lastTimestamp
```

## ImagePullBackOff


If a pod shows:


## ImagePullBackOff


check:

```text
kubectl describe pod <POD_NAME> -n easyshop

```
Verify that the Docker image exists in Docker Hub.

Verify the image tag in the GitOps repository.

Verify that the Kubernetes Deployment references the correct image.


## CrashLoopBackOff


If a pod shows:


## CrashLoopBackOff


check logs:

```text
kubectl logs <POD_NAME> -n easyshop

```
For a previous crashed container:

```text
kubectl logs <POD_NAME> -n easyshop --previous

```
Check:

- Environment variables
- Application configuration
- MongoDB connectivity
- Application startup errors
- Container configuration

## HPA Not Scaling


Check the HPA:

```text
kubectl get hpa -n easyshop

```
Check Metrics Server:

```text
kubectl top pods -n easyshop

```
If metrics are unavailable, verify Metrics Server is running.

Also verify that CPU resource requests are configured for the application containers because HPA CPU utilization depends on resource requests.


## Argo CD Application OutOfSync


Check:

```text
kubectl get application easyshop-app -n argocd

```
Check application details:

```text
argocd app get easyshop-app

```
Synchronize manually if required:

```text
argocd app sync easyshop-app

```
Verify:

GitOps repository URL
GitOps branch
Kubernetes manifest path
Docker image tag
Kubernetes namespace

## Database Migration Failure


Check migration jobs:

```text
kubectl get jobs -n easyshop

```
Check migration pods:

```text
kubectl get pods -n easyshop

```
Check migration logs:

```text
kubectl logs <MIGRATION_POD> -n easyshop

```
Verify MongoDB:

```text
kubectl get pods -n easyshop | grep mongodb

```
Verify MongoDB service:

```text
kubectl get svc mongodb-service -n easyshop

```
Verify the MongoDB connection string:

```text
mongodb://mongodb-service:27017/easyshop
```

## HTTPS Certificate Failure


Check certificates:

```text
kubectl get certificates -n easyshop

```
Check CertificateRequests:

```text
kubectl get certificaterequests -n easyshop

```
Check cert-manager:

```text
kubectl get pods -n cert-manager

```
Check ClusterIssuers:

```text
kubectl get clusterissuer

```
Verify DNS:

```text
nslookup easyshop.nadeemsufiyan.in

```
Make sure:

DNS points to the NGINX Load Balancer
Port 80 is publicly reachable
NGINX Ingress is running
cert-manager is running
The ClusterIssuer is ready

## Ingress Not Working


Check the Ingress:

```text
kubectl get ingress -n easyshop

```
Check NGINX controller:

```text
kubectl get pods -n ingress-nginx

```
Check NGINX service:

```text
kubectl get svc -n ingress-nginx

```
Check Ingress events:

```text
kubectl describe ingress easyshop-ingress -n easyshop

```
Verify DNS points to the AWS Load Balancer.


## Jenkins Pipeline Failure


If the Jenkins pipeline fails:

Check Jenkins console output.
Verify GitHub credentials.
Verify Docker Hub credentials.
Verify Docker daemon availability.
Check Trivy installation.
Verify GitOps repository permissions.
Verify the GitOps branch is main.
Verify the application branch is master.
Check Jenkins Shared Library configuration.
Verify the GitHub webhook.
Verify Jenkins has internet connectivity.

## Docker Push Failure


If Docker image push fails:

Check Docker login:

```text
docker login

```
Verify the image:

```text
docker images

```
Verify the repository name:

```text
sufiyannadeem/easyshop-app

```
and:

```text
sufiyannadeem/easyshop-migration

```
Verify Jenkins Docker Hub credentials.


## GitOps Update Failure


If Jenkins cannot update the GitOps repository:

Check:

- GitHub credentials
- Repository permissions
- Git branch
- Repository URL
- Git user configuration

The GitOps repository should be:

https://github.com/sufiyannadeem/tws-e-commerce-gitops

Branch:

```text
main
```

# Infrastructure Summary


The AWS infrastructure consists of:


## AWS

```text
│
├── VPC
│
├── Public Subnets
│   ├── Jenkins EC2
│   ├── Bastion Host
│   └── AWS Load Balancer
│
├── Private Subnets
│   └── EKS Worker Nodes
│
├── Intra Subnets
│   └── EKS Control Plane
│
├── NAT Gateway
│
├── Security Groups
│
└── Amazon EKS
    │
    └── e-comm-ng
        ├── Node 1
        └── Node 2
```

# Infrastructure Components


The main AWS components are:


## VPC

```text
 |
 +-- Public Subnets
 |     |
 |     +-- Jenkins
 |     +-- Bastion
 |     +-- Load Balancer
 |
 +-- Private Subnets
 |     |
 |     +-- EKS Nodes
 |
 +-- Intra Subnets
       |
       +-- EKS Control Plane

```

# NAT Gateway

- Security Groups
IAM / EKS Access

# Infrastructure Configuration


The infrastructure includes:

- VPC CIDR
- Availability Zones
Public Subnets
Private Subnets
Intra Subnets

# NAT Gateway

- Security Groups
- Jenkins EC2

# Bastion Host

EKS Cluster
EKS Managed Node Group

# EKS Add-ons


The development environment uses one NAT Gateway to reduce infrastructure costs.

EKS worker nodes are deployed in private subnets.


# Security Considerations


Security is implemented at multiple layers.

Infrastructure Security
Security Groups restrict network access.
Jenkins SSH access is restricted.
Bastion SSH access is restricted.
EKS API access is controlled using EKS access entries.
EKS worker nodes are deployed in private subnets.
EC2 root volumes are encrypted.
```text
IMDSv2 is enabled on EC2 instances.
```
CI Security

Trivy is used to scan:

- Application filesystem
- Docker images
Kubernetes Security

Sensitive configuration should be stored using Kubernetes Secrets instead of ConfigMaps.

Credential Security

GitHub and Docker Hub credentials are stored in Jenkins Credentials Manager.

Credentials should never be hardcoded inside the Jenkinsfile.


## Secret Management


Sensitive values such as:

```text
NEXTAUTH_SECRET
JWT_SECRET

```
should not be committed to public repositories.

If a secret is exposed, rotate it immediately.


# Production Improvements


The current project demonstrates a complete DevOps deployment architecture.

For a production environment, the following improvements can be considered.


## High Availability NAT Gateway


Use one NAT Gateway per Availability Zone instead of a single NAT Gateway.


## EKS Node Scaling


Configure larger or multiple managed node groups based on workload requirements.

Cluster Autoscaler or Karpenter can also be considered for dynamic node provisioning.


## Secret Management


Use services such as:

AWS Secrets Manager
AWS Systems Manager Parameter Store
External Secrets Operator

instead of storing sensitive values directly in Kubernetes manifests.


## Database Production Architecture


For production workloads, consider:

MongoDB Atlas
Amazon DocumentDB
Managed database architecture
Automated backups
Disaster recovery
Multi-AZ database strategy

## EKS Endpoint Security


For higher security, consider restricting the EKS API endpoint and managing administrative access through controlled private networking.


## Network Security


Consider:

AWS WAF
Network Firewall
VPC endpoints
Private endpoints
Restricted Security Groups

## Container Security


Improve container security with:

- Minimal base images
- Non-root containers
- Image signing
- SBOM generation
- Runtime security
- Regular vulnerability scanning

## Monitoring


Extend monitoring with:

- Alertmanager
- Alert rules
- Application metrics
- Log aggregation
- Centralized logging
- AWS CloudWatch
- Distributed tracing

# Project Highlights


This project demonstrates practical implementation of:

Infrastructure as Code using Terraform
AWS VPC design
AWS EKS deployment
EC2-based Jenkins
CI/CD automation
Jenkins Shared Libraries
Docker containerization
Docker Hub image management
Trivy security scanning
GitHub webhooks
GitOps architecture
Argo CD deployment
Kubernetes workloads
MongoDB deployment
Database migration jobs
NGINX Ingress
- AWS Load Balancer

# HTTPS with cert-manager

- Let's Encrypt

# Horizontal Pod Autoscaling


# Metrics Server

Prometheus monitoring
Grafana dashboards

# End-to-End Architecture Summary


The complete architecture can be summarized as:

```text
                           INTERNET
                              |
                              v
                       DNS / DOMAIN
                              |
                              v
                    AWS LOAD BALANCER
                              |
                              v
                 NGINX INGRESS CONTROLLER
                              |
                              v
                      EASYSHOP SERVICE
                              |
                              v
                +--------------------------+
                |       AMAZON EKS         |
                |                          |
                |   +------------------+   |
                |   | EasyShop Pods    |   |
                |   | Replica: 3       |   |
                |   +------------------+   |
                |            |             |
                |            v             |
                |      MongoDB Service     |
                |            |             |
                |            v             |
                |         MongoDB          |
                +--------------------------+
```
                              ^
```text
                              |
```
                         ARGO CD / GITOPS
                              ^
```text
                              |
```
                       GITOPS REPOSITORY
                              ^
```text
                              |
```
                           JENKINS
                              ^
```text
                              |
```
                       GITHUB WEBHOOK
                              ^
```text
                              |
```
                     APPLICATION REPO
                              ^
```text
                              |
```
                         DEVELOPER

Monitoring:

                         AMAZON EKS
```text
                              |
                +-------------+-------------+
                |                           |
                v                           v
```
         Metrics Server                 Prometheus
```text
                |                           |
                v                           v
```
               HPA                       Grafana
```text
                |                           |
                v                           v
```
       Application Scaling          Monitoring Dashboards

# Final Deployment Result


After successful deployment, the expected environment contains:

AWS Infrastructure
```text
        |
        v
```

# Amazon EKS

```text
        |
        +--> EasyShop Deployment
        |
        +--> MongoDB
        |
        +--> Database Migration
        |
        +--> HPA
        |
        +--> NGINX Ingress
        |
        +--> cert-manager
        |
        +--> HTTPS
        |
        +--> Prometheus
        |
        +--> Grafana
        |
        +--> Argo CD

```
The application is available through:

https://easyshop.nadeemsufiyan.in

The deployment is managed through a GitOps workflow where Jenkins updates the GitOps repository and Argo CD synchronizes the desired Kubernetes state with the EKS cluster.


# Useful Commands


## Terraform

```text
terraform init
terraform validate
terraform fmt -recursive
terraform plan
terraform apply
terraform destroy
```

## AWS

```text
aws sts get-caller-identity

aws eks update-kubeconfig \
```
  --region <AWS_REGION> \
  --name <EKS_CLUSTER_NAME>

## Kubernetes

```text
kubectl get nodes

kubectl get pods -A

kubectl get all -n easyshop

kubectl get ingress -n easyshop

kubectl get hpa -n easyshop

kubectl top pods -n easyshop

kubectl top nodes
```

## Argo CD

```text
argocd app list

argocd app get easyshop-app

argocd app sync easyshop-app
```

## Docker

```text
docker build -t sufiyannadeem/easyshop-app:<TAG> .

docker push sufiyannadeem/easyshop-app:<TAG>
```

## Trivy

```text
trivy fs .

trivy image sufiyannadeem/easyshop-app:<TAG>
```

## Helm

```text
helm repo list

helm list -A

helm repo update
```

# Project Validation Checklist


Before considering the deployment complete, verify the following:

[ ] Terraform infrastructure created successfully

[ ] VPC is available

[ ] Public subnets are available

[ ] Private subnets are available

[ ] NAT Gateway is available

[ ] Jenkins EC2 is running

[ ] Bastion Host is running

[ ] EKS cluster is active

[ ] EKS worker nodes are Ready

[ ] EKS add-ons are healthy

[ ] Jenkins is accessible

[ ] GitHub webhook is working

[ ] Jenkins Shared Library is configured

[ ] Docker Hub credentials are configured

[ ] Trivy is working

[ ] Application Docker image is pushed

[ ] Migration Docker image is pushed

[ ] GitOps repository is updated

[ ] Argo CD application is Synced

[ ] Argo CD application is Healthy

[ ] EasyShop pods are Running

[ ] MongoDB pod is Running

[ ] Database migration completed

[ ] EasyShop Service is available

[ ] NGINX Ingress is available

[ ] AWS Load Balancer is available

[ ] DNS resolves correctly

[ ] cert-manager is running

[ ] Let's Encrypt certificate is Ready

[ ] HTTPS is working

[ ] Metrics Server is working

[ ] HPA is working

[ ] Prometheus is running

[ ] Grafana is running

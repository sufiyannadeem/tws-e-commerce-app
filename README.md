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

## Project Overview

EasyShop is a full-stack e-commerce application deployed on AWS EKS using an automated DevOps and GitOps workflow.

The project demonstrates the complete flow from source-code commit to application deployment, including:

- Infrastructure provisioning using Terraform
- AWS VPC and EKS
- Jenkins CI pipeline
- Docker containerization
- Trivy security scanning
- Docker Hub image registry
- GitOps using Argo CD
- Kubernetes deployment
- NGINX Ingress
- HTTPS using cert-manager and Let's Encrypt
- Horizontal Pod Autoscaling
- Prometheus and Grafana monitoring

The main goal of the project is to automate application delivery while making the infrastructure reproducible, deployments traceable, and the application scalable and observable.

## Technology Stack

| Category | Technology |
|---|---|
| Application | Next.js, TypeScript |
| Database | MongoDB |
| Cloud | AWS |
| Infrastructure | Terraform |
| Containerization | Docker |
| CI | Jenkins |
| Security Scanning | Trivy |
| Container Registry | Docker Hub |
| Kubernetes | Amazon EKS |
| CD / GitOps | Argo CD |
| Ingress | NGINX Ingress Controller |
| TLS | cert-manager + Let's Encrypt |
| Autoscaling | Kubernetes HPA |
| Metrics | Metrics Server |
| Monitoring | Prometheus + Grafana |

## Project Repositories

### Application Repository

https://github.com/sufiyannadeem/tws-e-commerce-app.git

Contains the application source code, Dockerfiles, Jenkins pipeline and Terraform infrastructure.

### GitOps Repository

https://github.com/sufiyannadeem/tws-e-commerce-gitops.git

Contains the Kubernetes manifests used by Argo CD for deployment.


---

<img src="architecture.png" alt="EasyShop DevOps Architecture" width="100%">

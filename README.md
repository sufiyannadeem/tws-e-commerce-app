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

## Architecture

### Application Traffic Flow


                         USER
                           |
                           | HTTPS
                           v
                  +-------------------+
                  |   AWS LoadBalancer |
                  +-------------------+
                           |
                           v
                  +-------------------+
                  |  NGINX Ingress    |
                  +-------------------+
                           |
                           v
                  +-------------------+
                  | EasyShop Service  |
                  +-------------------+
                           |
              +------------+------------+
              |            |            |
              v            v            v
           Pod 1        Pod 2        Pod 3
              |            |            |
              +------------+------------+
                           |
                           v
                  +-------------------+
                  |  MongoDB Service   |
                  +-------------------+
                           |
                           v
                       MongoDB
---

## CI/CD and GitOps Flow

                       DEVELOPER
                           |
                           | git push
                           v
                  +------------------+
                  |      GitHub      |
                  | Application Repo |
                  +------------------+
                           |
                           | Webhook
                           v
                  +------------------+
                  |     Jenkins      |
                  |       CI         |
                  +------------------+
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
       Tests            Trivy         Docker Build
                        Scan                |
                                            v
                                      Docker Images
                                            |
                                            v
                                      Docker Hub
                                            |
                                            v
                                  GitOps Repository
                                            |
                                            v
                                        Argo CD
                                            |
                                            v
                                     AWS EKS Cluster
                                            |
                         +------------------+------------------+
                         |                  |                  |
                         v                  v                  v
                    EasyShop             MongoDB          Monitoring
                       Pods                                  |
                         |                                    |
                         v                                    v
                        HPA                           Prometheus + Grafana

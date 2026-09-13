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
                             |
                             |
                       Push Application Code
                             |
                             v
                  GitHub Application Repository
                             |
                             |
                      GitHub Webhook
                             |
                             v
                         Jenkins CI
                             |
              +--------------+--------------+
              |                             |
              v                             v
        Run Application Tests        Trivy Filesystem Scan
              |                             |
              +--------------+--------------+
                             |
                             v
                  Build Docker Images
                             |
                             v
                  Trivy Image Scan
                             |
                             v
                       Docker Hub
                             |
                             v
                 Update GitOps Repository
                             |
                             v
                  GitHub GitOps Repository
                             |
                             v
                         Argo CD
                             |
                             v
                      Amazon EKS
                             |
                             v
                  Kubernetes Deployment
                             |
                             v
                    EasyShop Application
                             |
                             v
                   NGINX Ingress Controller
                             |
                             v
                    HTTPS / Let's Encrypt
                             |
                             v
                          Users

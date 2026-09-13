# 🛒 EasyShop – E-Commerce DevOps Project

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.1.1-green?style=for-the-badge&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-CD-D24939?style=for-the-badge&logo=jenkins)
![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-326CE5?style=for-the-badge&logo=kubernetes)
![Argo CD](https://img.shields.io/badge/Argo%20CD-GitOps-EF7B4D?style=for-the-badge&logo=argo)
![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazonaws)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Dashboards-F46800?style=for-the-badge&logo=grafana)

A production-style **full-stack e-commerce application** deployed on **AWS EKS** using a complete **DevOps and GitOps workflow**.

The project demonstrates how application development, CI/CD, containerization, Kubernetes, infrastructure as code, GitOps, security scanning, HTTPS, autoscaling, and monitoring can be integrated into a modern cloud-native deployment.

---

# 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Application Features](#-application-features)
- [Application Architecture](#-application-architecture)
- [DevOps Architecture](#-devops-architecture)
- [Project Repositories](#-project-repositories)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Project Structure](#-project-structure)
- [Infrastructure with Terraform](#-infrastructure-with-terraform)
- [AWS EKS Infrastructure](#-aws-eks-infrastructure)
- [Jenkins CI Pipeline](#-jenkins-ci-pipeline)
- [Jenkins Shared Library](#-jenkins-shared-library)
- [Docker](#-docker)
- [Security Scanning with Trivy](#-security-scanning-with-trivy)
- [GitOps with Argo CD](#-gitops-with-argo-cd)
- [Kubernetes Deployment](#-kubernetes-deployment)
- [MongoDB and Database Migration](#-mongodb-and-database-migration)
- [NGINX Ingress](#-nginx-ingress)
- [HTTPS with cert-manager](#-https-with-cert-manager)
- [DNS Configuration](#-dns-configuration)
- [Horizontal Pod Autoscaling](#-horizontal-pod-autoscaling)
- [Monitoring with Prometheus and Grafana](#-monitoring-with-prometheus-and-grafana)
- [Complete CI/CD Flow](#-complete-cicd-flow)
- [Verification](#-verification)
- [Troubleshooting](#-troubleshooting)
- [Infrastructure Summary](#-infrastructure-summary)
- [Project Highlights](#-project-highlights)
- [Production Improvements](#-production-improvements)
- [Screenshots](#-screenshots)
- [Final Deployment](#-final-deployment)

---

# 🚀 Project Overview

**EasyShop** is a modern e-commerce application built with Next.js and TypeScript, backed by MongoDB.

The application is deployed using a cloud-native DevOps architecture on AWS.

The infrastructure is provisioned using **Terraform**, the application is containerized using **Docker**, CI is implemented using **Jenkins**, and Kubernetes deployments are managed using **Argo CD GitOps**.

The project also includes:

- Automated CI/CD
- Docker image security scanning
- Kubernetes orchestration
- GitOps-based deployment
- NGINX Ingress
- HTTPS using Let's Encrypt
- Horizontal Pod Autoscaling
- Prometheus monitoring
- Grafana dashboards
- MongoDB
- Automated database migration
- AWS EKS
- Infrastructure as Code

---

# 🛍️ Application Features

The EasyShop application provides:

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
- Responsive design across devices

---

# 🏗️ Application Architecture

The application follows a **three-tier architecture**.

```text
                    ┌─────────────────────┐
                    │       Client        │
                    │  Browser / Mobile   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Presentation     │
                    │      Next.js        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Application/API   │
                    │  Business Logic     │
                    │ Authentication/JWT  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Data Layer      │
                    │      MongoDB        │
                    └─────────────────────┘

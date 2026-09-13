# 🛒 EasyShop – E-Commerce DevOps Project

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.1.1-green?style=for-the-badge&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-D24939?style=for-the-badge&logo=jenkins)
![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-326CE5?style=for-the-badge&logo=kubernetes)
![Argo CD](https://img.shields.io/badge/Argo%20CD-GitOps-EF7B4D?style=for-the-badge&logo=argo)
![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazonaws)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform)
![Trivy](https://img.shields.io/badge/Trivy-Security-1904DA?style=for-the-badge)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Dashboard-F46800?style=for-the-badge&logo=grafana)

A production-style **full-stack e-commerce application** deployed on **AWS EKS** using a complete **DevOps and GitOps workflow**.

This project demonstrates the integration of application development, Infrastructure as Code, Continuous Integration, containerization, security scanning, GitOps-based Continuous Delivery, Kubernetes orchestration, HTTPS, autoscaling, and monitoring.

---

# 📑 Table of Contents

- [Project Overview](#project-overview)
- [Application Features](#application-features)
- [Application Architecture](#application-architecture)
- [DevOps Architecture](#devops-architecture)
- [Project Repositories](#project-repositories)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Infrastructure with Terraform](#infrastructure-with-terraform)
- [VPC Architecture](#vpc-architecture)
- [AWS EKS Infrastructure](#aws-eks-infrastructure)
- [EKS Add-ons](#eks-add-ons)
- [Jenkins CI Pipeline](#jenkins-ci-pipeline)
- [Jenkins Pipeline Stages](#jenkins-pipeline-stages)
- [Security Scanning with Trivy](#security-scanning-with-trivy)
- [Docker](#docker)
- [Docker Image Push](#docker-image-push)
- [Jenkins Credentials](#jenkins-credentials)
- [Jenkins Shared Library](#jenkins-shared-library)
- [GitOps with Argo CD](#gitops-with-argo-cd)
- [GitOps Workflow](#gitops-workflow)
- [Argo CD Application](#argo-cd-application)
- [Kubernetes Deployment](#kubernetes-deployment)
- [MongoDB and Database Migration](#mongodb-and-database-migration)
- [Database Migration](#database-migration)
- [NGINX Ingress](#nginx-ingress)
- [HTTPS with cert-manager](#https-with-cert-manager)
- [TLS Configuration](#tls-configuration)
- [DNS Configuration](#dns-configuration)
- [Horizontal Pod Autoscaling](#horizontal-pod-autoscaling)
- [Metrics Server](#metrics-server)
- [Monitoring with Prometheus and Grafana](#monitoring-with-prometheus-and-grafana)
- [Grafana Credentials](#grafana-credentials)
- [Argo CD Metrics](#argo-cd-metrics)
- [Complete CI/CD Flow](#complete-cicd-flow)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)
- [Useful Kubernetes Commands](#useful-kubernetes-commands)
- [Infrastructure Summary](#infrastructure-summary)
- [Project Highlights](#project-highlights)
- [Security Considerations](#security-considerations)
- [Production Improvements](#production-improvements)
- [Screenshots](#screenshots)
- [Final Deployment](#final-deployment)
- [Current Deployment Status](#current-deployment-status)
- [Author](#author)
- [License](#license)

---

# Project Overview

**EasyShop** is a modern full-stack e-commerce application built using **Next.js** and **TypeScript**, with **MongoDB** as the database.

The application is deployed on **Amazon EKS** and follows a modern DevOps architecture.

The infrastructure is provisioned using **Terraform**, application builds are automated using **Jenkins**, containers are stored in **Docker Hub**, and Kubernetes deployments are managed using **Argo CD** following GitOps principles.

The project also implements:

- Infrastructure as Code
- Continuous Integration
- Continuous Delivery
- Docker containerization
- Trivy security scanning
- Kubernetes orchestration
- GitOps deployment
- NGINX Ingress
- HTTPS using Let's Encrypt
- Horizontal Pod Autoscaling
- Prometheus monitoring
- Grafana dashboards
- MongoDB
- Automated database migration
- AWS EKS

---

# Application Features

EasyShop provides the following application functionality:

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

# Application Architecture

The application follows a three-tier architecture.

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

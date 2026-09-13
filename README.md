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

EasyShop is a full-stack e-commerce application deployed on AWS using modern DevOps and GitOps practices.

The project demonstrates a complete end-to-end deployment workflow starting from application source code and continuing through Continuous Integration, Docker image creation, security scanning, GitOps-based deployment, Kubernetes orchestration, HTTPS, autoscaling, and monitoring.

---

# Project Overview

EasyShop is an e-commerce application built using Next.js, TypeScript, and MongoDB.

The application is containerized using Docker and deployed on Amazon Elastic Kubernetes Service (EKS).

Terraform is used to provision the AWS infrastructure.

Jenkins is used for Continuous Integration.

Docker Hub is used as the container image registry.

Argo CD is used for GitOps-based Continuous Delivery.

NGINX Ingress Controller is used to expose the application to the internet.

cert-manager and Let's Encrypt are used to provide HTTPS certificates.

Kubernetes Horizontal Pod Autoscaler is used to automatically scale the application.

Prometheus and Grafana are used for monitoring and visualization.

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

The overall flow is:

Developer pushes application code to GitHub.

GitHub triggers Jenkins using a webhook.

Jenkins performs testing and security scanning.

Jenkins builds the Docker images.

Trivy scans the Docker images.

Jenkins pushes the images to Docker Hub.

Jenkins updates the image tag inside the GitOps repository.

Argo CD detects the GitOps repository change.

Argo CD synchronizes the Kubernetes manifests with the EKS cluster.

The application is deployed to Kubernetes.

NGINX Ingress exposes the application.

cert-manager obtains the HTTPS certificate from Let's Encrypt.

HPA automatically scales the application according to CPU utilization.

Prometheus collects metrics and Grafana provides dashboards.

---

# Project Repositories

The project uses separate repositories for application source code and Kubernetes deployment configuration.

## Application Repository

The application source code is maintained in the following repository:

https://github.com/sufiyannadeem/tws-e-commerce-app

Application branch:

master

This repository contains the application source code, Docker configuration, Jenkins pipeline, Terraform infrastructure, and other application files.

## GitOps Repository

The Kubernetes deployment configuration is maintained separately in:

https://github.com/sufiyannadeem/tws-e-commerce-gitops

GitOps branch:

main

The GitOps repository contains the Kubernetes manifests used by Argo CD.

## Jenkins Shared Library

Reusable Jenkins pipeline functionality is maintained in:

https://github.com/sufiyannadeem/jenkins-shared-libraries

Shared library branch:

main

The shared library provides reusable functions for the Jenkins pipeline.

---

# Technology Stack

The project uses the following technologies.

## Application

- Next.js 14.1.0
- TypeScript
- React
- Redux
- Tailwind CSS
- MongoDB

## DevOps

- Git
- GitHub
- Jenkins
- Docker
- Docker Hub
- Trivy

## Cloud Infrastructure

- AWS
- Terraform
- Amazon VPC
- Amazon EC2
- Amazon EKS
- NAT Gateway
- Security Groups

## Kubernetes

- Kubernetes
- Amazon EKS
- Kubernetes Deployment
- Kubernetes Service
- Kubernetes Job
- Kubernetes ConfigMap
- Kubernetes Secret
- Kubernetes Ingress
- Kubernetes HPA

## GitOps

- Argo CD

## Networking

- NGINX Ingress Controller
- AWS Load Balancer

## HTTPS

- cert-manager
- Let's Encrypt

## Monitoring

- Metrics Server
- Prometheus
- Grafana

---

# Prerequisites

The following tools are required to deploy the project.

- AWS CLI
- Terraform
- kubectl
- Helm
- Docker
- Git
- Jenkins
- Argo CD CLI

Verify the installed tools using:

```bash
aws --version
terraform version
kubectl version --client
helm version
docker --version
git --version
argocd version --client

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

A modern full-stack e-commerce application deployed on **AWS EKS** using a complete **DevOps and GitOps workflow**.

This project demonstrates how application development, Infrastructure as Code, Continuous Integration, containerization, security scanning, GitOps-based Continuous Delivery, Kubernetes orchestration, HTTPS, autoscaling, and monitoring can be integrated into a cloud-native deployment.

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
- [AWS EKS](#aws-eks)
- [Jenkins CI Pipeline](#jenkins-ci-pipeline)
- [Docker and Docker Hub](#docker-and-docker-hub)
- [Security Scanning with Trivy](#security-scanning-with-trivy)
- [GitOps with Argo CD](#gitops-with-argo-cd)
- [Kubernetes Deployment](#kubernetes-deployment)
- [MongoDB and Database Migration](#mongodb-and-database-migration)
- [NGINX Ingress](#nginx-ingress)
- [HTTPS with cert-manager](#https-with-cert-manager)
- [DNS Configuration](#dns-configuration)
- [Horizontal Pod Autoscaling](#horizontal-pod-autoscaling)
- [Monitoring with Prometheus and Grafana](#monitoring-with-prometheus-and-grafana)
- [Complete CI/CD Workflow](#complete-cicd-workflow)
- [Deployment Verification](#deployment-verification)
- [Troubleshooting](#troubleshooting)
- [Infrastructure Summary](#infrastructure-summary)
- [Project Highlights](#project-highlights)
- [Production Improvements](#production-improvements)
- [Screenshots](#screenshots)
- [Final Result](#final-result)
- [Author](#author)
- [License](#license)

---

# Project Overview

**EasyShop** is a full-stack e-commerce application built using **Next.js**, **TypeScript**, and **MongoDB**.

The application is containerized using Docker and deployed to **Amazon Elastic Kubernetes Service (EKS)**.

The project follows a modern DevOps workflow:

```text
Developer
    |
    v
GitHub Application Repository
    |
    v
Jenkins CI
    |
    +---- Tests
    |
    +---- Trivy Security Scan
    |
    +---- Docker Build
    |
    +---- Docker Image Scan
    |
    +---- Push to Docker Hub
    |
    v
GitOps Repository
    |
    v
Argo CD
    |
    v
AWS EKS
    |
    v
EasyShop Application

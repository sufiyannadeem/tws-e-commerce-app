#!/bin/bash

set -e

echo "=========================================="
echo " Jenkins Server Setup Started"
echo "=========================================="

# ------------------------------------------
# 1. System Update
# ------------------------------------------
sudo apt-get update
sudo apt-get upgrade -y

# ------------------------------------------
# 2. Install Core Packages
# ------------------------------------------
sudo apt-get install -y \
    fontconfig \
    openjdk-17-jre \
    git \
    curl \
    wget \
    unzip \
    jq \
    ca-certificates \
    gnupg \
    lsb-release \
    apt-transport-https \
    software-properties-common \
    build-essential \
    python3 \
    make \
    g++

# ------------------------------------------
# 3. Install Jenkins
# ------------------------------------------
echo "Installing Jenkins..."

sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
    https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" \
    | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt-get update
sudo apt-get install -y jenkins

sudo systemctl enable jenkins
sudo systemctl start jenkins

# ------------------------------------------
# 4. Install Docker
# ------------------------------------------
echo "Installing Docker..."

sudo apt-get install -y docker.io

sudo systemctl enable docker
sudo systemctl start docker

# Allow current user to use Docker
sudo usermod -aG docker "$USER"

# Allow Jenkins to use Docker
sudo usermod -aG docker jenkins

# ------------------------------------------
# 5. Install Node.js 22
# ------------------------------------------
echo "Installing Node.js 22..."

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

sudo apt-get install -y nodejs

echo "Node version:"
node --version

echo "NPM version:"
npm --version

# ------------------------------------------
# 6. Install Trivy
# ------------------------------------------
echo "Installing Trivy..."

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://aquasecurity.github.io/trivy-repo/deb/public.key \
    | sudo gpg --dearmor \
    | sudo tee /etc/apt/keyrings/trivy.gpg > /dev/null

echo "deb [signed-by=/etc/apt/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" \
    | sudo tee /etc/apt/sources.list.d/trivy.list > /dev/null

sudo apt-get update
sudo apt-get install -y trivy

echo "Trivy version:"
trivy --version

# ------------------------------------------
# 7. Install AWS CLI
# ------------------------------------------
echo "Installing AWS CLI..."

if command -v aws >/dev/null 2>&1; then
    echo "AWS CLI already installed."
else
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" \
        -o /tmp/awscliv2.zip

    unzip -q /tmp/awscliv2.zip -d /tmp

    sudo /tmp/aws/install

    rm -rf /tmp/aws /tmp/awscliv2.zip
fi

echo "AWS CLI version:"
aws --version

# ------------------------------------------
# 8. Install kubectl
# ------------------------------------------
echo "Installing kubectl..."

if command -v kubectl >/dev/null 2>&1; then
    echo "kubectl already installed."
else
    KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)

    curl -LO "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl"

    chmod +x kubectl

    sudo mv kubectl /usr/local/bin/kubectl
fi

echo "kubectl version:"
kubectl version --client

# ------------------------------------------
# 9. Install Helm
# ------------------------------------------
echo "Installing Helm..."

if command -v helm >/dev/null 2>&1; then
    echo "Helm already installed."
else
    curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 \
        | bash
fi

echo "Helm version:"
helm version

# ------------------------------------------
# 10. Docker Buildx
# ------------------------------------------
echo "Checking Docker Buildx..."

if docker buildx version >/dev/null 2>&1; then
    echo "Docker Buildx is available."
else
    echo "WARNING: Docker Buildx is not available."
fi

# ------------------------------------------
# 11. Docker Compose
# ------------------------------------------
echo "Checking Docker Compose..."

if docker compose version >/dev/null 2>&1; then
    echo "Docker Compose is available."
else
    echo "Installing Docker Compose plugin..."

    sudo apt-get install -y docker-compose-plugin
fi

# ------------------------------------------
# 12. Restart Services
# ------------------------------------------
echo "Restarting Docker and Jenkins..."

sudo systemctl restart docker
sudo systemctl restart jenkins

# ------------------------------------------
# 13. Verify Installations
# ------------------------------------------
echo ""
echo "=========================================="
echo " Installation Verification"
echo "=========================================="

echo ""
echo "Git:"
git --version

echo ""
echo "Java:"
java -version

echo ""
echo "Jenkins:"
systemctl is-active jenkins

echo ""
echo "Docker:"
docker --version

echo ""
echo "Node:"
node --version

echo ""
echo "NPM:"
npm --version

echo ""
echo "Trivy:"
trivy --version

echo ""
echo "AWS CLI:"
aws --version

echo ""
echo "kubectl:"
kubectl version --client

echo ""
echo "Helm:"
helm version

echo ""
echo "Docker Compose:"
docker compose version

echo ""
echo "=========================================="
echo " Jenkins Server Setup Completed"
echo "=========================================="

echo ""
echo "IMPORTANT:"
echo "Log out and log back in, or reboot the server,"
echo "so the docker group permission takes effect."
echo ""

echo "Verify Jenkins Docker access with:"
echo "sudo -u jenkins docker ps"

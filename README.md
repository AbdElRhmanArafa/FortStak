# FortStak

A comprehensive project demonstrating a full-stack application deployment using modern DevOps practices. The project is divided into three main parts:

## Part 1: Web Application

A Node.js web application with the following features:

- User authentication (login/register)
- Dashboard for task management
- Task listing and completion tracking
- MongoDB database integration
- EJS templating for views

### Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS Templates
- Docker containerization

## Part 2: Infrastructure Setup

Automated Kubernetes cluster setup using:

- Ansible for configuration management
- Vagrant for local development environment
- Custom roles for master and worker node configuration

### Features

- Automated Kubernetes cluster provisioning
- Master and worker node configuration
- Token-based node joining
- Network configuration

## Part 3: Kubernetes Deployment

Kubernetes manifests for deploying the application:

- Deployment configuration
- Secret management
- (Additional K8s resources as needed)

## Getting Started

### Prerequisites

- Node.js and npm
- Docker
- Vagrant
- Ansible
- kubectl

### Running the Application Locally (Part 1)

1. Navigate to Part1 directory:

   ```bash
   cd Part1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

### Setting up Kubernetes Cluster (Part 2)

1. Navigate to Part2 directory:

   ```bash
   cd Part2
   ```

2. Start Vagrant environment:

   ```bash
   cd vagrant
   vagrant up
   ```

3. Run Ansible playbook:

   ```bash
   ansible-playbook site.yml -i inventory.INI
   ```

### Deploying to Kubernetes (Part 3)

1. Navigate to Part3 directory:

   ```bash
   cd Part3
   ```

2. Apply Kubernetes manifests:

   ```bash
   kubectl apply -f secret.yml
   kubectl apply -f deployment.yml
   ```

3. Access Argo CD UI (Installed by Ansible):

   ```bash
   kubectl port-forward svc/argocd-server -n argocd 8080:443
   ```

   Then visit: `https://localhost:8080` (username: admin)
   
   The initial password will be displayed during the Ansible playbook execution.

## Project Structure

```plaintext
├── Part1/                  # Web Application
│   ├── assets/            # Static assets (CSS, JS)
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # Application routes
│   └── views/            # EJS templates
├── Part2/                  # Infrastructure
│   ├── roles/            # Ansible roles
│   └── vagrant/          # Vagrant configuration
└── Part3/                  # Kubernetes Deployment
    ├── deployment.yml    # Main deployment
    ├── secret.yml        # Secret configuration
    └── argocd/          # Argo CD configuration
        └── application.yml  # Argo CD application manifest
```

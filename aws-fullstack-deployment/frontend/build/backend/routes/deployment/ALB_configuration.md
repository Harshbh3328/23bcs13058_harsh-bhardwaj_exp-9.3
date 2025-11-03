
---

### `deployment/ALB_configuration.md`
```md
# ⚙️ AWS ALB Configuration Guide

## 1️⃣ Create Target Group
- Navigate to **EC2 → Target Groups**
- Create a new target group for **Instances**
- Protocol: `HTTP`, Port: `5000`
- Health check path: `/api/hello`
- Register both backend EC2 instances

## 2️⃣ Create Application Load Balancer (ALB)
- Go to **EC2 → Load Balancers → Create Load Balancer**
- Choose **Application Load Balancer**
- Scheme: Internet-facing
- Add both subnets (from same VPC)
- Security group: Allow `HTTP (80)`
- Add listener → Forward to target group

## 3️⃣ Test ALB DNS
Copy ALB DNS Name (e.g., `http://myapp-alb-123456.ap-south-1.elb.amazonaws.com`)  
Open it in your browser — you should see:

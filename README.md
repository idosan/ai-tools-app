# AI Tools App

This project showcases a simple full-stack Node.js + MySQL application that displays a list of popular AI tools.  
It includes authentication, a protected UI, and runs entirely inside Docker containers.

---

## Quick Start (with Docker)

### Requirements
- Docker installed ([Download Docker](https://www.docker.com/get-started))
- Git installed ([Download Git](https://git-scm.com/))

---

### How to Run

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/ai-tools-app.git

# 2. Navigate into the project
cd ai-tools-app

# 3. Build and run everything (backend, MySQL, UI)
docker-compose up --build

This may take a couple of minutes the first time.

 Backend API running on: http://localhost:3000
 Frontend UI available at: http://localhost:3000

Protected with login screen:
Username: admin
Password: admin

🧪 Features
JWT Authentication

Express.js backend (TypeScript)

MySQL database (with init.sql)

Dockerized setup (Dockerfile + docker-compose)

Basic frontend with HTML + JS (served by Express)


# 📚 Library Management System

## 📌 Project Description
A backend system for managing library operations including members, books, and issuances with dashboard analytics.

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- PostgreSQL (Docker)
- Prisma ORM
- Docker

---

## 🚀 Features
- Member CRUD APIs
- Book CRUD APIs
- Issuance management
- Foreign key relational database
- Dashboard API (pending / overdue books)

---

## 📡 API Endpoints

### Members
- POST /members
- GET /members
- GET /members/:id
- PUT /members/:id

### Books
- POST /books
- GET /books

### Issuance
- POST /issuances
- GET /issuances

### Dashboard
- GET /dashboard/pending

---

## 🧪 How to Run

```bash
docker compose up --build
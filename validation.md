# Library Management System - Validation Report

## 1. Database Setup
- PostgreSQL database created using Docker
- Prisma ORM used for schema management
- Tables created: Member, Book, Issuance, Category, Collection
Screenshots: screenshots/list_of_relations.png

## 2. API Testing

### Member API
- POST /members → tested successfully
- GET /members → returns all members
Screenshots: screenshots/postman_members.png
Screenshots: screenshots/postman_get_members.png

### Book API
- POST /books → tested successfully
- GET /books → returns all books

Screenshots: screenshots/postman_books.png
Screenshots: screenshots/postman_get_books.png

### Issuance API
- POST /issuances → tested successfully
- GET /issuances → returns all records
Screenshots: screenshots/postman_issuance.png

### Dashboard API
- GET /dashboard/pending → returns pending/overdue books
Screenshots: screenshots/postman_dashboard.png

## 3. Database Validation
- Verified using PostgreSQL CLI (\dt, SELECT queries)
- Foreign key relationships working correctly 
Screenshots: screenshots/db.png
Screenshots: screenshots/db_issuance.png
             

## 4. Tools Used
- Node.js + Express
- Prisma ORM
- PostgreSQL (Docker)
- Postman for API testing


## 5. 3SQL QUERY QS OUTPUTS SS

  - sql q1- screenshots/SQLQ1.png
  - sql q2- screenshots/SQLQ2.png
  - sql q3- screenshots/SQLQ3.png

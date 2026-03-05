📚 BookNest — Bookstore Management System

A full-stack Bookstore Management System built with Spring Boot, React, and MySQL.
This application allows users to browse books, register/login with JWT authentication, and explore a curated collection of books through a modern UI.

🚀 Tech Stack
Backend

Java 22

Spring Boot

Spring Security

JWT Authentication

Spring Data JPA

Hibernate

MySQL

Maven

Frontend

React.js

React Router

Axios

Lucide Icons

CSS

🏗 Project Architecture
React Frontend
      │
      ▼
Axios API Calls
      │
      ▼
Spring Boot REST API
      │
      ▼
Spring Security + JWT
      │
      ▼
JPA / Hibernate
      │
      ▼
MySQL Database
📂 Project Structure
BookstoreProject
│
├── bookstore (Spring Boot Backend)
│   ├── src/main/java
│   │   ├── config
│   │   ├── controller
│   │   ├── model
│   │   ├── repository
│   │   ├── security
│   │   └── service
│   └── pom.xml
│
├── bookstore-frontend (React Frontend)
│   ├── src
│   │   ├── api
│   │   ├── pages
│   │   ├── styles
│   │   └── assets
│   └── package.json
│
└── README.md
🔐 Authentication

The system uses JWT (JSON Web Token) for authentication.

Flow
User Login
   ↓
Spring Boot validates credentials
   ↓
JWT token generated
   ↓
Token stored in localStorage
   ↓
Frontend sends token in Authorization header

Example header:

Authorization: Bearer <token>
📡 API Endpoints
Authentication
Register User
POST /api/register

Body

{
"name": "John Doe",
"email": "john@example.com",
"password": "password",
"role": "CUSTOMER"
}
Login User
POST /api/login

Body

{
"email": "john@example.com",
"password": "password"
}

Response

{
"token": "JWT_TOKEN"
}
Books
Get All Books
GET /api/books
🖥 Frontend Pages
Page	Description
Landing Page	Marketing page with features and testimonials
Login	User authentication
Register	Create account
Books	Browse and search books
⚙️ How to Run the Project
1️⃣ Clone Repository
git clone https://github.com/yourusername/booknest.git
2️⃣ Start Backend
cd bookstore
mvn spring-boot:run

Backend runs on

http://localhost:8081
3️⃣ Start Frontend
cd bookstore-frontend
npm install
npm start

Frontend runs on

http://localhost:3000
🗄 Database Configuration

Configure in:

src/main/resources/application.properties

Example:

spring.datasource.url=jdbc:mysql://localhost:3306/bookstore
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
✨ Features

✔ User Registration
✔ User Login with JWT
✔ Secure API with Spring Security
✔ Browse Books
✔ Search Books
✔ Genre Filters
✔ Modern Responsive UI

📸 Screenshots (Optional)

You can add screenshots here:

/screenshots
   landing.png
   login.png
   books.png
🔮 Future Improvements

Shopping Cart

Order Management

Admin Dashboard

Book Reviews

Payment Integration

Wishlist

👨‍💻 Author

Oshan Khati

B.Tech Computer Science Engineering

📜 License

This project is for educational purposes.
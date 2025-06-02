# Amlak Project

A simple and secure REST API for user management, authentication, and authorization using Node.js, Express, and Prisma.

---

## Project Overview

This project provides a RESTful API that supports user registration, login, user management, and JWT-based authentication and authorization.  
It uses Prisma ORM for database interactions and supports role-based access control.

---

## Technologies

- Node.js v22+
- Express.js
- Prisma ORM
- JWT Authentication
- PostgreSQL (or your preferred database)
- Docker & Docker Compose for easy deployment

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) v22 or higher
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional, for containerized setup)

---

## Quick Start with Docker

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd amlak

   ```

2. Create a .env file in the root directory based on .env.example and configure your environment variables:

   DATABASE_URL="postgresql://postgres:1234@localhost:5432/amlakdb?schema=public"
   ACCESS_TOKEN_SECRET=0ee1ddbd5c4c4f31727e
   REFRESH_TOKEN_SECRET=03da322dcd7b3fcc2824

   PORT=3000

3. Install dependencies:

   npm install

4. Build and start the containers:

docker-compose up --build

5. Run Prisma migrations and generate client inside the app container:

   npx prisma generate
   npx prisma migrate dev

6. Start the development server:

   npm run dev

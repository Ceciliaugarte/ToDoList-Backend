# TO DO LIST - BACKEND

## Description:

This API allows managing tasks, providing functionalities to create, read, update, and delete tasks. It also includes user authentication and user management to create, read, update, or delete users.

## Technologies requiered:

- **Node.js**
- **NestJS**
- **Prisma**
- **MySQL**
- **JWT (JSON Web Tokens)**

## Architecture:

### General overview:

The project follows a microservices architecture using NestJS. NestJS allows structuring the application into modules, controllers, and services, following the MVC (Model-View-Controller) design pattern. User authentication and task management are integrated as separate modules, facilitating scalability and code maintenance.

### Architecture diagram:

       +-----------+
       |   Client  |
       +-----+-----+
             |
       +-----v-----+
       |   NestJS  |
       |   Server  |
       +-----+-----+
             |
       +-----v-----+
       |   Prisma  |
       |  MySQL DB |
       +-----------+

### Entity relationships:

There is a one-to-many relationship between users and tasks. Each user can have multiple tasks associated with them, while each task belongs to only one user. This relationship is managed through foreign keys in the database, ensuring referential integrity.

### Security:

Security is implemented using JSON Web Tokens (JWT) for user authentication. Passwords are stored in the database after being encrypted with bcrypt, ensuring their protection.

### Scalability and performance:

To enhance performance, MySQL database connection is implemented using Prisma for efficient query operations. Additionally, NestJS allows the implementation of caching and horizontal scalability through microservices adoption if necessary.

## Features:

Tasks:

- Get all tasks
- Get a specific task
- Create a new task
- Update a task
- Delete a task

Users:

- Authenticate a user
- Get all users
- Get a specific user
- Create a new user
- Update a user
- Delete a user

## Installation:

Clone the repository:

```bash
   git clone https://github.com/Ceciliaugarte/ToDoList-Backend
```

Install the dependencies:

```bash
   cd ToDoList-Backend
   npm install
```

Configure the database:

- Create a MySQL database
- Create a .env file and configure the database as DATABASE_URL variable

Configure JWT in .env file:

- Create a variable called JWT_SECRET and assign a secret value

Run database migration:

```bash
npx prisma migrate dev --name init
```

Seed the database with a test user and tasks:

```bash
npm run seed
```

Start the server:

```bash
npm run start
```

Once the server is running, you can explore the API using Swagger UI.

**Access the API documentation:** (http://localhost:3000/docs)

### API Endpoints:

TASKS:

- `GET /tasks` | Get all tasks (requires token)
- `GET /tasks/:id` | Get one task (requires token)
- `POST /tasks` | Create new task (requires token)

Example of posting a task:

```json
{
  "title": "Hw",
  "description": "English hw -Writing and listening",
  "dueDate": "2024-07-22T00:00:00Z",
  "userId": 3
}
```

Expected answer:

```json
{
  "id": 6,
  "title": "Hw",
  "description": "English hw -Writing and listening",
  "dueDate": "2024-07-22T00:00:00.000Z",
  "status": "pending",
  "userId": 3
}
```

- `PATCH /tasks/:id` | Update a task (requires token)

Example updating a task:

```json
{
  "id": 3,
  "title": "Purchase the cooking books",
  "description": "They are in sale",
  "dueDate": "2024-06-30T15:27:59.401Z",
  "status": "pending",
  "userId": 5
}
```

It will return the same task updated

- `DELETE /tasks/:id` | Delete a task (requires token)

USERS:

- `POST /login` | Authenticate a user

Example of authenticating a user:

```json
{
  "username": "luis",
  "password": "1234"
}
```

Expected answer:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJuYW1lIjoidGluaSIsImlhdCI6MTcyMDMxMzMyNiwiZXhwIjoxNzIwMzI0MTI2fQ.JehhSBTe2GgWGR0rEp8lmf5eNhymyaCWGobAjD70Qvc",
  "id": 3,
  "username": "luis",
  "tasks": [
    {
      "id": 3,
      "title": "Hw",
      "description": "English hw -Writing and listening",
      "dueDate": "2024-07-22T00:00:00.000Z",
      "status": "pending"
    },
    {
      "id": 4,
      "title": "Purchase the cooking books",
      "description": "They are in sale",
      "dueDate": "2024-06-30T15:27:59.401Z",
      "status": "pending"
    }
  ]
}
```

- `POST /users` | Create/register a user
- `GET /users` | Get all users (requires token)

Example creating a new user:

```json
{
  "username": "maria",
  "password": "1234"
}
```

It will return the new user created

- `GET /users/:id` | Get one user (requires token)
- `PATCH /users/:id` | Update a user (requires token)

Example updating a new user:

```json
{
  "username": "maria1",
  "password": "1234"
}
```

It will return the new user updated

- `DELETE /users/:id` | Delete a user (requires token)

## Environment Variables:

Make sure to set the following environment variables in your .env file:

- `DATABASE_URL` - MySQL database name
- `JWT_SECRET` - Secret key for JSON Web Token generation

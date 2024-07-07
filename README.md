# TO DO LIST - BACKEND

## Description:

This API allows managing tasks, providing functionalities to create, read, update, and delete tasks. It also includes user authentication and user management to create, read, update, or delete users.

## Technologies requiered:

- **Node.js**
- **NestJS**
- **Prisma**
- **MySQL**
- **JWT (JSON Web Tokens)**

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

Seed the database with a test user and tasks:

```bash
npx prisma db seed
```

Run database migration:

```bash
npx prisma migrate dev --name init
```

Start the server:

```bash
npm run start
```

### API Endpoints:

TASKS:
- `GET /tasks` | Get all tasks
- `GET /tasks/:id` | Get one task
- `POST /tasks` | Create new task

Example of posting a task:
`{
"title": "Hw",
"description": "English hw -Writing and listening",
"dueDate": "2024-07-22T00:00:00Z",
"userId": 3
}`

Expected answer:
`{
"id": 6,
"title": "Hw",
"description": "English hw -Writing and listening",
"dueDate": "2024-07-22T00:00:00.000Z",
"status": "pending",
"userId": 3
}`

- `PATCH /tasks/:id` | Update a task

Example updating a task:
`{
"id":3,
"title": "Purchase the cooking books",
"description": "They are in sale",
"dueDate": "2024-06-30T15:27:59.401Z",
"status": "pending",
"userId": 5
}`
It will return the same task updated

- `DELETE /tasks/:id` | Delete a task

USERS:
- `POST /login` | Authenticate a user

Example of authenticating a user:
`{
"username": "luis",
"password": "1234"
}`
Expected answer:
`{
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
"id":4,
"title": "Purchase the cooking books",
"description": "They are in sale",
"dueDate": "2024-06-30T15:27:59.401Z",
"status": "pending",
}]
}`

-> `POST /users` | Create/register a user
-> `GET /users` | Get all users

Example creating a new user:
`{
"username": "maria",
"password": "1234"
}`
It will return the new user created

-> `GET /users/:id` | Get one user
-> `PATCH /users/:id` | Update a user

Example updating a new user:
`{
"username": "maria",
"password": "1234"
}`
It will return the new user updated

-> `DELETE /users/:id` | Delete a user

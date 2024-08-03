Got it! Here’s the `README.md` content in a single, copyable block:

```markdown
# Node.js Todo API

This Node.js application provides a REST API for user authentication and managing todos. It uses SQLite for data storage and Express.js for handling HTTP requests.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v18 or later)
- [SQLite](https://www.sqlite.org/) (for development and testing)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-api.git
   cd todo-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create and set up the database:**

   The database file `database.sqlite` will be created automatically. You don’t need to create it manually.

## Configuration

1. **Create a `.env` file in the root directory:**

   ```bash
   touch .env
   ```

2. **Add the following environment variables to the `.env` file:**

   ```env
   DATABASE_PATH=./database.sqlite
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   ```

   Adjust the `DATABASE_PATH` if your database file is located elsewhere. The `PORT` variable sets the port on which the server will listen. Replace `your_jwt_secret_key` with a secure key for signing JWT tokens.

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on port 3000 by default, or the port specified in the `.env` file.

2. **Access the API:**

   The API will be available at [http://localhost:3000](http://localhost:3000) (or the port specified in the `.env` file).

## API Endpoints

### User Authentication

- **Register a New User**

  `POST http://localhost:3000/auth/register`

  **Request Headers:**

  ```plaintext
  Content-Type: application/json
  ```

  **Request Body:**

  ```json
  {
    "username": "testuser",
    "password": "testpassword"
  }
  ```

  **Response:**

  ```json
  {
    "message": "User registered successfully"
  }
  ```

- **Login a User**

  `POST http://localhost:3000/auth/login`

  **Request Headers:**

  ```plaintext
  Content-Type: application/json
  ```

  **Request Body:**

  ```json
  {
    "username": "testuser",
    "password": "testpassword"
  }
  ```

  **Response:**

  ```json
  {
    "token": "YOUR_ACCESS_TOKEN"
  }
  ```

### Todo Management

- **Create a New Todo**

  `POST http://localhost:3000/api/todos`

  **Request Headers:**

  ```plaintext
  Content-Type: application/json
  Authorization: Bearer YOUR_ACCESS_TOKEN
  ```

  **Request Body:**

  ```json
  {
    "title": "New Todo",
    "description": "Description of the new todo"
  }
  ```

  **Response:**

  ```json
  {
    "id": 1,
    "title": "New Todo",
    "description": "Description of the new todo",
    "completed": false,
    "created_at": "2024-08-01T12:00:00.000Z",
    "updated_at": "2024-08-01T12:00:00.000Z"
  }
  ```

- **Get All Todos**

  `GET http://localhost:3000/api/todos`

  **Request Headers:**

  ```plaintext
  Authorization: Bearer YOUR_ACCESS_TOKEN
  ```

  **Response:**

  ```json
  [
    {
      "id": 1,
      "title": "New Todo",
      "description": "Description of the new todo",
      "completed": false,
      "created_at": "2024-08-01T12:00:00.000Z",
      "updated_at": "2024-08-01T12:00:00.000Z"
    },
    ...
  ]
  ```

- **Update a Todo**

  `PUT http://localhost:3000/api/todos/TODO_ID`

  **Request Headers:**

  ```plaintext
  Content-Type: application/json
  Authorization: Bearer YOUR_ACCESS_TOKEN
  ```

  **Request Body:**

  ```json
  {
    "title": "Updated Todo",
    "description": "Updated description of the todo"
  }
  ```

  **Response:**

  ```json
  {
    "id": 1,
    "title": "Updated Todo",
    "description": "Updated description of the todo",
    "completed": false,
    "created_at": "2024-08-01T12:00:00.000Z",
    "updated_at": "2024-08-01T12:30:00.000Z"
  }
  ```

- **Delete a Todo**

  `DELETE http://localhost:3000/api/todos/TODO_ID`

  **Request Headers:**

  ```plaintext
  Authorization: Bearer YOUR_ACCESS_TOKEN
  ```

  **Response:**

  ```plaintext
  204 No Content
  ```

- **Get All User Sessions**

  `GET http://localhost:3000/api/sessions`

  **Request Headers:**

  ```plaintext
  Authorization: Bearer YOUR_ACCESS_TOKEN
  ```

  **Response:**

  ```json
  [
    {
      "id": 1,
      "username": "testuser",
      "created_at": "2024-08-01T12:00:00.000Z",
      "last_accessed": "2024-08-01T12:30:00.000Z"
    },
    ...
  ]
  ```

## Database Schema

- **Users Table**

  ```sql
  CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Todos Table**

  ```sql
  CREATE TABLE Todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Sessions Table**

  ```sql
  CREATE TABLE Sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to customize this `README.md` file based on the specific details and requirements of your project.
```

You can now copy the entire block of text and paste it directly into your `README.md` file.

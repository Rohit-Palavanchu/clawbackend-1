const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authenticateToken = require('../middleware/authMiddleware');

// Middleware to check authentication
router.use(authenticateToken);

// Create a new todo
router.post('/todos', todoController.createTodo);

// Retrieve all todos for a user
router.get('/todos', todoController.getAllTodos);

// Retrieve a single todo by ID
router.get('/todos/:id', todoController.getTodoById);

// Update a todo by ID
router.put('/todos/:id', todoController.updateTodoById);

// Delete a todo by ID
router.delete('/todos/:id', todoController.deleteTodoById);

module.exports = router;

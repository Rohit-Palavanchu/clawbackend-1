const db = require('../config/db');

// Create a new todo
const createTodo = (req, res) => {
  const { title, description, userId } = req.body;
  const sql = 'INSERT INTO todos (title, description, userId) VALUES (?, ?, ?)';
  db.run(sql, [title, description, userId], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error creating todo', error: err.message });
    }
    res.status(201).json({ id: this.lastID, title, description, userId });
  });
};

// Retrieve all todos for a user
const getAllTodos = (req, res) => {
  const { userId } = req.query;
  const sql = 'SELECT * FROM todos WHERE userId = ?';
  db.all(sql, [userId], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving todos', error: err.message });
    }
    res.json(rows);
  });
};

// Retrieve a single todo by ID
const getTodoById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM todos WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving todo', error: err.message });
    }
    if (!row) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(row);
  });
};

// Update a todo by ID
const updateTodoById = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const sql = 'UPDATE todos SET title = ?, description = ? WHERE id = ?';
  db.run(sql, [title, description, id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error updating todo', error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ id, title, description });
  });
};

// Delete a todo by ID
const deleteTodoById = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM todos WHERE id = ?';
  db.run(sql, [id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error deleting todo', error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).send();
  });
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};

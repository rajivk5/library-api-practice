const express = require("express");

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/libraryController");

const router = express.Router();

// TODO: Add the five routes.
// Required:
// POST   /books
// GET    /books
// GET    /books/:id
// PUT    /books/:id
// DELETE /books/:id

module.exports = router;

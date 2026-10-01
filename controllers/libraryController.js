/*
  PRACTICE PROJECT

  Your job:
  1. Create a module-level `books` array using the starter data below.
  2. Implement all controller functions.
  3. Do NOT use fs, task.json, books.json, MongoDB, or any database.
  4. Keep all runtime data in memory.
  5. Use the tests as your contract.

  Required endpoints:
    GET    /books
    GET    /books/:id
    POST   /books
    PUT    /books/:id
    DELETE /books/:id

  Optional extension:
    GET /books?available=true
    GET /books?available=false
*/

const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    available: true,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    available: true,
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    available: false,
  },
  {
    id: 4,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    available: true,
  },
  {
    id: 5,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    available: false,
  },
];

// TODO: Implement these functions.

const createBook = (req, res) => {
  // TODO
};

const getBooks = (req, res) => {
  // TODO
};

const getBookById = (req, res) => {
  // TODO
};

const updateBook = (req, res) => {
  // TODO
};

const deleteBook = (req, res) => {
  // TODO
};

module.exports = {
  books,
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};

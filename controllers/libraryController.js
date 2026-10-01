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
  try {
    const { title, author, available } = req.body;

    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof available !== "boolean"
    ) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const ids = books.map((book) => book.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    const newBook = {
      id: newId,
      title,
      author,
      available,
    };

    books.push(newBook);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
};

const getBooks = (req, res) => {
  res.status(200).json(books);
};

const getBookById = (req, res) => {
  try {
    const id = Number(req.params.id);

    const book = books.find((book) => book.id === id);

    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json(book);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateBook = (req, res) => {
  const bookId = Number(req.params.id);
  const { title, author, available } = req.body;

  if (
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof available !== "boolean"
  ) {
    return res.status(400).json({ error: "invalid book data" });
  }

  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return res.status(404).json({ error: "book not found" });
  }

  book.title = title;
  book.author = author;
  book.available = available;
  res.status(200).json(book);
};

const deleteBook = (req, res) => {
  const bookId = Number(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "book not found" });
  }

  books.splice(bookIndex, 1);

  res.status(200).json({
    message:"Book deleted successfully"
  });
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};

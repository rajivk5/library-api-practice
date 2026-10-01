const tap = require("tap");
const supertest = require("supertest");
const app = require("../app");

const server = supertest(app);

tap.test("POST /books", async (t) => {
  const newBook = {
    title: "Design Patterns",
    author: "Erich Gamma",
    available: true,
  };

  const response = await server.post("/books").send(newBook);

  t.equal(response.status, 201);
  t.equal(response.body.title, newBook.title);
  t.equal(response.body.author, newBook.author);
  t.equal(response.body.available, true);
  t.type(response.body.id, "number");
});

tap.test("POST /books with invalid data", async (t) => {
  const newBook = {
    title: "Missing author",
    available: true,
  };

  const response = await server.post("/books").send(newBook);

  t.equal(response.status, 400);
});

tap.test("POST /books with invalid available type", async (t) => {
  const newBook = {
    title: "Invalid Book",
    author: "Test Author",
    available: "true",
  };

  const response = await server.post("/books").send(newBook);

  t.equal(response.status, 400);
});

tap.test("GET /books", async (t) => {
  const response = await server.get("/books");

  t.equal(response.status, 200);
  t.type(response.body, "array");
  t.ok(response.body.length > 0);

  t.hasOwnProp(response.body[0], "id");
  t.hasOwnProp(response.body[0], "title");
  t.hasOwnProp(response.body[0], "author");
  t.hasOwnProp(response.body[0], "available");

  t.type(response.body[0].id, "number");
  t.type(response.body[0].title, "string");
  t.type(response.body[0].author, "string");
  t.type(response.body[0].available, "boolean");
});

tap.test("GET /books/:id", async (t) => {
  const response = await server.get("/books/1");

  t.equal(response.status, 200);

  t.match(response.body, {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    available: true,
  });
});

tap.test("GET /books/:id with invalid id", async (t) => {
  const response = await server.get("/books/999");

  t.equal(response.status, 404);
});

tap.test("GET /books/:id with non-numeric id", async (t) => {
  const response = await server.get("/books/abc");

  t.equal(response.status, 404);
});

tap.test("PUT /books/:id", async (t) => {
  const updatedBook = {
    title: "The Pragmatic Programmer - Updated",
    author: "Andrew Hunt",
    available: false,
  };

  const response = await server.put("/books/1").send(updatedBook);

  t.equal(response.status, 200);
  t.equal(response.body.id, 1);
  t.equal(response.body.title, updatedBook.title);
  t.equal(response.body.author, updatedBook.author);
  t.equal(response.body.available, false);
});

tap.test("PUT /books/:id with invalid id", async (t) => {
  const updatedBook = {
    title: "Unknown",
    author: "Unknown",
    available: true,
  };

  const response = await server.put("/books/999").send(updatedBook);

  t.equal(response.status, 404);
});

tap.test("PUT /books/:id with invalid data", async (t) => {
  const updatedBook = {
    title: "Invalid",
    author: "Author",
    available: "false",
  };

  const response = await server.put("/books/1").send(updatedBook);

  t.equal(response.status, 400);
});

tap.test("DELETE /books/:id", async (t) => {
  const response = await server.delete("/books/1");

  t.equal(response.status, 200);
  t.match(response.body, {
    message: "Book deleted successfully",
  });
});

tap.test("DELETE /books/:id with invalid id", async (t) => {
  const response = await server.delete("/books/999");

  t.equal(response.status, 404);
});

tap.test("GET /books after delete", async (t) => {
  const response = await server.get("/books/1");

  t.equal(response.status, 404);
});

tap.teardown(() => {
  process.exit(0);
});

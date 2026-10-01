# Library API Practice

A practice project for learning Express.js CRUD APIs with **in-memory data storage**.

## Goal

Implement the missing controller and router code yourself.

Do not use:

- `fs`
- JSON files for runtime storage
- MongoDB
- any external database

The `books` array in `controllers/libraryController.js` is the runtime data store.

## Install

```bash
npm install
```

## Run

```bash
npm start
```

Server:

```text
http://localhost:3000
```

## Test

```bash
npm run test
```

## Required API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get one book |
| POST | `/books` | Create a book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Optional Extension

Implement:

```text
GET /books?available=true
GET /books?available=false
```

## Practice Rules

Try to solve the project without looking for a complete solution.

Focus on:

- Express routing
- Controllers
- `req.body`
- `req.params`
- `req.query`
- `find`
- `findIndex`
- `filter`
- `push`
- `splice`
- HTTP status codes
- validation
- in-memory state

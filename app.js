const express = require("express");
const libraryRouter = require("./routers/libraryRoutes");
const port = 3000;

const app = express();

app.use(express.json());
app.use(libraryRouter);

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Library API is running on port ${port}, http://localhost:${port}`,
    );
  });
}

module.exports = app;

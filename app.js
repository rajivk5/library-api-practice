const express = require("express");
const libraryRouter = require("./routers/libraryRoutes");

const app = express();

app.use(express.json());
app.use(libraryRouter);

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Library API is running on port 3000");
  });
}

module.exports = app;

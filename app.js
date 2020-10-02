const express = require("express");
const app = express();
const port = 5000;
const { getArticles, getOneArticle, addArticle } = require("./controllers");
const { notFound } = require("./middleware");
const v1 = require("./routes");

// midlleware
app.use(express.json());

// route handller
// all
app.use("/v1", v1);

// 404
app.use(notFound);

app.listen(port, () => {
  console.log(`Run on ${port}`);
});

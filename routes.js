const express = require("express");
const router = express.Router();
const {
  getArticles,
  getOneArticle,
  addArticle,
  editArticle,
} = require("./controllers");
const { userOne } = require("./middleware");

router.get("/articles", getArticles);
// one
router.get("/article/:id", getOneArticle);
// add one
router.post("/article", userOne, addArticle);
// edit
router.put("/article/:id", userOne, editArticle);

module.exports = router;

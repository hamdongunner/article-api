const express = require("express");
const router = express.Router();
const {
  getArticles,
  getOneArticle,
  addArticle,
  editArticle,
  login,
  register
} = require("./controllers");
const { userOne, auth } = require("./middleware");

router.post("/login", login);

router.post("/register", register);

router.get("/articles", auth, getArticles);
// one
router.get("/article/:id", getOneArticle);
// add one
router.post("/article", auth, addArticle);
// edit
router.put("/article/:id", auth, editArticle);

module.exports = router;

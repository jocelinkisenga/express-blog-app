module.exports = app => {
  const posts = require("../app/controllers/postController.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/create", posts.create);
  // Retrieve all Tutorials
  router.get("/", posts.findAll);
  router.get("/:id",posts.findOne);
  app.use('/api/post', router);
};
const Post = require("../models/PostModel.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Post
  const post = new Post({
  	title: req.body.title,
    description: req.body.description
  });
  Post.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
    else res.send(data);
  });
};

//find all posts
exports.findAll = (req, res) => {
  Post.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
      else res.send(data);
  });
};

//find one post
exports.findOne = (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.id}.`
        });
      } else {
      	res.status(500).send({
          message: "Error retrieving post with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};


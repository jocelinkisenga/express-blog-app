const db = require('./Db.js');

const Post = function(post){
	this.title = post.title;
	this.description = post.description;
};

Post.create = (newPost, result)=>{
	db.query("INSERT INTO post ?",newPost, (err, res)=>{
		if(err){
			console.log(`${err}`);
			result(err, null);
			return;
		}
		console.log("created post: ", { id: res.insertId, ...newPost });
    	result(null, { id: res.insertId, ...newPost });
	});
};
//find one post
Post.findById = (id, result) => {
  db.query(`SELECT * FROM post WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found post: ", res[0]);
      result(null, res[0]);
       return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Post.getAll = (result) => {
  db.query(`SELECT * FROM post`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found post: ", res[0]);
      result(null, res[0]);
       return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Post;

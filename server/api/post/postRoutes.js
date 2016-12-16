var router = require('express').Router();
var Post = require('./postModel.js');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
	    Post.find({}, function(err, posts) {
	    	if(!posts){
	    		res.send('no post');
	    	}
	    var postMap = {};
	    posts.forEach(function(Post) {
	      postMap[Post._id] = Post;
	    });
	    res.send(postMap);  
	  });
	    //res.send({ok: true});
  });

  router.route('/')
  .post(function(req, res){
  	if(!req.params.address || !req.params.Postname){
  		//request did not have a Post field
  		res.status(500).send({error: 'Enter valid Post!'})
  	}else{
	    new Post({title: req.params('title'), text: req.params('text'), 
	    	author: req.params('author'), categories: req.params('category')}).save();
	}
  });

  router.route('/:Post_Id')
  .get(function(req, res){
 		Post.findOne({ '_id': Post_Id  }, function (err, post) {
	    	res.send(post);
		});
	
  });

  router.route('/:Post_Id')
  .put(function(req, res){
  	if(!req.param('Post')){
  		//request did not have a Post field
  		res.status(500).send({error: 'update a new Post!'})
  	}else{
	    Post.findAndUpdate({ '_id': Post_Id  }, function (err, post) {
	    	res.send(post);
		});
	}
  });

  router.route('/:Post_Id')
  .delete(function(req, res){
  	if(!req.param('Post')){
  		//request did not have a Post field
  		res.status(500).send({error: 'deleting a specific  Post!'})
  	}else{
	    Post.find().remove({_id: Post_Id}).exec;
	}
  });

module.exports = router;

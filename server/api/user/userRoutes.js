var router = require('express').Router();
var User = require('./userModel.js');

// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
	console.log('')
  .get(function(req, res){
	    User.find({}, function(err, users) {
	    	if(!users){
	    		res.send('no users');
	    	}
	    var userMap = {};
	    users.forEach(function(user) {
	      userMap[user._id] = user;
	    });
	    res.send(userMap);  
	  });
	    //res.send({ok: true});
  });

  router.route('/')
  .post(function(req, res){

	    new User({username: req.param.username, address: req.params.address}).save();
  });

  router.route('/:user_Id')
  .get(function(req, res){
 		User.findOne({ '_id': user_Id  }, function (err, user) {
	    	res.send(user);
		});
	
  });

  router.route('/:user_Id')
  .put(function(req, res){
  	if(!req.param('user')){
  		//request did not have a user field
  		res.status(500).send({error: 'update a new user!'})
  	}else{
	    User.findAndUpdate({ '_id': user_Id  }, function (err, user) {
	    	
		});
	}
  });

  router.route('/:user_Id')
  .delete(function(req, res){
  	if(!req.param('user')){
  		//request did not have a user field
  		res.status(500).send({error: 'deleting a specific  user!'})
  	}else{
	    User.find().remove({_id: user_Id}).exec;
	}
  });

module.exports = router;


var router = require('express').Router();
var Category = require('./categoryModel.js');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
	    Categories.find({}, function(err, categories) {
	    	if(!categories){
	    		res.send('no categories');
	    	}
	    var CategoriesMap = {};
	    categories.forEach(function(Categories) {
	      CategoriesMap[Categories._id] = Categories;
	    });
	    res.send(CategoriesMap);  
	  });
	    //res.send({ok: true});
  });

  router.route('/')
  .post(function(req, res){
  	if(!req.params.address || !req.params.Categoriesname){
  		//request did not have a Categories field
  		res.status(500).send({error: 'Enter valid Categories!'})
  	}else{
	    new Categories({Categoriesname: req.params('name'), address: req.params('address')}).save();
	}
  });

  router.route('/:categories_id')
  .get(function(req, res){
 		Categories.findOne({ '_id': categories_id  }, function (err, categories) {
	    	res.send(categories);
		});
	
  });

  router.route('/:categories_id')
  .put(function(req, res){
  	if(!req.param('Categories')){
  		//request did not have a Categories field
  		res.status(500).send({error: 'update a new Categories!'})
  	}else{
	    Categories.findAndUpdate({ '_id': categories_id  }, function (err, categories) {
	    	res.send(categories);
		});
	}
  });

  router.route('/:categories_id')
  .delete(function(req, res){
  	if(!req.param('Categories')){
  		//request did not have a Categories field
  		res.status(500).send({error: 'deleting a specific category!'})
  	}else{
	    Categories.find().remove({_id: categories_id}).exec;
	}
  });

module.exports = router;


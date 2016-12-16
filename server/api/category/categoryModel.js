var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  // reference to the user who created this post
  posts: 
        {type: Schema.Types.ObjectId,
         ref: 'post',
         required:true
        }

});

module.exports = mongoose.model('category', PostSchema);

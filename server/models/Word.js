const  {
  Schema,
  model,
  ObjectId
} = require('mongoose');

const Word = new Schema({
  description:{type: String, required: true},
  access:{type: Boolean, required: true},
  user:[{type: ObjectId, ref: 'User'}],
});

module.exports = model('Word', Word);
const  {
  Schema,
  model,
  ObjectId
} = require('mongoose');

const Word = new Schema({
  wordEn:{type: String, required: true},
  description:{type: String, required: true},
  wordRus:{type: String, required: true},
  access:{type: Boolean, required: true},
  user:[{type: ObjectId, ref: 'User'}],
});

module.exports = model('Word', Word);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  address: String,
  created: { type: Date, default: new Date().getTime() },
  nonce: {
    type: Number,
    default: 0
  },
  hero: Object,
  meta: Object
});

var remSchema = new Schema({
  owner: String,
  created: { type: Date, default: new Date().getTime() },
  date: { type: String, default: new Date().getTime() },
  stages: Object,
  meta: Object
});

var userModel = mongoose.model('User', userSchema); 
var remModel = mongoose.model('Rem', remSchema); 

module.exports = {
  schema: userSchema,
  model: userModel,
  remSchema: remSchema,
  remModel: remModel
}
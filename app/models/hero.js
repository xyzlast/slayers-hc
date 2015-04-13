var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HeroSchema = new Schema({
  name: String,
  engName: String,
  hanName: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HeroComment' }]
});
mongoose.model('Hero', HeroSchema);

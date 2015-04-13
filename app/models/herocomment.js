var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HeroCommentSchema = new Schema({
  hero: String,
  username: String,
  comment: String,
  time: Date
});
mongoose.model('HeroComment', HeroCommentSchema);

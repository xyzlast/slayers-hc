var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArenaMatchSchema = new Schema({
  winner: String,
  loser: String,
  comment: String,
  username: String,
  deleted: Boolean,
  score: Number,
  date: Date
});
mongoose.model('ArenaMatch', ArenaMatchSchema);

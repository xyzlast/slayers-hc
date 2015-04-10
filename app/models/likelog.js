var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LikeLogSchema = new Schema({
  matchId: String,
  username: String,
  date: Date
});
mongoose.model('LikeLog', LikeLogSchema);

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  username: String,
  accepted: Boolean
});
mongoose.model('User', UserSchema);

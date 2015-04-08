var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AttackerSchema = new Schema({
  name: String,
  comment: String,
  insertUser: String,
  updateUser: String,
  deleted: Boolean
});
AttackerSchema.virtual('date').get(function () {
  return this._id.getTimestamp();
});
mongoose.model('Attacker', AttackerSchema);

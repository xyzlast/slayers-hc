var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DependerSchema = new Schema({
  name: String,
  comment: String,
  insertUser: String,
  updateUser: String,
  attackers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attacker' }]
});
DependerSchema.virtual('date').get(function () {
  return this._id.getTimestamp();
});
mongoose.model('Depender', DependerSchema);
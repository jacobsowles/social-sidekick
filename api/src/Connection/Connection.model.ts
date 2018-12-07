import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  user: { type: Schema.Types.String }
});

module.exports = mongoose.model('Connection', ConnectionSchema);

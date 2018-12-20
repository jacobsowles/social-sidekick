import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  accessToken: { type: Schema.Types.String, required: true },
  service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  user: { type: Schema.Types.String, required: true }
});

module.exports = mongoose.model('Connection', ConnectionSchema);

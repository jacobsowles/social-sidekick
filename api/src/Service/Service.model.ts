import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  oauthName: String
});

module.exports = mongoose.model('Service', ServiceSchema);

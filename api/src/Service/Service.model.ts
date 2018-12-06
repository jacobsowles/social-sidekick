import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Service', ServiceSchema);

const mongoose = require('mongoose');

// Define a MongoDB schema for travel data
const travelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    travelers: { type: Number, required: true },
    budget: { type: Number, required: true }
});

// Create a MongoDB model based on the schema
const TravelData = mongoose.model('TravelData', travelSchema);

module.exports = {TravelData};

//models/Animal.js: 
// Contains the Mongoose schema for animals (e.g., name, species, age).


const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("AnimalSchema", AnimalSchema);

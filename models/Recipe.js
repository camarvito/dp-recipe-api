const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  cooking_instructions: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);

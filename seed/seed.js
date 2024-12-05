const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const Recipe = require('../models/Recipe');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log(`Seed script connected to MongoDB!`);
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const dataPath = path.join(__dirname, 'recipes.json');
const recipes = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const seedDB = async () => {
  try {
    await Recipe.deleteMany({});
    console.log('Receipts collection cleared!');
    await Recipe.insertMany(recipes);
    console.log('Recipes successfully inserted!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
};

seedDB();

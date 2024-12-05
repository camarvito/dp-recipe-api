const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// Use case 1. Fetch all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Use case 2. Search recipes by ingredient
router.get("/search", async (req, res) => {
  const { ingredient } = req.query;
  if (!ingredient) {
    return res
      .status(400)
      .json({ error: "Missing query param 'ingredient'" });
  }
  const ingredientArr = ingredient.split(",").map((ing) => ing.toLowerCase());
  try {
    const recipes = await Recipe.find({
      ingredients: { $all: ingredientArr },
    });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Use case 3. Fetch a recipe by ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe === null) return res.status(404).json({ message: "Recipe not found!" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

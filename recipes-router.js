const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

// GET /api/recipes/
router.get("/", async (req, res, next) => {
	try {
		const allRecipes = await Recipes.getRecipes()
		res.json(allRecipes)
	} catch (err) {
		console.log(err)
		next(err)
	}
})

// GET /api/recipes/:id/shoppingList
router.get("/:id/shoppingList", async (req, res, next) => {
	try {
		const ingredients = await Recipes.getShoppingList(req.params.id)
		res.status(200).json(ingredients)
	} catch (err) {
		console.log(err)
		next(err)
	}
})

// GET /api/recipes/:id/instructions
router.get("/:id/instructions", async (req, res, next) => {
	try {
		const instructions = await Recipes.getInstructions(req.params.id)
		res.status(200).json(instructions)
	} catch (err) {
		console.log(err)
		next(err)
	}
})

module.exports = router;
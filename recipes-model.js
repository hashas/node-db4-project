// data access file that exports an object with the following functions

const db = require("./data/config")

// return a list of all recipes in the database
function getRecipes() {
	return db("recipes")
}

// return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
	return db("ingredients as i")
		// join above table with "recipes_ingredients" table so that "i.id" 
		// is linked/joined to "ri.ingredient_id"
		.join("recipes_ingredients as ri", "i.id", "ri.ingredient_id")
		// where "re.recipe_id" = recipe_id, this ensures only those ROWS
		// relating to specified recipe_id is selected
		.where("ri.recipe_id", recipe_id)
		// select the desired COLUMNS
		.select("i.ingredient_name", "ri.quantity")
}

// return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
	return db("steps")
		.where("recipe_id", recipe_id)
		// in ascending order of "sequence_id"
		.orderBy("sequence_id")
}

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
}
exports.seed = async function(knex) {
	await knex("recipes_ingredients").insert([
			{ recipe_id: 1, ingredient_id: 1, quantity: 200 },
			{ recipe_id: 1, ingredient_id: 2, quantity: 50 },
			{ recipe_id: 1, ingredient_id: 3, quantity: 240 },
			{ recipe_id: 1, ingredient_id: 4, quantity: 10 },
			{ recipe_id: 2, ingredient_id: 5, quantity: 300 },
			{ recipe_id: 2, ingredient_id: 6, quantity: 5 },
			{ recipe_id: 2, ingredient_id: 7, quantity: 15},
			{ recipe_id: 2, ingredient_id: 8, quantity: 20},
			{ recipe_id: 3, ingredient_id: 9, quantity: 200},
			{ recipe_id: 3, ingredient_id: 10, quantity: 5},
			{ recipe_id: 3, ingredient_id: 3, quantity: 200},
			{ recipe_id: 3, ingredient_id: 1, quantity: 100},
		])
}
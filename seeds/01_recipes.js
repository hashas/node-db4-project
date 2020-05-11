exports.seed = async function(knex) {
	await knex("recipes").insert([
		{ recipe_name: "Morning smoothie" },
		{ recipe_name: "Grilled salmon" },
		{ recipe_name: "Simple oats" },
	])
}
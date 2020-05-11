exports.seed = async function(knex) {
	await knex("ingredients").insert([
			{ ingredient_name: "banana" },
			{ ingredient_name: "blueberry" },
			{ ingredient_name: "almond milk" },
			{ ingredient_name: "flaxseed" },
			{ ingredient_name: "salmon fillet" },
			{ ingredient_name: "salt" },
			{ ingredient_name: "sesame seeds" },
			{ ingredient_name: "lemon juice" },
			{ ingredient_name: "oats" },
			{ ingredient_name: "maple syrup" },
		])
}
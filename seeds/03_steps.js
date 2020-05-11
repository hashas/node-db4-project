exports.seed = async function(knex) {
	await knex("steps").insert([
			{ 
				recipe_id: 1, 
				step: "cut the fruit into small(er) pieces and add to cup",
				sequence_id: 1 
			},
			{ 
				recipe_id: 1, 
				step: "add the flaxseed",
				sequence_id: 2
			},
			{ 
				recipe_id: 1, 
				step: "add milk to halfway",
				sequence_id: 3
			},
			{ 
				recipe_id: 2, 
				step: "place salmon on greased aluminium foil",
				sequence_id: 1
			},
			{ 
				recipe_id: 2, 
				step: "add a few squirts of lemon juice salmon from the bottle",
				sequence_id: 2
			},
			{ 
				recipe_id: 2, 
				step: "sprinkle salt and sesame seeds on salmon",
				sequence_id: 3
			},
			{
				recipe_id: 3,
				step: "add oats to a bowl",
				sequence_id: 1
			},
			{
				recipe_id: 3,
				step: "add slices of banana",
				sequence_id: 2
			},
			{
				recipe_id: 3,
				step: "add milk",
				sequence_id: 3
			},
			{
				recipe_id: 3,
				step: "drizzle some maple syrup",
				sequence_id: 4
			}

	])
}
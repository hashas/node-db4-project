
exports.up = async function(knex) {
	await knex.schema.createTable("recipes", (table) => {
		table.increments("id")
		table.text("recipe_name").notNull()
	})

	await knex.schema.createTable("ingredients", (table) => {
		table.increments("id")
		table.text("ingredient_name").notNull().unique()
	})

	await knex.schema.createTable("steps", (table) => {
		table.increments("id")
		table.integer("recipe_id")
			.unsigned()
			.references("id")
			.inTable("recipes")
			.onUpdate("CASCADE")
			.onDelete("CASCADE")
		table.text("step").notNull()
		table.real("sequence_id").notNull()
	})

	await knex.schema.createTable("recipes_ingredients", (table) => {
		table.integer("recipe_id")
			.references("id")
			.inTable("recipes")
			.onUpdate("CASCADE")
			.onDelete("CASCADE")
		table.integer("ingredient_id")
			.references("id")
			.inTable("ingredients")
			.onUpdate("CASCADE")
			.onDelete("CASCADE")
		table.real("quantity").notNull() // undefined?
		table.primary(["recipe_id", "ingredient_id"])
	})
  
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("recipes_ingredients")
	await knex.schema.dropTableIfExists("steps")
	await knex.schema.dropTableIfExists("ingredients")
	await knex.schema.dropTableIfExists("recipes")
};

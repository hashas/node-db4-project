// cleans out our seeds before reseeding
// must be in reverse order that tables are created so 
// we can be sure we'not not clearing out a table that
// has other foreign keys referencing it
exports.seed = async function(knex) {
	await knex("recipes_ingredients").truncate()
	await knex("steps").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}
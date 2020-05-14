
exports.up = function(knex) {
  return knex.schema.createTable("recipes", recipes => {
      recipes.increments();

      recipes.string("recipe_name", 255).notNullable();
      recipes.string("recipe_instructions", 1000);
  })
  .createTable("ingredients", ingredients => {
      ingredients.increments();

      ingredients.string("ingredient_name", 255).notNullable();
      ingredients.real("ingredient_amount", 255).notNullable();
  })
  .createTable("recipe_ingredients", recipe_ingredients => {
      recipe_ingredients.increments();

      recipe_ingredients.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")

      recipe_ingredients.integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};

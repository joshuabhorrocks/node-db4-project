const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
    return db('recipes as r')
      .join('recipe_ingredients as ri', 'ri.recipe_id', '=', 'r.id')
      .join("ingredients as i", "i.id", "=", "ri.id")
      .select('r.recipe_name', 'i.ingredient_name', 'i.ingredient_amount')
      .where('r.id', '=', id)
      .orderBy('i.ingredient_name')
}

function getInstructions(id) {
  return db("recipes").select("recipe_instructions").where("id", id);
}
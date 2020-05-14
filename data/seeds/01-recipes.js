
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "PB&J Sandwich", recipe_instructions: 'First, get two slices of bread. Second, spread peanutbutter on one slice. Third, spread a jam of your choice on the other slice. Finally, eat your PB&J sandwich.'},
        {recipe_name: "Hot Pocket", recipe_instructions: 'First, open Hot Pocket container. Second, insert Hot Pocket into sleeve. Third, microwave for 2 minutes (times may vary). Finally, allow sufficient time to cool and then eat it.'},
        {recipe_name: "Salad Sandwich", recipe_instructions: 'First, get two slices of bread. Second, spread mayonaise on one slice. Third, add lettuce and mustard to other slice. Finally, eat your salad sandwich.'}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: "Bread", ingredient_amount: 'Two slices'},
        {ingredient_name: "Peanut Butter", ingredient_amount: 'One knife full'},
        {ingredient_name: "Jam", ingredient_amount: 'One spoon full'},
        {ingredient_name: "Hot Pocket", ingredient_amount: 'One Hot Pocket'},
        {ingredient_name: "Mayonaise", ingredient_amount: 'One knife full'},
        {ingredient_name: "Lettuce", ingredient_amount: '2 Leafs'},
        {ingredient_name: "Mustard", ingredient_amount: 'One or two squirts'},
      ]);
    });
};

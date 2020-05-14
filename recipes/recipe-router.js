const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(ingredients => {
    if (ingredients) {
      res.json(ingredients);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get recipe' });
  });
});

router.get('/:id/instructions', (req, res) => {
  const {id} = req.params;
  
  Recipes.getInstructions(id)
  .then(instructions => {
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find instructions for given recipe' })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get instructions' });
  });
});

module.exports = router;
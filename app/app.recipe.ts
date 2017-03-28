class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) {}
}

  var recipes: Recipe[] = [];
  recipes.push(new Recipe
    ('Vegan Fish',
  'Fish' ,'Thai Sweet Chili Sauce'));
  console.log(recipes);

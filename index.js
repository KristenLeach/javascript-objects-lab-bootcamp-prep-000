var recipes = new Object({'eggs': 1});

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({'butter': 2}, recipes);
  return newRecipe;
}


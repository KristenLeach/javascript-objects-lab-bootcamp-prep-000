var recipes = new Object({'prop': 1});

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({'prop2': 2}, recipes);
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value;
  return recipes;
}

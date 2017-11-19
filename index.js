var recipes = new Object({'prop': 1});

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({key: value}, recipes);
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return recipes;
}

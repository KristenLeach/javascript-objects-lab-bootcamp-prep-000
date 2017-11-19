var recipes = new Object({'prop': 1});

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({'prop2': '2'}, recipes);
  return recipes;
}
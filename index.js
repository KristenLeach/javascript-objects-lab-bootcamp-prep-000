var recipes = new Object({'prop': 1});

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({key: value}, object);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

var recipes = new Object({'prop': 1});

function updateObjectWithKeyAndValue(object, key, value){
  var emptyObj = {}
  emptyObj[key]=value
  var newObj = Object.assign({}, object, emptyObj);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

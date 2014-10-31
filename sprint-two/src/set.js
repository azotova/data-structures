var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this._storage){
    this._storage = {};
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

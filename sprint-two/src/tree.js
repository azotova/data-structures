var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  // var aTree = makeTree(value);
  if (this.children===undefined) {
    this.children=[];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

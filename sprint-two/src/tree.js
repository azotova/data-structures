var makeTree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var searchTree = function(tree) {
    var result=false;
    if (tree.value===target) {
      return true;
    } else if (tree.children) {

      for (var i=0;i<tree.children.length;i++) {
        console.log(tree.children[i].value);
        result = result || searchTree(tree.children[i]);
      }
    } else {
      result= false;
    }
    return result;
  };
  return searchTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

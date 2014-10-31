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
  var result=false;
  var count=0; //Keeping track of the number of runs
  var searchTree = function(tree) {
    count++;
    // console.log("----------------------------");
    // console.log("count: " + count);
    if(result === true ){ return true; };
    if (tree.value===target) {
      result =  true;
    } else if (tree.children) {
      for (var i=0;i<tree.children.length;i++) {
        searchTree(tree.children[i]);
      }
    }
    return result;
  };
  return searchTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

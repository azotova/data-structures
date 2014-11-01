/*var makeBinarySearchTree = function(value){
  this.nodes = {
    lefty: undefined,
    righty: undefined
  };
  this.value = value;
  // this.left = this.nodes.lefty;
  // this.right = this.nodes.righty;
  // console.log("thisleft:",this.left);
};

makeBinarySearchTree.prototype.left = function () {
  return this.nodes.lefty;
};

makeBinarySearchTree.prototype.right = function () {
  return this.nodes.righty;
};

makeBinarySearchTree.prototype.insert = function(value) {
  console.log("value:", this.value, value);
  console.log("this", this);
  var newTree = new makeBinarySearchTree(value);
  if(this.value > value){
    console.log("valueThis:",this);
    if(this.nodes.lefty === undefined){
      this.nodes.lefty = newTree;
      console.log("newlefty: ", newTree);
    } else {
      this.nodes.lefty.insert(value);
    }
  }
  if(this.value < value){
        console.log("value<This:",this);

    if(this.nodes.righty === undefined){
      this.nodes.righty = newTree;
    } else {
      this.nodes.righty.insert(value);
    }
  }
};
*/
var makeBinarySearchTree = function(value){
  this.left = undefined;
  this.right = undefined;
  this.value = value;
  // this.left = this.nodes.lefty;
  // this.right = this.nodes.righty;
  // console.log("thisleft:",this.left);
};

/*makeBinarySearchTree.prototype.left = function () {
  return this.nodes.lefty;
};

makeBinarySearchTree.prototype.right = function () {
  return this.nodes.righty;
};*/

makeBinarySearchTree.prototype.insert = function(value) {
  console.log("value:", this.value, value);
  console.log("this", this);
  var newTree = new makeBinarySearchTree(value);
  if(this.value > value){
    console.log("valueThis:",this);
    if(this.left === undefined){
      this.left = newTree;
      console.log("newlefty: ", newTree);
    } else {
      this.left.insert(value);
    }
  }
  if(this.value < value){
        console.log("value<This:",this);

    if(this.right === undefined){
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};


makeBinarySearchTree.prototype.contains = function() {
  return 1;
};

makeBinarySearchTree.prototype.depthFirstLog = function() {
  return 1;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

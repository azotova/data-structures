var makeBinarySearchTree = function(value){
  this.left = undefined;
  this.right = undefined;
  this.value = value;
  this.allValues = [value];
};

makeBinarySearchTree.prototype.insert = function(value) {
  this.allValues.push(value);
  if(this.value > value){
    this.left === undefined ? this.left = new makeBinarySearchTree(value) : this.left.insert(value);
  }
  if(this.value < value){
    this.right === undefined ? this.right = new makeBinarySearchTree(value) : this.right.insert(value);
   }
};


makeBinarySearchTree.prototype.contains = function(value) {
  if (this.value === value){
    return true;
  } else if(this.left && (value < this.value)){
    return this.left.contains(value);
  } else if(this.right && (value > this.value)){
    return this.right.contains(value);
  }
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback) {
  _.each(this.allValues, function(el){
    callback(el);
  })
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

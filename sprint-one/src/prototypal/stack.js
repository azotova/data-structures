var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.count]=value;
    this.count++;
  },
  pop: function () {
    if (this.count>0) {
      var result=this.storage[this.count-1];
      this.count--;
      return result;
    }
  },
  size: function () {
    return this.count;
  }
};





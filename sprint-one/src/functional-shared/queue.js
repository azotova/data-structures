var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueue = {};
  someQueue.count=0;
  someQueue.storage={};
  _.extend(someQueue, queueMethods);
  return someQueue;
};

var queueMethods = {
  dequeue: function(){
    var result = this.storage[0];
    if(this.count > 0){
      for(var key in this.storage){
        this.storage[key-1] = this.storage[key];
      }
      this.count--;
    }
    return result;
  },
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  size: function(){
    return this.count;
  }
};




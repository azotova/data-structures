var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue=Object.create(queueMethods);
  newQueue.count=0;
  newQueue.storage={};
  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.count]=value;
    this.count++;
  },
  dequeue: function() {
    var result=this.storage[0];
    if (this.count>0) {
      for (var key in this.storage) {
        this.storage[key-1]=this.storage[key];
      }
      this.count--;
    }
    return result;
  },
  size: function () {
    return this.count;
  }
};



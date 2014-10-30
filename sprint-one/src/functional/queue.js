var makeQueue = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count]=value;
    count++;
  };

  someInstance.dequeue = function(){
    var result=storage[0];
    if (count>0) {
      for (var key in storage) {
        storage[key-1]=storage[key];
      }
      count--;
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};

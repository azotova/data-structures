var makeStack = function(){
  var someInstance = {},
      count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    if(count > 0){
    var result = storage[count-1];
    delete storage[count-1];
      count--;
    return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};

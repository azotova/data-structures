var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined) {
    this._storage.set(i, [[k,v]]);
  } else {
    var temp = this._storage.get(i);
    temp.push([k,v]);
    this._storage.set(i, temp);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempArr=this._storage.get(i);
  console.log(tempArr);
  if(Array.isArray(tempArr)){
    for(var i = 0; i < tempArr.length; i++){
      console.log("return " + tempArr[i]);
      if(!tempArr[i]) {
        return null;
      } else if (tempArr[i][0] === k){
        return tempArr[i][1];
      }
    }
  //return null;
  }
};

HashTable.prototype.remove = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var tempArr = this._storage.get(i);
    console.log(tempArr);
    for(var i = 0; i < tempArr.length; i++){
      console.log(tempArr);
      if(tempArr[i][0] === k){
        delete tempArr[i];
      }
    }
    this._storage.set(i, tempArr);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

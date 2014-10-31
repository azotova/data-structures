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
  if(Array.isArray(tempArr)){
    for(var i = 0; i < tempArr.length; i++){
      if(tempArr[i][0] === k){
        return tempArr[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

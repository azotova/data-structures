var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var nextNode = makeNode(value);
    if (list.tail) {
      list.tail.next=nextNode;
    }

    list.tail = nextNode;

    if(!list.head){
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head=list.head.next;
    return result;
  };

  list.contains = function(target){

      return (function nodeSearch(node){
        if(node.value === target){
          return true;
        } else if(node.next) {
          return nodeSearch(node.next);
        }
        return false;

     }(list.head));

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

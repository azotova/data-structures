var Graph = function(){
  this.nodes={};
  this.edges={};
};

Graph.prototype.addNode = function(newNode, toNode){
  if (toNode) {
    this.addEdge(newNode,toNode);
  } else if (Object.keys(this.nodes).length===1) {
    this.addEdge(Object.keys(this.nodes)[0],newNode);
    var y = this.edges[Object.keys(this.nodes)[0]][newNode];
  }
  this.nodes[newNode]=newNode;
};

Graph.prototype.contains = function(node){
  console.log(this.nodes);
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.edges[fromNode]!==undefined) {
    return this.edges[fromNode].hasOwnProperty(toNode);
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.edges[fromNode]) {
    this.edges[fromNode]={};
  }
  this.edges[fromNode][toNode]=toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edges[fromNode][toNode];
  var checkNode = function (node) {
    var result=false;

    for (var key in this.nodes) {
      result=result || this.getEdge(node,this.nodes[key])||this.getEdge(this.nodes[key],node);

    }
    return result;
  }
  if (checkNode.call(this,fromNode)===false) {
    this.removeNode(fromNode);
  }
  if (checkNode.call(this,toNode)===false) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

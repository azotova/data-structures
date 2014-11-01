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
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.edges[fromNode].hasOwnProperty(toNode);
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
     // result=result || this.getEdge(node,this.nodes[key])||this.getEdge(this.nodes[key],node);
    result = result || this.edges[node][key]|| this.edges[key][node];
    }
    return result;
  }
  if (checkNode(fromNode)===false) {
    this.removeNode(fromNode);
  }
  if (checkNode(toNode)===false) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    
    depthFirstSearch(array) {
        array.push(this.name);
        for (const element of this.children) {
            element.depthFirstSearch(array);
        }
        return array;
        
    }
  }
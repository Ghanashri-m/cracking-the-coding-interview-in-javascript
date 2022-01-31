const Stack = function () {
	this.storage = []; // We can pass something in the parameter and initialize the variable if required.
}

Stack.prototype.push = function(item) {
	this.storage.push(item);
}

Stack.prototype.pop = function() {
	if (this.storage.length === 0)
        	return "Underflow";
	return this.storage.pop();
}

Stack.prototype.peek = function() {
	return this.storage.peek[this.storage.peek.length - 1];
}

Stack.prototype.isEmpty = function() {
	 return this.storage.length === 0;
}

Stack.prototype.printStack = function() {
	var str = "";
    for (var i = 0; i < this.storage.length; i++)
        str += this.storage[i] + " ";
    return str.trim();
}

// Alternative

class CustomStack {
  constructor() {
  	this.storage = [];
  }
  push(item) {
  	this.storage.push(item);
  }
  pop() {
	if (this.storage.length === 0)
        	return "Underflow";
  	return this.storage.pop()
  }
  peek() {
	return this.storage.peek[this.storage.peek.length - 1]
  }
  isEmpty() {
	  return this.storage.length === 0;
  }
  printStack() {
  	var str = "";
    for (var i = 0; i < this.storage.length; i++)
        str += this.storage[i] + " ";
    return str.trim();
  }
}

/** 
 * Your Stack object will be instantiated and called as such:
 * var obj = new Stack()
 * obj.push(x)
 * if (peek()) {
 		 var param_2 = obj.pop()
 	 }
 */


//  obj.push(1);
// obj.push(2);
// obj.push(3);
// obj.push(4);
// obj.push(5);
// console.log(obj.printStack());

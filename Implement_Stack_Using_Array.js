const Stack = function () {
	this.storage = []; // We can pass something in the parameter and initialize the variable if required.
}

Stack.prototype.push = function(item) {
	this.storage.push(item);
}

Stack.prototype.pop = function() {
	return this.storage.pop();
}

Stack.prototype.peek = function() {
	return this.storage.peek[this.storage.peek.length - 1];
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
  	return this.storage.pop()
  }
  peek() {
		return this.storage.peek[this.storage.peek.length - 1]
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

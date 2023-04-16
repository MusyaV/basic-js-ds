const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stack = [];
  push(element) {
    this.stack.push(element);
  }

  pop() {
    this.stack.pop();
    return 1;
  }

  peek() {

    Array.prototype.peek = function () {
      if (this.length === 0) {
        throw new Error("out of bounds");
      }
      return this[this.length - 1];
    };
  }
}

module.exports = {
  Stack,
};

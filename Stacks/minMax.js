// Feel free to add new properties and methods to the class.
class MinMaxStack {
    constructor() {
      this.MinMaxStack = [];
      this.stack = [];
    }
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    pop() {
      this.MinMaxStack.pop();
      return this.stack.pop();
    }
  
    push(number) {
      const newMinMax = { min: number, max: number };
      if (this.MinMaxStack.length) {
        const lastMinMax = this.MinMaxStack[this.MinMaxStack.length - 1];
        newMinMax.min = Math.min(lastMinMax.min, number);
        newMinMax.max = Math.max(lastMinMax.max, number);
      }
      this.MinMaxStack.push(newMinMax);
      this.stack.push(number);
    }
  
    getMin() {
      return this.MinMaxStack[this.MinMaxStack.length - 1].min;
    }
  
    getMax() {
      return this.MinMaxStack[this.MinMaxStack.length - 1].max;
    }
  }
  
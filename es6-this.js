/* # this */

class Toppings { // Toppings is a Class
  // ...

  formatToppings() { // This is the Constructor
    /* Constructor / Function Details */
  }

  list() { // This is the "Method"
    return this.formatToppings(this.toppings); // Notice the call to the Constructor?
  }
}

// There are 2 ways to invoke

// 1. Method Invocation: someObject.someMethod();
// 2. Function Invocation: someFunction();

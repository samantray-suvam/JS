/**
 * ============================================================================
 * 03. FUNCTIONS AND ARROW FUNCTIONS
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * Functions are first-class citizens in JS (they can be assigned to variables, passed as arguments, returned).
 * 
 * 1. Function Declaration: `function add(a, b) { return a + b; }` (Hoisted!)
 * 2. Function Expression: `const add = function(a, b) { return a + b; }`
 * 3. Arrow Function: `const add = (a, b) => a + b;` (Shorthand, implicit return if no `{}`)
 * 
 * The `this` Keyword:
 * - In a regular function, `this` refers to the object that *called* the function.
 * - In an arrow function, `this` is lexically bound. It inherits `this` from the surrounding scope where the arrow function was *defined*.
 * 
 * Default Parameters:
 * You can set defaults: `function greet(name = "Guest") { ... }`
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - React Functional Components are literally just JS functions (mostly arrow functions) that return JSX.
 * - Arrow functions are essential for passing event handlers in React without losing the `this` context (though less of an issue now with functional components, it was huge in Class components).
 * - Inline arrow functions (e.g., `onClick={() => doSomething(id)}`) are extremely common in React.
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: Object Methods & Arrow Functions
 * If you use an arrow function as a method inside an object, `this` will NOT refer to the object. It will refer to the global scope (Window).
 * 
 * Edge Case 2: The `arguments` object
 * Regular functions have a built-in `arguments` array-like object containing all passed arguments. Arrow functions DO NOT have `arguments`. (We use the rest operator `...args` instead).
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TS allows you to strongly type your function parameters and return values (e.g., `const add = (a: number, b: number): number => a + b`). This prevents passing the wrong types of data into functions, a massive source of React bugs.
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): Convert the following standard function into a concise arrow function.
// ----------------------------------------------------------------------------
function multiply(a, b) {
  return a * b;
}
// Your Answer:


// ----------------------------------------------------------------------------
// Q2 (Medium): Predict the output regarding `this`.
// ----------------------------------------------------------------------------
const user = {
  name: "Suvam",
  regularFunc: function() {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

// user.regularFunc(); // ?
// user.arrowFunc();   // ?
// Your Answer and Explanation:


// ----------------------------------------------------------------------------
// Q3 (Hard): Creating a callback handler. 
// Fix the `delayedGreeting` method so that it correctly logs "Hello, my name is Suvam" after 1 second.
// ----------------------------------------------------------------------------
const person = {
  name: "Suvam",
  delayedGreeting: function() {
    setTimeout(function() {
      console.log("Hello, my name is " + this.name); 
      // Currently, `this.name` is undefined here. Why? Fix it.
    }, 1000);
  }
}
// Your Answer / Fix:


// --- End of Lesson 3 ---

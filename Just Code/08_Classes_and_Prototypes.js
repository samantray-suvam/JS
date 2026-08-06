/**
 * ============================================================================
 * 08. CLASSES AND PROTOTYPES
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * JavaScript uses Prototypal Inheritance under the hood, but ES6 introduced `class` syntax which acts as syntactic sugar over prototypes to make it look like Object-Oriented Programming (OOP) from Java/C++.
 * 
 * Classes:
 * - Define a blueprint for creating objects.
 * - `constructor()` is called when you use the `new` keyword.
 * - Methods are defined directly inside the class.
 * - `extends` is used for inheritance.
 * - `super()` calls the parent class constructor.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - **Class Components**: Before 2019 (React 16.8), ALL stateful React components were built using ES6 Classes (`class MyComponent extends React.Component`). 
 * - **Modern React**: Today, we almost exclusively use Functional Components with Hooks. However, you MUST understand classes because you will encounter them in legacy codebases, Error Boundaries (which still require classes), and in standard JS utility libraries.
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: `this` Context in Class Methods
 * If you pass a class method as a callback (e.g., an event listener), it loses its `this` context. 
 * `button.addEventListener('click', myInstance.myMethod)` -> `this` becomes undefined inside `myMethod`!
 * Fix: Bind it in constructor (`this.myMethod = this.myMethod.bind(this)`) OR use arrow functions for methods.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TS adds powerful OOP features to classes, like `public`, `private`, and `protected` modifiers, and Interfaces (`class User implements IUser`). This makes TS classes much safer and more robust than vanilla JS classes.
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): Create a class `Animal` with a constructor that takes `name`.
// Add a method `speak()` that logs "[name] makes a noise."
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q2 (Medium): Create a class `Dog` that extends `Animal`.
// Add a `breed` property to Dog's constructor. 
// Override the `speak()` method to log "[name] barks."
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q3 (Hard): Fixing the `this` context (React legacy style).
// The `handleClick` method is throwing an error when called via setTimeout because `this` is undefined.
// Fix it WITHOUT changing `handleClick` into an arrow function.
// ----------------------------------------------------------------------------
class Counter {
  constructor() {
    this.count = 0;
    // Your Fix Here:
  }
  
  handleClick() {
    this.count++;
    console.log("Count is now:", this.count);
  }
}

const myCounter = new Counter();
// setTimeout(myCounter.handleClick, 1000); // Throws Error! Fix the constructor.


// --- End of Lesson 8 ---

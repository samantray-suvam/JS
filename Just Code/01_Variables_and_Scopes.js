/**
 * ============================================================================
 * 01. VARIABLES, SCOPES, AND HOISTING
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * In JavaScript, we use `var`, `let`, and `const` to declare variables.
 * 
 * 1. `var`: The old way. It is Function-Scoped (or globally scoped).
 * 2. `let`: The modern way. It is Block-Scoped (e.g., inside `{}`). Can be reassigned.
 * 3. `const`: Also Block-Scoped. Cannot be reassigned. (Must be initialized at declaration).
 * 
 * HOISTING:
 * JavaScript moves variable and function declarations to the top of their scope before execution.
 * - `var` declarations are hoisted and initialized with `undefined`. (You can access them before declaration).
 * - `let` and `const` are hoisted, but NOT initialized. Accessing them before declaration causes a ReferenceError. 
 *   They are in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is processed.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - `const` is the standard for declaring React components, hooks, and mostly everything else, ensuring you don't accidentally mutate state variables directly.
 * - `let` is used for variables that might change inside loops or specific local calculations within a component.
 * - Avoid `var` entirely in modern React to prevent unpredictable bugs with scope.
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: `const` objects/arrays CAN be mutated!
 * const user = { name: "Alice" };
 * user.name = "Bob"; // This is valid! `const` only prevents reassignment of the variable binding, not the contents.
 * 
 * Edge Case 2: `var` inside a `for` loop (classic interview question)
 * If you use `var` in a loop with a timeout, it doesn't create a new block scope for each iteration, causing issues.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TypeScript strictly enforces scope and initialization. It will give you compile-time errors if you try to use variables before initialization or reassign a `const`.
 * Also, in TS, you can define the type of the variable: `const age: number = 25;`
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): What will be logged to the console? Try to answer before running.
// ----------------------------------------------------------------------------
function q1() {
  console.log(a); // ?
  var a = 10;
  
  // console.log(b); // What would happen if you uncomment this?
  let b = 20; 
}
// Your Answer: 


// ----------------------------------------------------------------------------
// Q2 (Medium): Fix the code so it logs 0, 1, 2 sequentially.
// Hint: Look at the variable declaration keyword.
// ----------------------------------------------------------------------------
function q2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i); // Currently logs 3, 3, 3
    }, 100);
  }
}
// Your Answer / Fix:


// ----------------------------------------------------------------------------
// Q3 (Hard): Temporal Dead Zone and Shadowing. What is the output and why?
// ----------------------------------------------------------------------------
function q3() {
  let x = "global";
  function inner() {
    console.log(x); // ?
    let x = "local"; 
  }
  inner();
}
// Your Answer:


// --- End of Lesson 1 ---

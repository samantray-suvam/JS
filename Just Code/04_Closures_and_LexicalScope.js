/**
 * ============================================================================
 * 04. CLOSURES AND LEXICAL SCOPE
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * Lexical Scope:
 * An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.
 * 
 * Closure:
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
 * 
 * Whenever you create a function within another function, you have created a closure.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - React Hooks (`useState`, `useEffect`) heavily rely on closures. 
 * - When a component renders, the functions inside it (like event handlers or `useEffect` callbacks) "close over" the state variables *at the time of that render*.
 * - "Stale Closures" are a very common React bug, where an asynchronous function (like `setTimeout` inside `useEffect`) references an old state value because it closed over the state from a previous render.
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: Memory Leaks
 * Closures keep outer variables alive in memory as long as the inner function is alive. If you attach a closure to a long-living object (like a DOM element or an interval) without cleaning it up, it can cause memory leaks.
 * 
 * Edge Case 2: Stale Closures in React (Conceptual)
 * `const [count, setCount] = useState(0);`
 * `setTimeout(() => console.log(count), 3000);` 
 * If you click a button to increment `count` immediately, the timeout will still log `0` because the closure "remembered" the count as `0` when the timeout was created.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TypeScript doesn't magically "solve" closures since it's a runtime behavior, but it helps by strictly typing the variables captured in the closure, so you don't accidentally mutate them in unexpected ways with wrong types. 
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): What will the following code output and why?
// ----------------------------------------------------------------------------
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
// counter1(); // ?
// counter1(); // ?

const counter2 = outer();
// counter2(); // ?
// Your Answer:


// ----------------------------------------------------------------------------
// Q2 (Medium): Create a closure that acts as a private variable.
// Implement `createSecretPassword`. It should take an initial password.
// It should return an object with two methods: `getPassword()` and `setPassword(newPassword)`.
// The password variable itself must NOT be directly accessible from the outside.
// ----------------------------------------------------------------------------
function createSecretPassword(initialPassword) {
  // Your code here
}

// const mySecret = createSecretPassword("react123");
// console.log(mySecret.getPassword()); // "react123"
// mySecret.setPassword("ts456");
// console.log(mySecret.password); // undefined (should be private!)


// ----------------------------------------------------------------------------
// Q3 (Hard): The "Stale Closure" problem.
// The loop tries to print 0, 1, 2, 3, 4 with a 1-second delay, but it prints 5, 5, 5, 5, 5.
// Using your knowledge of closures and `let` vs `var`, fix this code.
// ----------------------------------------------------------------------------
function q3() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("Q3 Output:", i);
    }, 1000);
  }
}
// Your Answer / Fix:


// --- End of Lesson 4 ---

/**
 * ============================================================================
 * 02. DATA TYPES AND COERCION
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * JavaScript has Primitive Types and Reference (Object) Types.
 * 
 * Primitives (Stored by Value):
 * - string, number, boolean, null, undefined, symbol, bigint.
 * 
 * Reference Types (Stored by Reference):
 * - objects, arrays, functions.
 * 
 * Truthy and Falsy:
 * In JS, every value can be evaluated as a boolean. 
 * Falsy values: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
 * Everything else is Truthy! (Even empty arrays `[]` and empty objects `{}`).
 * 
 * Type Coercion:
 * JS often implicitly converts values from one type to another (e.g., when using `==` or `+`).
 * - `+` can mean addition or string concatenation.
 * - `==` allows type coercion (e.g., `1 == "1"` is true).
 * - `===` is strict equality (checks type AND value). ALWAYS use `===`.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - Conditional Rendering: You'll constantly use truthy/falsy values in React JSX (e.g., `isVisible && <Modal />`). If `isVisible` is `0`, it will render `0` instead of nothing! 
 * - Immutability: React expects state to be treated as immutable. Since objects/arrays are passed by reference, modifying them directly (e.g., `state.user.name = 'Bob'`) won't trigger a re-render. You must create a *new* reference.
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: typeof `null`
 * `typeof null` returns `"object"`. This is a known, ancient bug in JavaScript that was never fixed for backward compatibility.
 * 
 * Edge Case 2: Coercion Madness
 * `[] == ![]` evaluates to `true`! Why? `![]` is `false` (since `[]` is truthy). `[] == false` coerces `[]` to `""`, and `false` to `0`, and `""` to `0`. `0 == 0` is true. Insane, right? Always use `===`.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TypeScript prevents implicit coercion bugs. `1 == "1"` will throw a TS error because you are comparing different types. TS also provides robust type definitions for your variables, catching these errors in your editor.
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): Identify if the following evaluate to true or false.
// ----------------------------------------------------------------------------
// Boolean(0)        // ?
// Boolean("false")  // ?
// Boolean([])       // ?
// Boolean(undefined)// ?

// ----------------------------------------------------------------------------
// Q2 (Medium): Strict vs Loose Equality. What is logged?
// ----------------------------------------------------------------------------
function q2() {
  console.log(5 + "5"); // ?
  console.log(5 - "2"); // ?
  console.log(false == 0); // ?
  console.log(false === 0); // ?
}
// Your Answer:


// ----------------------------------------------------------------------------
// Q3 (Hard): References. Why does mutating obj2 affect obj1, and how do we fix it?
// ----------------------------------------------------------------------------
function q3() {
  const obj1 = { name: "John", details: { age: 30 } };
  const obj2 = obj1;
  
  obj2.name = "Jane";
  
  console.log(obj1.name); // Logs "Jane". Why?
  // Your fix to copy obj1 safely without mutating it:
}
// Your Answer / Fix:


// --- End of Lesson 2 ---

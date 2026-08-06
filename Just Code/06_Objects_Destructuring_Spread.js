/**
 * ============================================================================
 * 06. OBJECTS, DESTRUCTURING, AND SPREAD/REST OPERATORS
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * Object Destructuring:
 * Extracting properties from objects (or arrays) into distinct variables.
 * const user = { name: "Suvam", role: "Dev" };
 * const { name, role } = user;
 * 
 * Spread Operator (`...`):
 * "Spreads" an object or array into its individual elements. Used for copying or merging.
 * const newArr = [...oldArr, 4, 5];
 * const newObj = { ...oldObj, newProp: true };
 * 
 * Rest Parameter (`...`):
 * Used in function parameters to collect all remaining arguments into an array.
 * function sum(first, ...restOfNumbers) { ... }
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - **Props Destructuring**: Almost every React component uses this. 
 *   Instead of `function Card(props) { return <div>{props.title}</div> }`, 
 *   we do `function Card({ title, subtitle }) { return <div>{title}</div> }`.
 * - **State Updates**: React state must be immutable. You use the spread operator to copy the old state and overwrite only what changed.
 *   `setFormState(prev => ({ ...prev, email: newEmail }))`
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: Shallow Copying
 * The spread operator `...` only creates a SHALLOW copy. Nested objects are still copied by reference.
 * const original = { nested: { a: 1 } };
 * const copy = { ...original };
 * copy.nested.a = 99; // This mutates `original` as well!
 * 
 * Edge Case 2: Destructuring with Default Values or Aliases
 * `const { name: fullName = "Anonymous" } = user;` (Renames `name` to `fullName`, sets default if undefined).
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TypeScript shines heavily here. It enforces that when you destructure props in a React component, you only destructure properties that actually exist on the defined Interface or Type. It also ensures you don't miss required properties when spreading objects to create new state.
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

const profile = {
  id: 101,
  username: "code_ninja",
  socials: { twitter: "@ninja", github: "ninja-dev" }
};

// ----------------------------------------------------------------------------
// Q1 (Easy): Use destructuring to extract `username` and `github` from `profile`.
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q2 (Medium): Use the Spread operator to create a `newProfile` object.
// It should contain all properties of `profile`, but add a `theme: "dark"` property,
// AND update the `username` to "react_ninja".
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q3 (Hard): The Shallow Copy Trap.
// Look at the code below. Without changing the `profile` object, write a way to deeply copy it 
// so that changing `socials.twitter` on the copy DOES NOT affect the original `profile`.
// Hint: Look into JSON methods or structuredClone.
// ----------------------------------------------------------------------------
function q3() {
  // const copy = { ...profile }; // This is a shallow copy, won't work for nested `socials`
  
  // Your Deep Copy Solution:
  // const deepCopy = ...
  
  // Test it:
  // deepCopy.socials.twitter = "@react_ninja";
  // console.log(profile.socials.twitter); // Should still be "@ninja"
}

// --- End of Lesson 6 ---

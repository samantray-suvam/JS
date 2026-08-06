/**
 * ============================================================================
 * 05. ARRAYS AND ARRAY METHODS
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * Arrays in JS are zero-indexed and can hold mixed data types.
 * 
 * The most crucial array methods are Higher-Order Functions (methods that take functions as arguments):
 * 1. `map(callback)`: Returns a NEW array containing the results of calling the function on every element.
 * 2. `filter(callback)`: Returns a NEW array with all elements that pass the test in the callback.
 * 3. `reduce(callback, initialValue)`: Executes a reducer function on each element, resulting in a single output value.
 * 4. `find(callback)`: Returns the FIRST element that passes the test.
 * 5. `some(callback)` / `every(callback)`: Returns true/false if some or all elements pass the test.
 * 
 * Mutating vs Non-Mutating Methods:
 * - Mutating (Changes original array): `push`, `pop`, `splice`, `sort`, `reverse`.
 * - Non-Mutating (Returns new array): `map`, `filter`, `slice`, `concat`.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - `map()` is used EVERYWHERE in React to render lists of components from an array of data. 
 *   e.g., `data.map(item => <ListItem key={item.id} data={item} />)`
 * - `filter()` is used extensively for deleting items or implementing search/filtering features.
 * - NEVER use mutating methods (like `push` or `splice`) directly on React state arrays. Always create a copy using non-mutating methods or the spread operator (covered next lesson).
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: `sort()` behavior
 * By default, `sort()` converts elements to strings and sorts them alphabetically. 
 * `[10, 2, 30].sort()` results in `[10, 2, 30]`! To sort numbers, you MUST pass a comparator function: `array.sort((a, b) => a - b)`.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TypeScript ensures your arrays only contain the expected types (e.g., `number[]` or `Array<string>`). When using `.map()`, TS correctly infers the type of the returned array based on your callback function, preventing errors when you pass that array to a React component.
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

const users = [
  { id: 1, name: "Alice", isActive: true, age: 25 },
  { id: 2, name: "Bob", isActive: false, age: 30 },
  { id: 3, name: "Charlie", isActive: true, age: 35 }
];

// ----------------------------------------------------------------------------
// Q1 (Easy): Use `.map()` to create an array of just the user names.
// Expected Output: ["Alice", "Bob", "Charlie"]
// ----------------------------------------------------------------------------
// Your Answer:
// const names = ...


// ----------------------------------------------------------------------------
// Q2 (Medium): Use `.filter()` to get only active users, 
// AND THEN chain `.map()` to return an array of their names in uppercase.
// Expected Output: ["ALICE", "CHARLIE"]
// ----------------------------------------------------------------------------
// Your Answer:
// const activeNamesUpperCase = ...


// ----------------------------------------------------------------------------
// Q3 (Hard): Use `.reduce()` to calculate the total age of all users.
// Expected Output: 90
// ----------------------------------------------------------------------------
// Your Answer:
// const totalAge = ...


// --- End of Lesson 5 ---

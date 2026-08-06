/**
 * ============================================================================
 * 07. ASYNCHRONOUS JAVASCRIPT
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * JavaScript is single-threaded, meaning it can only do one thing at a time.
 * Asynchronous JS allows it to perform long network requests without blocking the main thread (freezing the page).
 * 
 * 1. Callbacks: The old way. Passing a function to be executed when a task finishes. Led to "Callback Hell".
 * 2. Promises: An object representing the eventual completion (or failure) of an async operation.
 *    - States: Pending, Fulfilled (.then), Rejected (.catch).
 * 3. Async / Await: Syntactic sugar over Promises. Makes async code look synchronous.
 *    - `async` before a function means it always returns a Promise.
 *    - `await` pauses execution inside the function until the Promise resolves.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - **Fetching Data**: You will constantly use `fetch()` or Axios inside `useEffect` to get data from APIs to populate your components.
 * - If you don't understand Async JS, your React components will try to render data before it has arrived from the server, causing crashes (`Cannot read property 'name' of undefined`).
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: Forgetting `await`
 * const data = fetch('/api/users'); 
 * // `data` is a Promise, NOT the user data! You must `await fetch(...)`.
 * 
 * Edge Case 2: Error Handling in Async/Await
 * Unhandled promise rejections can crash apps. Always wrap `await` calls in `try...catch` blocks.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TS allows you to strongly type the data you expect back from a Promise.
 * `const response = await fetch('/api/user');`
 * `const data: User = await response.json();` (Now TS knows `data` has `name`, `age`, etc.)
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): Convert this Promise chain to use Async / Await.
// ----------------------------------------------------------------------------
function getUserEasy() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
// Your Answer:
// async function getUserAsync() { ... }


// ----------------------------------------------------------------------------
// Q2 (Medium): Promise.all
// You need to fetch data from two APIs at the SAME TIME, not one after the other.
// Use `Promise.all` to fetch user 1 and user 2 simultaneously.
// ----------------------------------------------------------------------------
const url1 = 'https://jsonplaceholder.typicode.com/users/1';
const url2 = 'https://jsonplaceholder.typicode.com/users/2';

async function getTwoUsers() {
  // Your code here using Promise.all
}


// ----------------------------------------------------------------------------
// Q3 (Hard): The Event Loop / Microtask Queue
// What is the exact order of logs in the console? Why?
// ----------------------------------------------------------------------------
function q3() {
  console.log("1. Sync execution starts");
  
  setTimeout(() => console.log("2. setTimeout callback"), 0);
  
  Promise.resolve().then(() => console.log("3. Promise resolved"));
  
  console.log("4. Sync execution ends");
}
// Your Answer and Explanation:


// --- End of Lesson 7 ---

/**
 * ============================================================================
 * 10. DOM MANIPULATION AND EVENTS
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * The DOM (Document Object Model) is a tree-like representation of your HTML page that JavaScript can interact with.
 * 
 * Selecting Elements:
 * - `document.getElementById('app')`
 * - `document.querySelector('.btn')` (Returns first match)
 * - `document.querySelectorAll('.btn')` (Returns NodeList of all matches)
 * 
 * Modifying Elements:
 * - `element.textContent = "Hello"`
 * - `element.classList.add('active')`
 * 
 * Events:
 * - `element.addEventListener('click', (event) => { ... })`
 * - `event.preventDefault()`: Stops default browser behavior (like form submission refreshing the page).
 * - `event.stopPropagation()`: Stops the event from bubbling up to parent elements.
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - **The Virtual DOM**: React abstracts direct DOM manipulation away from you. Instead of `document.getElementById`, you update React **State**, and React updates the DOM for you efficiently.
 * - **Synthetic Events**: React wraps native browser events in its own "SyntheticEvent" system for cross-browser compatibility (e.g., `onClick` instead of `onclick`).
 * - Why learn it? If you don't know how the DOM works, you won't understand what React is actually doing for you, and you'll struggle with third-party libraries (like D3 or GSAP) that require direct DOM access via React `useRef`.
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: Event Delegation
 * Instead of adding 100 event listeners to 100 list items, you add ONE listener to the parent `<ul>` and check `event.target`. React does this automatically under the hood at the root level!
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TS forces you to type your DOM elements and Events. 
 * E.g., `const input = document.querySelector('input') as HTMLInputElement;`
 * E.g., `function handleChange(e: React.ChangeEvent<HTMLInputElement>) { ... }`
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): Write the JS code to select a button with the ID "submit-btn" 
// and change its text to "Loading...".
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q2 (Medium): Form Submission
// Write an event listener for a form with ID "login-form".
// When submitted, PREVENT the page from refreshing, and log "Form submitted!"
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q3 (Hard): Event Delegation
// You have a `div` with ID "container" that contains many dynamically added buttons.
// Write ONE event listener on the "container" that logs the text of whatever button was clicked.
// Ensure it ONLY triggers if a BUTTON was clicked, not if the container background was clicked.
// ----------------------------------------------------------------------------
// Your Answer:


// --- End of Lesson 10 ---
// Congratulations! You are now ready to start your React & TypeScript journey!

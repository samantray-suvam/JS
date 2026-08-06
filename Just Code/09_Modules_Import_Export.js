/**
 * ============================================================================
 * 09. MODULES (IMPORT / EXPORT)
 * ============================================================================
 * 
 * --- CONCEPT EXPLANATION ---
 * ES6 Modules allow you to split your JS code into multiple files, keeping it organized and reusable.
 * 
 * 1. Named Exports: Exporting specific variables/functions. You can have multiple per file.
 *    - `export const API_KEY = "123";`
 *    - `export function sum() {}`
 *    - Import: `import { API_KEY, sum } from './utils.js';`
 * 
 * 2. Default Exports: Exporting ONE primary thing from a file. 
 *    - `export default function App() {}`
 *    - Import: `import App from './App.js';` (Note: No curly braces!)
 * 
 * Aliasing:
 * You can rename imports: `import { sum as addNumbers } from './utils.js';`
 * 
 * --- WHY THIS MATTERS FOR REACT ---
 * - A React application is essentially a massive tree of imported and exported modules.
 * - Every single Component you create will be exported (usually as `export default`) and imported into another file.
 * - You will import hooks from React (`import { useState } from 'react';`).
 * 
 * --- ISSUES & EDGE CASES ---
 * Edge Case 1: Mixing Named and Default Exports
 * You can have one default export AND multiple named exports in the same file.
 * Import syntax: `import React, { useState, useEffect } from 'react';`
 * (`React` is default, `useState` and `useEffect` are named).
 * 
 * Edge Case 2: Circular Dependencies
 * File A imports File B, but File B imports File A. This can cause confusing errors where an imported variable is suddenly `undefined`.
 * 
 * --- HOW IT IS RESOLVED IN TYPESCRIPT ---
 * TS uses exactly the same import/export syntax. However, TS also allows you to import and export `type` and `interface` definitions.
 * `import type { UserData } from './types';` (This is stripped out during compilation, making bundles smaller!).
 * 
 * ============================================================================
 * PRACTICE QUESTIONS
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// Q1 (Easy): Write the code to export a function named `multiply` as a NAMED export.
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q2 (Medium): Assume `multiply` is in `math.js`. 
// Write the code to import it into `main.js`, but rename it to `multi` during the import.
// ----------------------------------------------------------------------------
// Your Answer:


// ----------------------------------------------------------------------------
// Q3 (Hard): How would you export a class `Database` as the DEFAULT export, 
// AND export a constant `DB_VERSION` as a named export from the same file?
// Then, write the single import statement to pull both into another file.
// ----------------------------------------------------------------------------
// Your Answer:


// --- End of Lesson 9 ---

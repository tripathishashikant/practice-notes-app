# Learning Guide: `client/src/hooks/useGetNotes.js`

## 1. What is this file? (`useGetNotes.js`)
`useGetNotes.js` is a **Custom React Hook** responsible for fetching the list of notes from the backend server upon component mount, while managing loading and error states cleanly.

---

## 2. Comprehensive Granular Q&A & Core Concepts

### A. What is a Custom Hook and why extract data fetching from UI components?
- **Concept & Explanation:** Custom hooks (starting with `use`) encapsulate reusable logic. UI components should focus purely on rendering UI based on state, while side-effects like data fetching are extracted into custom hooks to maintain clean separation of concerns and reusability.

### B. What does an empty dependency array `[]` in `useEffect` mean?
- **Concept & Explanation:** An empty dependency array tells React that the effect has no dependencies on any props or state variables. Therefore, the effect executes **once** when the component mounts on the screen and does not re-run on subsequent re-renders.

### C. Why do infinite loops happen and how does `useCallback` prevent them?
- **Concept & Explanation:** In JavaScript, functions are reference types (objects with unique memory addresses). If a function is passed as a dependency or declared inside a component without memoization, every re-render recreates the function with a new memory reference, tricking React into thinking the dependency changed and re-triggering `useEffect`. `useCallback` memoizes the function definition in memory, ensuring its reference remains stable across re-renders unless its dependencies change.

# Learning Guide: `client/src/hooks/useDeleteNote.js`

## 1. What is this file? (`useDeleteNote.js`)
`useDeleteNote.js` is a custom React hook implementing the **Action Hook Pattern** to handle note deletion logic, loading/deleting states, and instant UI state synchronization upon user interaction.

---

## 2. Comprehensive Granular Q&A & Core Concepts

### A. What is the Action Hook Pattern and why separate mutations from data fetching?
- **Concept & Explanation:** While data-fetching hooks (like `useGetNotes`) run automatically on mount, action hooks handle user-driven mutations (like creating or deleting resources). Separating mutations into dedicated hooks keeps UI components focused purely on rendering and ensures mutation logic is modular and reusable.

### B. What is event-driven execution?
- **Concept & Explanation:** Unlike mount-driven effects, action hooks are event-driven. They only execute when explicitly triggered by a user action (such as clicking a delete button). The component calls the hook's execution function (`deleteNote(id)`), passing callbacks or handling state updates upon success.

### C. How does immediate UI state synchronization work?
- **Concept & Explanation:** When a delete request succeeds on the backend server, we immediately update the local React state array (e.g., using `setNotes(prev => prev.filter(n => n.id !== id))`) to filter out the deleted note. This removes the item from the screen instantly without requiring a hard page refresh.

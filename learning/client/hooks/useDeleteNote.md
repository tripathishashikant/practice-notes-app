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

---

## 3. Practical Usage Example: Using `useDeleteNote` and `useGetNotes` in `Notes.jsx`

If you are using custom hooks instead of React Router Actions, here is how `useGetNotes` and `useDeleteNote` are integrated into a component (`Notes.jsx`) with local state management (`useState` and `useEffect`):

```jsx
import { useState, useEffect } from "react";
import useGetNotes from "@/hooks/useGetNotes";
import useDeleteNote from "@/hooks/useDeleteNote";
import { DeleteIcon } from "@/assets/icons/DeleteIcon";
import { LoadingIcon } from "@/assets/icons/LoadingIcon";

function Notes() {
  const [notes, setNotes] = useState([]);

  // 1. Fetch notes on mount
  const { getNotes, isLoading: isFetching, error: fetchError } = useGetNotes({
    onSuccess: (fetchedNotes) => setNotes(fetchedNotes),
  });

  useEffect(() => {
    getNotes({ path: "notes" });
  }, [getNotes]);

  // 2. Delete note and filter local state upon success
  const { deleteNote, isLoading: isDeleting, error: deleteError } = useDeleteNote({
    onSuccess: (deletedNote) => {
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== deletedNote.id)
      );
    },
  });

  const handleDeleteNote = (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    deleteNote({ path: `notes/${id}` });
  };

  if (isFetching) return <p>Loading notes...</p>;
  if (fetchError) return <p className="error">Failed to load notes.</p>;

  return (
    <div className="notes">
      {deleteError && <p className="error">Failed to delete note.</p>}
      <ul className="notes-list">
        {notes.map((note) => (
          <li className="note" key={note.id}>
            <span>{note.text}</span>
            <button
              type="button"
              onClick={() => handleDeleteNote(note.id)}
              disabled={isDeleting}
            >
              {isDeleting ? <LoadingIcon /> : <DeleteIcon />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
```


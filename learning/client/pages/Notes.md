# Learning Guide: `client/src/pages/Notes.md` (`Notes.jsx`)

## 1. What is this file? (`Notes.jsx`)
`Notes.jsx` is the main dashboard page that displays the list of all notes, loading states, search/filter controls, and links to individual notes.

---

## 2. Component Structure & Hook Integration
- **How it works:** It calls `useGetNotes()` to fetch notes and `useDeleteNote()` when the user deletes a note. 
- **UI Feedback:** Uses `LoadingIcon` and arrow links (`ArrowIcon.jsx`) to provide interactive feedback when users navigate to a note.

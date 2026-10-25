# Practice Notes App - Comprehensive Learning Guide (`learning/`)

Welcome to the structured learning documentation for the **Practice Notes App**! This directory contains file-wise explanations, architectural patterns, design decisions, and answers to doubts encountered while building this full-stack application.

---

## 📂 Directory Structure & Index

### 🖥️ Client Side (`learning/client/`)
- [`main.md`](client/main.md) - Entry point (`main.jsx`), React 18 `createRoot`, `StrictMode`, and Providers.
- [`router.md`](client/router.md) - Client-side routing (`router.jsx`), Loaders vs Hooks, and Error Fallbacks.
- [`services/api.md`](client/services/api.md) - Service Layer & Separation of Concerns.
- [`hooks/useGetNotes.md`](client/hooks/useGetNotes.md) - Async fetching, `useEffect` mount-driven actions, and why `useCallback` is necessary.     
- [`hooks/useDeleteNote.md`](client/hooks/useDeleteNote.md) - Action hook pattern and event-driven state mutation.
- [`utils/notes.utils.md`](client/utils/notes.utils.md) - Pure functions and helper utilities.
- [`layouts/RootLayout.md`](client/layouts/RootLayout.md) - Master shell layout and `<Outlet />`.
- [`layouts/NotesLayout.md`](client/layouts/NotesLayout.md) - Split-view layout and gutter spacing.
- [`pages/Notes.md`](client/pages/Notes.md) - Notes dashboard page.
- [`pages/Note.md`](client/pages/Note.md) - Single note view & editor.
- [`styling.md`](client/styling.md) - CSS styling, modular stylesheets, and SVG icon components (`ArrowIcon`, `DeleteIcon`, `EditIcon`, `LoadingIcon`).
- [`error-resilience.md`](client/error-resilience.md) - Route error boundaries (`RouteErrorFallback`) and 404 handling (`NotFound`).

### ⚙️ Server Side (`learning/server/`)
- [`server.md`](server/server.md) - Express entry point (`server.js`), middleware (`cors`, `express.json`), and Two-Tier architecture.
- [`routes/notes.md`](server/routes/notes.md) - REST API routes (`/api/v1/notes`) and HTTP status codes.
- [`testing.md`](server/testing.md) - Unit and integration testing with Jest and Supertest.
- [`architecture-evolution.md`](server/architecture-evolution.md) - Comparing Mutable arrays, Immutable arrays, and Map-based backend storage.

---
*Tailored with clear explanations, real-world analogies, and project-specific references for Indian developers and learners.*

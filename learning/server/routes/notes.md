# Learning Guide: `server/routes/v1/notes.md` (`server/routes/v1/notes.js`)

## 1. What is this file? (`notes.js`)
`server/routes/v1/notes.js` defines the REST API endpoints (`/api/v1/notes`) for handling note CRUD operations (Get all notes, create note, delete note).

---

## 2. Core Concepts & Best Practices (Q&A Review)

### A. Why use HTTP Status Code `201` vs `200`?
- **Your Answer & Explanation:** We send `201 Created` because it is the standard HTTP status code notifying the client that a new resource has been created on the server successfully. `200 OK` is used for successful retrieval (`GET`), while `201` explicitly indicates creation (`POST`).

### B. What status code to return when a Note ID is Not Found?
- **Your Answer & Discussion:** You guessed `400 Bad Request`, which is a common guess! However, the standard HTTP status code for a missing specific resource (like a note ID that doesn't exist in the database) is **`404 Not Found`**. 
  - *Note on 404 vs 400:* 
    - `400 Bad Request` means the server couldn't understand the request due to malformed syntax (e.g. invalid JSON).
    - `404 Not Found` means the server understood the request, but the specific resource (e.g. note with ID `999`) does not exist.

### C. REST API Endpoints in Our Project
- **GET (`/`):** Returns all notes with status `200`.
- **POST (`/`):** Creates a new note and returns status `201 Created`.
- **DELETE (`/:id`):** Deletes a note by ID and returns status `200` or `204`.
- **Error Handling:** Returns appropriate status codes when database operations fail.

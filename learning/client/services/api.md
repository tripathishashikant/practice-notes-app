# Learning Guide: `client/src/services/api.js`

## 1. What is this file? (`api.js`)
`api.js` is our **Service Layer**. It acts as the central hub for all HTTP communication between our React frontend and the Express backend server.

---

## 2. Comprehensive Granular Q&A & Core Concepts

### A. Why use Separation of Concerns (Service Layer Pattern)?
- **Concept & Explanation:** Isolating fetch and API calls inside `api.js` keeps UI components clean and focused purely on rendering. It ensures high reusability, centralized error management for network tasks, and adherence to standard architectural patterns.

### B. Why use centralized base URLs and fetch wrappers in larger apps?
- **Concept & Explanation:** Larger applications frequently evolve—changing domains, API versioning (`/v1/`, `/v2/`), or headers. Centralizing these in the service layer makes scaling and updating endpoints effortless without modifying individual components.

### C. Why must we check `if (!response.ok)` with native `fetch()`?
- **Concept & Explanation:** Unlike HTTP libraries like Axios, the native JavaScript `fetch()` API only rejects promises on complete network failures (e.g., loss of internet). When a server returns an error status like `404 Not Found` or `500 Internal Server Error`, `fetch()` considers the network request successful. Therefore, we must explicitly check `if (!response.ok)` to catch HTTP errors and throw exceptions.

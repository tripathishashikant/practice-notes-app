# Learning Guide: `server/server.js`

## 1. What is this file? (`server.js`)
`server.js` is the entry point of our backend Express application. It sets up the HTTP server, middleware (CORS, express.json), and mounts our API route handlers.

---

## 2. Core Concepts & Architecture

### A. How `express.json()` Automatically Parses Requests
- **What it is:** A built-in Express middleware (`app.use(express.json())`).
- **Your Insight & Explanation:** When the frontend client sends data (like a new note) over HTTP, the data travels across the network as raw binary/stream bytes. Under the hood, `express.json()` intercepts this incoming request, reads the raw stream, parses the JSON string content, and converts it into a clean, usable JavaScript object attached to `req.body`.
- **What happens if we forget it?** If `express.json()` is omitted, `req.body` will be `undefined`, and any attempt to read `req.body.title` or `req.body.content` in our POST routes will fail or throw errors.

### B. Why is the CORS Plugin Used (`cors()`)?
- **What it is:** Cross-Origin Resource Sharing middleware (`app.use(cors())`).
- **Why we need it:** Browsers enforce a strict security rule called the **Same-Origin Policy**. By default, a frontend running on one origin (e.g., Vite dev server at `http://localhost:5173`) is **blocked** from requesting resources from a backend running on a different port or domain (e.g., Express server at `http://localhost:5000`).
- **How CORS helps:** The `cors` middleware adds special HTTP headers (like `Access-Control-Allow-Origin: *`) to server responses, telling the browser: *"It's safe! Allow this frontend origin to talk to me."*

### C. Express Middleware & `app.use()`
- **What it is:** `app.use()` registers middleware (plugins/interceptors) that sit in the request-response pipeline.
- **How it works:** Before a request is consumed by the server or a response is sent to the client, middleware performs predefined tasks (e.g., parsing JSON bodies, injecting CORS headers) making common tasks modular and reusable.

### D. API Versioning (`/api/v1`)
- **What it is:** Namespacing our routes under `/api/v1`.
- **Why we need it:** It provides **backward compatibility**. If we introduce breaking changes in our business logic or API data structure later (e.g., redesigning note objects), we can release `/api/v2` without breaking existing clients still relying on `/api/v1`.

### E. Two-Tier Client-Server Architecture
- **How it works:** The frontend (React) and backend (Express) run on separate ports/processes. Communication happens entirely via REST API calls over HTTP (`GET`, `POST`, `DELETE`).

### F. Why skip `app.listen()` in test mode (`process.env.NODE_ENV !== "test"`)?
- **What it is:** A conditional check ensuring that `app.listen(PORT)` is only executed in development or production, and skipped during automated test suites (where Jest automatically sets `NODE_ENV = "test"`).
- **Why we skip it:** 
  1. **Port Conflicts (`EADDRINUSE`):** If test suites run concurrently or sequentially and each tries to bind to port 5000, Node.js crashes with `EADDRINUSE` (Address already in use).
  2. **In-Memory Testing:** Supertest (`request(app)`) tests Express apps directly in-memory without needing a live TCP network port.
- **Alternative Port Handling Ideas:**
  - **Ephemeral Ports (`port: 0`):** Passing `0` tells the OS to automatically assign a free, random port.
  - **Port Incrementing:** Catching `EADDRINUSE` errors and retrying with `port + 1`.

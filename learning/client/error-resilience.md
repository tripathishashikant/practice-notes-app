# Client Error Resilience & Fallbacks

Robust error handling ensures that unexpected routing failures, network errors, or missing resources do not crash the React application.

---

## 🛑 Components for Error Handling

### 1. Route Error Fallback (`client/src/components/RouteErrorFallback.jsx`)
- **Purpose:** Acts as React Router's `errorElement` to catch errors thrown during loader execution or rendering.
- **Mechanism:** Uses `useRouteError()` and `isRouteErrorResponse()` from `react-router-dom` to distinguish between HTTP errors (like 404 Not Found or 500 Server Error) and standard JavaScript runtime exceptions.
- **User Experience:** Displays a clean error banner with status code/message and a convenient link back to home (`/`).

### 2. Not Found Page (`client/src/pages/NotFound.jsx`)
- **Purpose:** Fallback view for unmatched URL routes.
- **User Experience:** Gracefully informs the user that the requested page does not exist and provides easy navigation back to the notes dashboard.

---

## 💡 Key Lessons
- **Graceful Degradation:** Never let unhandled exceptions show blank white screens. Always provide actionable recovery paths (e.g., "Go back to Home").
- **Router-Level Error Boundaries:** Leveraging React Router v6+ `errorElement` localizes error handling to specific route subtrees.

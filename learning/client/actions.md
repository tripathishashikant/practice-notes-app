# Learning Guide: React Router Actions & Mutations

## 1. What are React Router Actions?
In React Router v6+, an **Action** is a function dedicated to handling data mutations (such as `POST`, `PUT`, `DELETE`). It acts as a route-level handler for form submissions and programmatic submissions.

---

## 2. Core Concepts & Q&A

### A. React Router Actions vs. Custom Hooks
- **Actions (`action`):** Built directly into the data router configuration (`router.jsx`). When a submission finishes, React Router **automatically revalidates** (re-runs) all active loaders (like `notesLoader`), keeping UI data fresh without manual state management.
- **Custom Hooks (`useDeleteNote` / `fetchWithPost`):** Manual client-side state updates and event handlers. Both are valid, but Actions provide idiomatic integration with React Router.

### B. What arguments does an Action receive? (`{ request, params }`)
- **`params`**: Contains dynamic route parameters (e.g., `params.id` from `path: ":id"`).
- **`request`**: The fetch `Request` object. Calling `await request.formData()` extracts submitted form data fields (e.g., `formData.get("text")`).

### C. Why is `return` mandatory in Actions?
- Actions must **`return`** a Response object (such as `return redirect("/notes")` or validation error objects). If you omit `return`, the action implicitly returns `undefined`, and React Router will stay on the current page instead of navigating.

### D. Using `useSubmit()` and `useNavigation()`
- **`useSubmit()`**: Allows programmatic submission to route actions without needing an actual `<form>` submit event (e.g., triggering a delete action on button click).
- **`useNavigation()`**: Provides global navigation state (`navigation.state === "submitting"`, `navigation.formAction`), allowing you to track pending states and show loading spinners on specific buttons.

# Learning Guide: `client/src/router.jsx`

## 1. What is this file? (`router.jsx`)
`router.jsx` is the navigation GPS and routing configuration file of our client application. It centralizes all application routes, layouts, data loaders, and error boundaries.

---

## 2. Comprehensive Granular Q&A & Core Concepts

### A. Why use `createBrowserRouter` instead of older routing approaches (e.g. `<BrowserRouter>`, `<Route>`)?
- **Concept & Explanation:** `createBrowserRouter` provides a centralized, data-driven array of route objects. It offers automatic history management and cleaner syntax compared to scattering JSX `<Route>` components across the application.

### B. What are nested layouts and how does `<Outlet />` work?
- **Concept & Explanation:** Nested routing allows us to share persistent layout shells (such as header navigation or sidebar containers) across multiple pages. The `<Outlet />` component acts as a dynamic placeholder provided by `react-router-dom` that tells React exactly where to render the matched child route inside the parent layout.

### C. What is a route `loader` vs component-level `useEffect` fetching?
- **Concept & Explanation:** A route `loader` executes *before* the component renders, allowing data fetching, authentication checks, or permission validations to happen upfront. This prevents layout shift. Conversely, component-level `useEffect` fetching runs *after* the component mounts.

### D. What is the purpose of `errorElement` (e.g. `RouteErrorFallback`)?
- **Concept & Explanation:** If a route loader or component throws an uncaught error, `errorElement` catches it gracefully and displays a user-friendly fallback UI instead of crashing the entire application with a white screen of death.

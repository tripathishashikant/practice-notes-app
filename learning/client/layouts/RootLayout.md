# Learning Guide: `client/src/layouts/RootLayout.jsx`

## 1. What is this file? (`RootLayout.jsx`)
`RootLayout.jsx` is the master shell layout wrapper for the entire application. It includes global elements like header navigation, footer, and `<Outlet />` where child routes render.

---

## 2. Core Concepts: `<Outlet />`
- **What it is:** A placeholder component provided by `react-router-dom` that tells React where to render the currently matched child route.
- **Why we use it:** Avoids repeating header and footer code on every single page component.

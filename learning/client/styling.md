# Client Styling & Design System

The client application features a modern, clean user interface styled with modular CSS files and custom SVG icon components.

---

## 🎨 Styling Architecture
- **Vanilla CSS:** Modular stylesheets (`index.css`, `notes.css`, `note.css`) providing full control over styling without heavy CSS-in-JS runtimes.
- **Consistent Design Tokens:** Use of cohesive spacing, smooth transitions, card elevation shadows, and modern color palettes.

---

## 🧩 SVG Icon Components (`client/src/assets/icons/`)
To keep UI elements crisp and scalable across resolutions, icons are implemented as clean React functional components returning SVG markup:
- **`ArrowIcon.jsx`**: Navigation indicator for note links.
- **`DeleteIcon.jsx`**: Trash/remove action icon.
- **`EditIcon.jsx`**: Pencil/modify action icon.
- **`LoadingIcon.jsx`**: Spinner animation for async operations (deleting/saving).

---

## 💡 Key Lessons
1. **Separation of Concerns in Styles:** Keeping page-specific CSS files (`notes.css`, `note.css`) alongside their corresponding page components prevents global stylesheet bloat.
2. **Scalable Vector Graphics (SVG):** Direct React SVG components allow dynamic styling (stroke, fill) via props and CSS variables.

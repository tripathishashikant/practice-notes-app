# My Notes App

A full-stack notes application featuring a React (Vite) client with modern styling and multiple Express server implementations (mutable, immutable, and map-based).

## 🚀 Features

- **Notes Management:** View all notes with clean card layouts and sleek arrow action buttons.
- **Note Detail View:** Inspect individual notes by ID with dedicated routing and robust fallback handling.
- **API Caching & Revalidation:** Optimized fetch requests with cache control and ETag revalidation.
- **Multiple Server Backends:** Flexible Express backends using different data structures (Mutable array, Immutable array, Map).

---

## 🛠️ Project Structure

```text
my-notes-app/
├── client/          # React frontend (Vite, React Router)
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/   # Notes and Note detail pages
│   │   └── utils/
│   └── package.json
└── server/          # Express backend implementations
    ├── server-mutable.js
    ├── server-immutable.js
    ├── server-map.js
    └── package.json
```

---

## 📦 Getting Started

### 1. Client Setup
```bash
cd client
npm install
npm run dev
```

### 2. Server Setup
```bash
cd server
npm install
node server-mutable.js
```

---

## 📄 License

ISC

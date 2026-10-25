# Server Architecture Evolution: Mutable vs Immutable vs Map

During the development of the server backend, we explored three distinct data storage and manipulation patterns stored in `server/archive/`. Understanding these patterns helps developers appreciate the trade-offs between memory efficiency, predictability, and performance.

---

## 🏛️ The Three Architectural Variants

### 1. Mutable Array (`server-mutable.js`)
- **Mechanism:** Uses standard JavaScript arrays with in-place mutation methods (`Array.prototype.push()`, `Array.prototype.splice()`, and direct index assignment `notes[i] = updated`).
- **Pros:** Extremely straightforward and fast for small datasets; familiar to procedural programmers.
- **Cons:** Prone to side effects if shared across async boundaries or multiple middleware; hard to track state changes over time (lack of predictability).

### 2. Immutable Array (`server-immutable.js`)
- **Mechanism:** Treats data as read-only. Every state change produces a brand new array or object using functional programming primitives (`Array.prototype.filter()`, `Array.prototype.map()`, and ES6 spread syntax `[...notes]`).
- **Pros:** Predictable state transitions, excellent for time-travel debugging, and aligns with modern React/Redux patterns.
- **Cons:** Creating new arrays on every write operation incurs a slight garbage collection and memory overhead for massive datasets.

### 3. Map-Based Storage (`server-map.js`)
- **Mechanism:** Uses ES6 `Map` (`new Map()`) instead of arrays for in-memory storage.
- **Pros:** 
  - **$O(1)$ Time Complexity:** Lookups (`map.get(id)`), deletions (`map.delete(id)`), and updates happen in constant time compared to $O(n)$ linear scans required by `Array.prototype.find()` or `findIndex()`.
  - Preserves insertion order while offering key-value optimizations.
- **Cons:** Converting back to arrays (`Array.from(map.values())`) is required when serializing to JSON for HTTP responses.

---

## 📊 Summary Comparison

| Metric | Mutable Array | Immutable Array | Map-Based Storage |
| :--- | :--- | :--- | :--- |
| **Write Operation** | `notes.push(newNote)` | `[...notes, newNote]` | `map.set(id, note)` |
| **Lookup Speed ($O$)** | $O(n)$ | $O(n)$ | $O(1)$ |
| **Side Effects** | High Risk | Zero (Pure) | Controlled |
| **Best Used For** | Prototyping | Functional apps | High-performance lookups |

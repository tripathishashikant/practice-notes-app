# Learning Guide: `client/src/utils/notes.utils.md` (`notes.utils.js`)

## 1. What is this file? (`notes.utils.js`)
`notes.utils.js` contains helper utility functions for formatting dates, truncating note text previews, and validating note payloads before sending them to the API.

---

## 2. Best Practices: Pure Functions
- **What it is:** Utility functions are designed as **pure functions**—given the same input, they always return the exact same output without modifying external variables (no side effects).
- **Why we use it:** Makes unit testing extremely simple and ensures predictable behavior across components.

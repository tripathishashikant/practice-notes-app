# Server Unit Testing with Jest & Supertest (`server/tests/notes.test.js`)

Testing is a cornerstone of robust backend development. In this project, we use **Jest** as our test runner and assertion library, alongside **Supertest** to HTTP-test our Express application without needing to bind to a physical network port.

---

## 🛠️ Tech Stack for Testing
- **Jest (`jest`)**: JavaScript testing framework with a focus on simplicity and support for async/await (`describe`, `it`, `expect`).
- **Supertest (`supertest`)**: A high-level abstraction for testing HTTP assertions, allowing us to send mock HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) directly to our Express app instance.

---

## 📂 Test File Structure (`server/tests/notes.test.js`)

```javascript
import request from "supertest";
import app from "../server.js";

describe("Notes API Endpoints", () => {
  let createdId;

  it("should fetch notes list", async () => {
    const res = await request(app).get("/api/v1/notes");

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new note", async () => {
    const res = await request(app)
      .post("/api/v1/notes")
      .send({ text: "Test Note" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.text).toEqual("Test Note");
    createdId = res.body.id;
  });

  it("should update a note", async () => {
    const res = await request(app)
      .put(`/api/v1/notes/${createdId}`)
      .send({ text: "Updated Test Note" });

    expect(res.statusCode).toEqual(200);
    expect(res.body.text).toEqual("Updated Test Note");
  });

  it("should delete a note", async () => {
    const res = await request(app).delete(`/api/v1/notes/${createdId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: "Note deleted Successfully" });
  });
});
```

---

## 💡 Core Concepts & Q&A Learning

### A. Why do we need Supertest when Jest already has `expect` assertions?
- **Explanation:** Jest is the test runner and assertion library (`expect`), but Jest alone does not know how to send HTTP requests to an Express application. **Supertest** bridges this gap: it acts as the HTTP client that takes our exported Express `app` instance, simulates incoming HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) in-memory without running a live server, and returns the response for Jest to assert on.

### B. Why chain integration tests sequentially (Create $\rightarrow$ Update $\rightarrow$ Delete)?
- **Explanation:** In REST APIs, resource IDs are generated dynamically on the fly (e.g., timestamps `Date.now()`). Because IDs are not hardcoded, subsequent tests cannot update or delete a note unless they know its ID. Therefore, tests are chained sequentially: `POST` creates the note and saves its returned `id` into a test suite variable (`createdId`), which is then used by the subsequent `PUT` and `DELETE` tests.

### C. HTTP Status Assertions
- Verifying correct HTTP status codes (`200 OK`, `201 Created`, `404 Not Found`) ensures strict adherence to REST conventions.

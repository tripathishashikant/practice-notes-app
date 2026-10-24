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

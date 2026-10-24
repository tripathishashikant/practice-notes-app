import express from "express";
import cors from "cors";

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

const notesMap = new Map([
  ["1", { id: "1", text: "This is note 1" }],
  ["2", { id: "2", text: "This is note 2" }],
]);

app.get("/api/notes", (req, res) => {
  res.json(Array.from(notesMap.values()));
});

app.post("/api/notes", (req, res) => {
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Note text is required" });
  }

  const id = Date.now().toString();
  const newNote = {
    id,
    text: text.trim(),
  };

  notesMap.set(id, newNote);

  res.status(201).json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;

  if (!notesMap.has(id)) {
    return res.status(404).json({ error: "Note not found" });
  }

  notesMap.delete(id);

  res.json({ message: "Note deleted Successfully" });
});

app.put("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Note text is required" });
  }

  const note = notesMap.get(id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  const updatedNote = { ...note, text: text.trim() };
  notesMap.set(id, updatedNote);

  res.json(updatedNote);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Map-based server running on http://localhost:${PORT}`);
  });
}

export default app;

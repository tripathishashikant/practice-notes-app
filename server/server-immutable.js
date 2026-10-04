import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// app.disable("etag"); // to disable showing cached result with 304 status

let notes = [
  { id: "1", text: "This is note 1" },
  { id: "2", text: "This is note 2" },
];

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const newNote = {
    id: Date.now().toString(),
    text: req.body.text,
  };

  notes = [...notes, newNote];

  res.status(201).json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const exists = notes.some((n) => n.id === id);

  if (!exists) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes = notes.filter((note) => note.id !== id);

  res.json({ message: "Note deleted Successfully" });
});

app.put("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Note text is required" });
  }

  const exists = notes.some((n) => n.id === id);

  if (!exists) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes = notes.map((note) =>
    note.id === id ? { ...note, text: text.trim() } : note,
  );

  const updatedNote = notes.find((note) => note.id === id);
  res.json(updatedNote);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
}

export default app;

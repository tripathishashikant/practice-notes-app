import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// In-memory notes array using mutable operations
let notes = [
  { id: "1", text: "This is note 1" },
  { id: "2", text: "This is note 2" },
];

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Note text is required" });
  }

  const newNote = {
    id: Date.now().toString(),
    text: text.trim(),
  };

  // Mutable array operation
  notes.push(newNote);

  res.status(201).json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  // Mutable array operation
  notes.splice(index, 1);

  res.json({ message: "Note deleted Successfully" });
});

app.put("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ error: "Note text is required" });
  }

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  // Direct object mutation
  note.text = text.trim();

  res.json(note);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Mutable server running on http://localhost:${PORT}`);
  });
}

export default app;

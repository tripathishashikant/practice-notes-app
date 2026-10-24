import express from "express";
import cors from "cors";
import v1NotesRouter from "./routes/v1/notes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mount versioned routers
app.use("/api/v1", v1NotesRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;

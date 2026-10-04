import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import "./note.css";

function Note() {
  const { id } = useParams();
  const notes = useRouteLoaderData("notes");
  const filteredNote = notes?.find((note) => note.id === id);

  if (!filteredNote) {
    return (
      <div className="note-detail-container">
        <h2>Note not found</h2>
        <p>The note you are looking for does not exist or has been removed.</p>
        <Link to=".." className="back-link">
          ← Back to Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="note-detail-container">
      <div className="note-detail-header">
        <Link to=".." className="back-link">
          ← Back to Notes
        </Link>
        <span className="note-id-badge">ID: {filteredNote.id}</span>
      </div>
      <div className="note-detail-card">
        <p className="note-detail-text">{filteredNote.text}</p>
      </div>
    </div>
  );
}

export default Note;

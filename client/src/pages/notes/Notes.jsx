import { Link, useRouteLoaderData } from "react-router-dom";
import "./notes.css";

function Notes() {
  const notes = useRouteLoaderData("notes");

  return (
    <div className="notes">
      <h1>Notes</h1>
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <span className="note-text">{note.text}</span>
          <Link to={note.id} className="note-link" aria-label="Read note">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Notes;

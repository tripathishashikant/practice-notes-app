import { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import useDeleteNote from "@/hooks/useDeleteNote";
import { ArrowIcon } from "@/assets/icons/ArrowIcon";
import { DeleteIcon } from "@/assets/icons/DeleteIcon";
import { LoadingIcon } from "@/assets/icons/LoadingIcon";
import "./notes.css";

function Notes() {
  const initialNotes = useRouteLoaderData("notes");
  const [notes, setNotes] = useState(initialNotes);

  const { deleteNote, isLoading, error } = useDeleteNote({
    onSuccess: (deletedId) => {
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== deletedId),
      );
    },
  });

  return (
    <div className="notes">
      <h1>Notes</h1>
      <ul>
        {error && (
          <li className="note" key="errorDeletingNote">
            <p className="error">Failed to delete note.</p>
          </li>
        )}
        {notes.map((note) => (
          <li className="note" key={note.id}>
            <span className="note-text">{note.text}</span>
            <div className="note-actions">
              <button
                type="button"
                className="note-action-btn delete-btn"
                aria-label="Delete note"
                onClick={() => deleteNote(note.id)}
                disabled={isLoading}
              >
                {isLoading ? <LoadingIcon /> : <DeleteIcon />}
              </button>
              <Link to={note.id} className="note-link" aria-label="Read note">
                <ArrowIcon />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;

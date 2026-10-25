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
    onSuccess: (deletedNote) => {
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== deletedNote.id),
      );
    },
  });

  const handleDeleteNote = (id) => {
    deleteNote({ path: `notes/${id}` });
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h1>Notes</h1>
        <Link to="addNote" className="add-note-link" aria-label="Add new note">
          <span>Add Note</span>
          <ArrowIcon />
        </Link>
      </div>
      <hr className="notes-separator" />
      <ul className="notes-list">
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
                onClick={() => handleDeleteNote(note.id)}
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

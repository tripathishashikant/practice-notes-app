import {
  Link,
  useRouteLoaderData,
  useSubmit,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { ArrowIcon } from "@/assets/icons/ArrowIcon";
import { DeleteIcon } from "@/assets/icons/DeleteIcon";
import { LoadingIcon } from "@/assets/icons/LoadingIcon";
import "./notes.css";

function Notes() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData();
  const notes = useRouteLoaderData("notes") || [];
  const isDeleting =
    navigation.state === "Submitting" && navigation.formAction === `/notes`;

  const handleDeleteNote = (id) => {
    submit({ id }, { method: "delete", action: `/notes` });
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
        {actionData?.error && (
          <li className="note" key="errorDeletingNote">
            <p className="error">{actionData.error}</p>
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
                disabled={isDeleting}
              >
                {isDeleting ? <LoadingIcon /> : <DeleteIcon />}
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

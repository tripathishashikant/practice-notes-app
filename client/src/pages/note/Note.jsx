import {
  Link,
  useParams,
  useRouteLoaderData,
  useSubmit,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { DeleteIcon } from "@/assets/icons/DeleteIcon";
import { LoadingIcon } from "@/assets/icons/LoadingIcon";
import "./note.css";

function Note() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData();
  const { id } = useParams();
  const notes = useRouteLoaderData("notes");
  const filteredNote = notes?.find((note) => note.id === id);
  const isDeleting =
    navigation.state === "submitting" &&
    filteredNote &&
    navigation.formAction === `/notes/${filteredNote.id}`;

  const handleDeleteNote = (id) => {
    submit(null, { method: "delete", action: `/notes/${id}` });
  };

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
      {actionData?.error && <p className="error">{actionData.error}</p>}
      <div className="note-detail-header">
        <Link to=".." className="back-link">
          ← Back to Notes
        </Link>
        <div className="note-detail-actions-group">
          <span className="note-id-badge">ID: {filteredNote.id}</span>
          <button
            type="button"
            className="note-action-btn delete-btn"
            aria-label="Delete note"
            onClick={() => handleDeleteNote(filteredNote.id)}
            disabled={isDeleting}
          >
            {isDeleting ? <LoadingIcon /> : <DeleteIcon />}
          </button>
        </div>
      </div>
      <div className="note-detail-card">
        <p className="note-detail-text">{filteredNote.text}</p>
      </div>
    </div>
  );
}

export default Note;

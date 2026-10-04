import { Outlet } from "react-router-dom";

function NotesLayout() {
  return (
    <div className="notesLayout">
      <Outlet />
    </div>
  );
}

export default NotesLayout;

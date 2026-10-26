import { redirect } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { notesLoader, deleteNoteAction } from "@/utils/notes.utils";

import RootLayout from "@/layouts/RootLayout";
import NotesLayout from "@/layouts/NotesLayout";

import Notes from "@/pages/notes/Notes";
import Note from "@/pages/note/Note";
import AddNote from "@/pages/addNote/AddNote";
import NotFound from "@/pages/NotFound";
import RouteErrorFallback from "@/components/RouteErrorFallback";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
    errorElement: <RouteErrorFallback />,
    hydrateFallbackElement: <NotFound />,
    children: [
      {
        index: true,
        loader: () => redirect("notes"),
        Component: () => null,
      },
      {
        id: "notes",
        path: "notes",
        Component: NotesLayout,
        loader: notesLoader,
        action: deleteNoteAction,
        children: [
          {
            index: true,
            Component: Notes,
          },
          {
            id: "note",
            path: ":id",
            Component: Note,
            action: deleteNoteAction,
          },
          {
            id: "addNote",
            path: "addNote",
            Component: AddNote,
          },
        ],
      },
    ],
  },
]);

export default router;

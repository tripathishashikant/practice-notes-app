import { redirect } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import notesLoader from "@/utils/notes.utils";

import RootLayout from "@/layouts/RootLayout";
import NotesLayout from "@/layouts/NotesLayout";

import Notes from "@/pages/notes/Notes";
import Note from "@/pages/note/Note";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
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
        children: [
          {
            index: true,
            Component: Notes,
          },
          {
            id: "note",
            path: ":id",
            Component: Note,
          },
        ],
      },
    ],
  },
]);

export default router;

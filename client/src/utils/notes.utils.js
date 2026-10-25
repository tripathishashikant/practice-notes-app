import { redirect } from "react-router-dom";
import { fetchWithGet, fetchWithDelete } from "@/services/api.js";

async function notesLoader() {
  return await fetchWithGet({ path: "notes" });
}

async function deleteNoteAction({ params }) {
  console.log("enter deleteNoteAction ", params);

  const response = await fetchWithDelete({ path: `notes/${params.id}` });

  console.log(`Note ${response.id} deleted successfully`);

  return redirect("/");
}

export { notesLoader, deleteNoteAction };

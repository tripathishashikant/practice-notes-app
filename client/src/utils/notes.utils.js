import { redirect } from "react-router-dom";
import { fetchWithGet, fetchWithDelete } from "@/services/api.js";

async function notesLoader() {
  return await fetchWithGet({ path: "notes" });
}

async function deleteNoteAction({ request, params }) {
  let { id } = params;

  if (!id) {
    const formData = await request.formData();
    id = formData.get("id");
  }

  try {
    const response = await fetchWithDelete({ path: `notes/${id}` });

    console.log(`Note ${response.id} deleted successfully`);

    return redirect("/");
  } catch (error) {
    console.error("Failed to delete note:", error);

    return { error: "Failed to delete note. Please try again." };
  }
}

export { notesLoader, deleteNoteAction };

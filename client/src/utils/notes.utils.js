import { fetchWithGet } from "@/services/api.js";

async function notesLoader() {
  return await fetchWithGet({ path: "notes" });
}

export { notesLoader };

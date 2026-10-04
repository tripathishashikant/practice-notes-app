export default async function notesLoader() {
  try {
    const response = await fetch("http://localhost:5000/api/notes", {
      cache: "no-store",
    });

    if (!response.ok || !response.status === 304) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const notes = await response.json();

    return notes;
  } catch (error) {
    console.error("Error loading notes:", error);
  }
}

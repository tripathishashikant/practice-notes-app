import { useState } from "react";
import { fetchWithDelete } from "@/services/api";

function useDeleteNote({ onSuccess, onError } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteNote = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      await fetchWithDelete({ path: `notes/${id}` });

      if (onSuccess) onSuccess(id);
    } catch (err) {
      setError(err);

      if (onError) onError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteNote, isLoading, error };
}

export default useDeleteNote;

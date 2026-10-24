import { useState } from "react";
import { fetchWithDelete } from "@/services/api";

function useDeleteNote({ onSuccess, onError } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteNote = async ({ domain, version, path }) => {
    setIsLoading(true);
    setError(null);

    try {
      const deletedNote = await fetchWithDelete({
        path,
        version,
        domain,
      });

      if (onSuccess) onSuccess(deletedNote);
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

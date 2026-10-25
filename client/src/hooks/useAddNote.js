import { useState } from "react";
import { fetchWithPost } from "@/services/api";

function useAddNote({ onSuccess, onError } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNote = async ({ domain, version, path, note }) => {
    setIsLoading(true);
    setError(null);

    try {
      const addedNote = await fetchWithPost({
        path,
        version,
        domain,
        note,
      });

      if (onSuccess) onSuccess(addedNote);
    } catch (err) {
      setError(err);

      if (onError) onError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { addNote, isLoading, error };
}

export default useAddNote;

import { useState, useCallback } from "react";
import { fetchWithGet } from "@/services/api.js";

function useGetNotes({ onSuccess, onError } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNotes = useCallback(
    async ({ path, version, domain }) => {
      setIsLoading(true);
      setError(null);

      try {
        const notes = await fetchWithGet({ path, version, domain });

        if (onSuccess) onSuccess(notes);
        return notes;
      } catch (err) {
        setError(err);

        if (onError) onError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess, onError]
  );

  return { isLoading, error, getNotes };
}

export default useGetNotes;

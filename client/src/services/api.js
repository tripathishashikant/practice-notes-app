const defaultVersion = "v1";
const defaultDomain = "http://localhost:5000";

const buildApiUrl = ({
  path,
  version = defaultVersion,
  domain = defaultDomain,
}) => {
  return `${domain}/api/${version}/${path}`;
};

async function fetchWithGet({ domain, version, path } = {}) {
  const url = buildApiUrl({ domain, version, path });

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    throw error;
  }
}

async function fetchWithPost({ path, version, domain, note }) {
  const url = buildApiUrl({ path, version, domain });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: note }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newNote = await response.json();

    return newNote;
  } catch (error) {
    console.error("Failed to post data:", error);

    throw error;
  }
}

async function fetchWithDelete({ domain, version, path } = {}) {
  const url = buildApiUrl({ domain, version, path });

  try {
    const response = await fetch(url, { method: "DELETE" });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error deleting ${path}:`, error);

    throw error;
  }
}

export { fetchWithGet, fetchWithPost, fetchWithDelete };

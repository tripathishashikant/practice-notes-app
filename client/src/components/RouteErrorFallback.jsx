import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function RouteErrorFallback() {
  const error = useRouteError();

  let title = "Unexpected Error";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = error.data?.message || "The requested resource could not be found or an error occurred.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <h2>{title}</h2>
      <p style={{ color: "#666", margin: "1rem 0" }}>{message}</p>
      <Link
        to="/"
        style={{
          color: "#007bff",
          textDecoration: "underline",
          fontWeight: "500",
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default RouteErrorFallback;

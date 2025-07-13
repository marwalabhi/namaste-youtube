import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/Error/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<p>Oops! Something went wrong</p>}>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </ErrorBoundary>,
);

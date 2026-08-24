import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DemoHandler } from "./DemoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DemoHandler>
      <App />
    </DemoHandler>
  </StrictMode>,
);

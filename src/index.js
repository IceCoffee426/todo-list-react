import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

console.log("React app go!");

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

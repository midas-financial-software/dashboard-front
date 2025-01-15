import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exists");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

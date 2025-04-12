import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import config from "./config/envConfig.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename={config.BASE_PATH}>
      <App />
    </HashRouter>
  </StrictMode>
);

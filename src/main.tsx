import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SlideSettingsProvider } from "./SlideSettingsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SlideSettingsProvider>
      <App />
    </SlideSettingsProvider>
  </StrictMode>,
);

import "./App.css";
import { useRef } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { SlidePreview } from "./SlidePreview/SlidePreview";
import { Settings } from "./SlideSettings/SlideSettings";
import { SlideSettingsProvider } from "./SlideSettings/SlideSettingsProvider";

function App() {
  const slideRef = useRef<HTMLDivElement>(null);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <SlideSettingsProvider>
        <div className="p-9 flex  gap-2.5">
          <Settings previewRef={slideRef} />
          <SlidePreview previewRef={slideRef} />
        </div>
      </SlideSettingsProvider>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { SlidePreview } from "./SlidePreview/SlidePreview";
import { Settings } from "./SlideSettings/SlideSettings";
import { SlideSettingsProvider } from "./SlideSettings/SlideSettingsProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <SlideSettingsProvider>
        <div className="p-9 flex items-center gap-2.5 bg-slate-300">
          <Settings />
          <SlidePreview />
        </div>
      </SlideSettingsProvider>
    </ThemeProvider>
  );
}

export default App;

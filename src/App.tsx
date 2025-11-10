import "./App.css";
import { SlidePreview } from "./SlidePreview";
import { Settings } from "./SlideSettings";
import { SlideSettingsProvider } from "./SlideSettingsProvider";

function App() {
  return (
    <SlideSettingsProvider>
      <div className="p-9 flex flex-col items-center gap-2.5 bg-slate-300">
        <Settings />
        <SlidePreview />
      </div>
    </SlideSettingsProvider>
  );
}

export default App;

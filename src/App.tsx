import "./App.css";
import { SlidePreview } from "./SlidePreview/SlidePreview";
import { Settings } from "./SlideSettings/SlideSettings";
import { SlideSettingsProvider } from "./SlideSettings/SlideSettingsProvider";

function App() {
  return (
    <SlideSettingsProvider>
      <div className="p-9 flex flex items-center gap-2.5 bg-slate-300">
        <Settings />
        <SlidePreview />
      </div>
    </SlideSettingsProvider>
  );
}

export default App;

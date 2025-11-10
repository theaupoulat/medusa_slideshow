import "../App.css";
import { GeneralSlideControls } from "./components/GeneralSlideControls.tsx";
import { ScreenshotContentControls } from "./components/ScreenshotContentControls.tsx";

export function Settings({}: {}) {
  return (
    <div id="slider-content" className="w-3xs flex flex-col gap-3">
      <GeneralSlideControls />
      <ScreenshotContentControls />
    </div>
  );
}

import "../App.css";
import { GeneralSlideControls } from "./components/GeneralSlideControls.tsx";
import { MediaContentControls } from "./components/MediaContentControls.tsx";
import { ScreenshotContentControls } from "./components/ScreenshotContentControls.tsx";

export function Settings({}: {}) {
  return (
    <div id="slider-content" className="w-3xs flex flex-col gap-6">
      <GeneralSlideControls />
      <MediaContentControls />
      <ScreenshotContentControls />
    </div>
  );
}

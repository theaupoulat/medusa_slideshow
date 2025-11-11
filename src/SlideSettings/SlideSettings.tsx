import type { RefObject } from "react";
import "../App.css";
import { ExportSlide } from "./components/ExportSlide.tsx";
import { GeneralSlideControls } from "./components/GeneralSlideControls.tsx";
import { MediaContentControls } from "./components/MediaContentControls.tsx";
import { ScreenshotContentControls } from "./components/ScreenshotContentControls.tsx";

export function Settings({
  previewRef,
}: {
  previewRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div id="slider-content" className="w-3xs flex flex-col gap-6">
      <GeneralSlideControls />
      <ScreenshotContentControls />
      <MediaContentControls />
      <ExportSlide previewRef={previewRef} />
    </div>
  );
}

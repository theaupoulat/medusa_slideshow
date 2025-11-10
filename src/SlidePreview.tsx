import html2canvas from "html2canvas-pro";
import { useRef } from "react";
import { isColorDark } from "./colors";
import { Button } from "./components/ui/button";
import { useSettings } from "./SlideSettingsProvider";

export const SlidePreview = () => {
  const settings = useSettings();
  const slideRef = useRef<HTMLDivElement>(null);

  if (!settings) {
    return;
  }
  const handleCapture = async () => {
    if (!slideRef.current) {
      return;
    }

    const canvas = await html2canvas(slideRef.current, { allowTaint: true });
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "screenshot.png";
    link.click();
  };

  const {
    slideColor,
    textPosition,
    contentAngle,
    contentPosition,
    slideTitle,
    mediaName,
  } = settings;
  console.warn("DEBUGPRINT[4]: SlidePreview.tsx:35: settings=", settings);

  const textColor = isColorDark(slideColor) ? "#FFFFFF" : "#000000";
  return (
    <>
      <Button onClick={handleCapture}>Export to PNG</Button>
      <div
        ref={slideRef}
        id="slide"
        className="overflow-clip m-auto w-[800px] h-[1000px] bg-sky-500 flex flex-col items-center justify-between pt-5 "
        style={{
          backgroundColor: slideColor,
        }}
      >
        <div id="header" className="flex flex-col items-center gap-2">
          <div
            id="title"
            style={{
              color: textColor,
            }}
            className="uppercase text-4xl font-semibold mt-11"
          >
            {slideTitle}
          </div>
          <div
            id="line"
            style={{
              borderColor: textColor,
            }}
            className="border-b-2 w-[400px]"
          ></div>
        </div>

        <div
          id="content"
          className=" flex flex-col items-center"
          style={{
            transform: `rotate(${-90 - contentAngle}deg) translateY(${contentPosition}px)`,
          }}
        >
          <div
            id="media_name"
            className="media_name"
            style={{
              transform: `translateX(${textPosition}px)`,
              WebkitTextStrokeColor: textColor,
            }}
          >
            {mediaName}
          </div>
          <div
            id="screenshot"
            className=" flex items-center justify-center bg-purple-500 w-[1100px] h-[575px] rounded-2xl overflow-hidden"
          >
            <img
              src={settings.screenshotSrc}
              alt={"screenshot"}
              className="w-xl h-auto transform rotate-90 translate-x-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

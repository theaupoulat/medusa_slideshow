import { type RefObject } from "react";
import { isColorDark } from "../helpers/colors";
import { useSettings } from "../SlideSettings/SlideSettingsProvider";

export const SlidePreview = ({
  previewRef,
}: {
  previewRef: RefObject<HTMLDivElement | null>;
}) => {
  const settings = useSettings();

  if (!settings) {
    return;
  }

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
      <div
        ref={previewRef}
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
            className="w-[600px] uppercase text-4xl font-semibold mt-6 text-center"
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

          {settings.screenshotSrc.length > 0 ? (
            <div
              id="screenshot"
              className=" flex items-center bg-transparent justify-center w-[1100px] h-[575px] rounded-2xl overflow-hidden shadow-[11px_12px_12.7px_4px_rgba(0,0,0,0.07)]"
            >
              <img
                src={settings.screenshotSrc}
                alt={"screenshot"}
                className="w-xl h-auto transform rotate-90 "
                style={{
                  transform: `translateY(${settings.screenshotVerticalCorrection}px)`,
                }}
              />
            </div>
          ) : (
            <div
              id="screenshot"
              className="bg-violet-500 flex items-center justify-center w-[1100px] h-[575px] rounded-2xl overflow-hidden shadow-[11px_12px_12.7px_4px_rgba(0,0,0,0.07)]"
            >
              <span className="text-white transform rotate-90">
                Ajouter un screenshot
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

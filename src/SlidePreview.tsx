import { isColorDark } from "./colors";
import { useSettings } from "./SlideSettingsProvider";

export const SlidePreview = () => {
  const settings = useSettings();

  if (!settings) {
    return;
  }

  const { slideColor, textPosition, contentAngle, contentPosition } = settings;

  const textColor = isColorDark(slideColor) ? "#FFFFFF" : "#000000";
  return (
    <div
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
          zyed et bouna: 20 ans
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
          a la tv sur ma tv
        </div>
        <div
          id="screenshot"
          className="bg-purple-500 w-[900px] h-[450px] rounded-2xl"
        ></div>
      </div>
    </div>
  );
};

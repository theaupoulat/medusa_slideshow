import "./App.css";
import { isColorDark } from "./colors";
import { Settings } from "./SlideSettings";
import { useSettings } from "./SlideSettingsProvider";

function App() {
  const settings = useSettings();

  if (!settings) {
    return;
  }

  const { slideColor, textPosition, contentAngle, contentPosition } = settings;

  const textColor = isColorDark(slideColor) ? "#FFFFFF" : "#000000";
  return (
    <div className="p-9 flex flex-col items-center gap-2.5 bg-slate-300">
      <Settings />
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
            className=" uppercase text-4xl"
            style={{
              transform: `translateX(${textPosition}px)`,
              color: textColor,
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
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Slider } from "./components/ui/slider";

function App() {
  const [textPosition, setTextPosition] = useState(0);
  const [contentAngle, setContentAngle] = useState(0);
  const [contentPosition, setContentPosition] = useState(0);
  return (
    <div className="p-9 flex flex-col items-center gap-2.5">
      <div id="slider-content" className="w-3xs">
        <span> Adjust text position: {textPosition} </span>
        <Slider
          min={-100}
          max={100}
          defaultValue={[0]}
          onValueChange={(e) => setTextPosition(e[0])}
        />

        <span> Adjust content angle: {contentAngle} </span>
        <Slider
          min={-100}
          max={100}
          defaultValue={[0]}
          onValueChange={(e) => setContentAngle(e[0])}
        />

        <span> Adjust content position: {contentPosition} </span>
        <Slider
          min={-100}
          max={100}
          defaultValue={[0]}
          onValueChange={(e) => setContentPosition(e[0])}
        />
      </div>
      <div
        id="slide"
        className="overflow-clip m-auto w-[800px] h-[1000px] bg-sky-500 flex flex-col items-center justify-between pt-5 "
      >
        <div id="title-content" className="flex flex-col items-center gap-2">
          <div id="text" className="uppercase text-4xl font-semibold mt-11">
            zyed et bouna: 20 ans
          </div>
          <div id="line" className="border-b-2 w-[400px]"></div>
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
            className="uppercase text-4xl bg-red-300"
            style={{
              transform: `translateX(${textPosition}px)`,
            }}
          >
            a la tv sur ma tv
          </div>
          <div
            id="screenshot"
            className="bg-green-400 w-[900px] h-[450px] rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;

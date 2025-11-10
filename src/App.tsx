import { useState } from "react";
import "./App.css";
import { slideColors } from "./colors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

const buildSelectOptions = () => {
  return slideColors.map(({ hex, name }) => (
    <SelectItem value={hex}>
      <div
        className="rounded-md w-[12px] h-[12px]"
        style={{ backgroundColor: hex }}
      ></div>{" "}
      {name}
    </SelectItem>
  ));
};

function App() {
  const [textPosition, setTextPosition] = useState(0);
  const [contentAngle, setContentAngle] = useState(0);
  const [contentPosition, setContentPosition] = useState(0);
  const [slideColor, setSlideColor] = useState(slideColors[0].hex);

  const selectOptions = buildSelectOptions();

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
        <span> Pick color </span>
        <Select onValueChange={(e) => setSlideColor(e)}>
          <SelectTrigger className="w-[280px]" value={slideColor}>
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent>{...selectOptions}</SelectContent>
        </Select>
      </div>
      <div
        id="slide"
        className="overflow-clip m-auto w-[800px] h-[1000px] bg-sky-500 flex flex-col items-center justify-between pt-5 "
        style={{
          backgroundColor: slideColor,
        }}
      >
        <div id="title" className="flex flex-col items-center gap-2">
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
            className="bg-purple-500 w-[900px] h-[450px] rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;

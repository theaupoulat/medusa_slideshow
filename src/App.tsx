import { useState } from "react";
import "./App.css";

function App() {
  const [textPosition, setTextPosition] = useState(0);
  return (
    <div className="p-9">
      <div
        id="slide"
        className="m-auto w-[800px] h-[1000px] bg-sky-500 flex flex-col items-center justify-between pt-5 "
      >
        <div id="title" className="uppercase text-4xl font-semibold">
          zyed et bouna: 20 après
        </div>
        <div
          id="content"
          className=" flex flex-col items-center transform -rotate-93"
        >
          <div id="media_name" className="uppercase text-4xl">
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

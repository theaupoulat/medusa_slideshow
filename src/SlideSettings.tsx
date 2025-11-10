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
import { useSettings, useSlideSettingsDispatch } from "./SlideSettingsProvider";

const buildSelectOptions = () => {
  return slideColors.map(({ hex, name }) => (
    <SelectItem value={hex}>
      <div
        className="rounded-md w-3 h-3"
        style={{ backgroundColor: hex }}
      ></div>{" "}
      {name}
    </SelectItem>
  ));
};
export function Settings({}: {}) {
  const selectOptions = buildSelectOptions();
  const settings = useSettings();
  const dispatchSettings = useSlideSettingsDispatch();

  if (!dispatchSettings) {
    return;
  }

  return (
    <div id="slider-content" className="w-3xs">
      <span> Adjust text position: {settings?.textPosition} </span>
      <Slider
        min={-100}
        max={100}
        defaultValue={[0]}
        onValueChange={(e) =>
          dispatchSettings({
            type: "changeTextPosition",
            newTextPosition: e[0],
          })
        }
      />

      <span> Adjust content angle: {settings?.contentAngle} </span>
      <Slider
        min={-100}
        max={100}
        defaultValue={[0]}
        onValueChange={(e) =>
          dispatchSettings({
            type: "changeAnglePosition",
            newAnglePosition: e[0],
          })
        }
      />

      <span> Adjust content position: {settings?.contentPosition} </span>
      <Slider
        min={-100}
        max={100}
        defaultValue={[0]}
        onValueChange={(e) =>
          dispatchSettings({
            type: "changeContentPosition",
            newContentPosition: e[0],
          })
        }
      />
      <span> Pick color </span>
      <Select
        onValueChange={(e) =>
          dispatchSettings({
            type: "changeSlideColor",
            newSlideColor: e,
          })
        }
      >
        <SelectTrigger className="w-[280px]" value={settings?.slideColor}>
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>{...selectOptions}</SelectContent>
      </Select>
    </div>
  );
}

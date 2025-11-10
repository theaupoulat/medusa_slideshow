import "./App.css";
import { slideColors } from "./colors";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { ImageUploader } from "./ImageUploader";
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

      <span>
        Adjust screenshot vertical position:{" "}
        {settings?.screenshotVerticalCorrection}{" "}
      </span>
      <Slider
        min={-100}
        max={100}
        defaultValue={[0]}
        onValueChange={(e) =>
          dispatchSettings({
            type: "changeScreenshotVerticalCorretion",
            newScreenshotVerticalCorrection: e[0],
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

      <span> Slide title </span>
      <Input
        type="text"
        value={settings?.slideTitle}
        onChange={(e) =>
          dispatchSettings({
            type: "changeSlideTitle",
            newSlideTitle: e.target.value,
          })
        }
      />

      <span>Media name</span>
      <Input
        type="text"
        value={settings?.mediaName}
        onChange={(e) =>
          dispatchSettings({
            type: "changeMediaName",
            newMediaName: e.target.value,
          })
        }
      />

      <ImageUploader />
    </div>
  );
}

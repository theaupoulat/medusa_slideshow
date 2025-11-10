import "../App.css";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Textarea } from "../components/ui/textarea";
import { slideColors } from "../helpers/colors";
import { GeneralSlideControls } from "./components/GeneralSlideControls.tsx";
import { ImageUploader } from "./components/ImageUploader.tsx";
import {
  useSettings,
  useSlideSettingsDispatch,
} from "./SlideSettingsProvider.tsx";

export function Settings({}: {}) {
  const settings = useSettings();
  const dispatchSettings = useSlideSettingsDispatch();

  if (!dispatchSettings) {
    return;
  }

  return (
    <div id="slider-content" className="w-3xs">
      <GeneralSlideControls />
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
      <ImageUploader />
    </div>
  );
}

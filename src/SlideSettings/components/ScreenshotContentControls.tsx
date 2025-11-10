import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  useSettings,
  useSlideSettingsDispatch,
} from "../SlideSettingsProvider";
import { ImageUploader } from "./ImageUploader";

export const ScreenshotContentControls = () => {
  const settings = useSettings();

  const dispatchSettings = useSlideSettingsDispatch();

  if (!dispatchSettings) {
    return;
  }

  return (
    <div>
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
};

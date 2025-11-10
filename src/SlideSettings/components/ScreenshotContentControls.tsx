import { Separator } from "@/components/ui/separator";
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
    <div className="flex flex-col gap-3">
      <Separator />
      Control du Screenshot
      <div className="flex flex-col gap-2.5">
        <ImageUploader />
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
      </div>
    </div>
  );
};

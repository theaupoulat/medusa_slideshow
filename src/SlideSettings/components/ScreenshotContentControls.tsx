import { Label } from "@/components/ui/label";
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

  if (!dispatchSettings || !settings) {
    return;
  }

  return (
    <div className="flex flex-col gap-3">
      <Separator />
      Control du Screenshot
      <div className="flex flex-col gap-2.5">
        <ImageUploader />

        <span></span>
        <Label htmlFor="content-angle">
          Ajustement angle du contenu: {settings.contentAngle}
        </Label>
        <Slider
          id="content-angle"
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

        <Label htmlFor="content-position">
          Ajustement position horizontale du contenu: {settings.contentPosition}
        </Label>
        <Slider
          id="content-position"
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

        <Label htmlFor="screenshot-vertical-correction">
          Ajustement verticale du screenshot dans l'insert:{" "}
          {settings.screenshotVerticalCorrection}{" "}
        </Label>
        <Slider
          id="screenshot-vertical-correction"
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

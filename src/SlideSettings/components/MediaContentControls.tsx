import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  useSettings,
  useSlideSettingsDispatch,
} from "../SlideSettingsProvider";

export const MediaContentControls = () => {
  const settings = useSettings();

  const dispatchSettings = useSlideSettingsDispatch();

  if (!dispatchSettings || !settings) {
    return;
  }

  return (
    <div className="flex flex-col gap-3">
      <Separator />
      Média
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="media_name">Nom du média</Label>
        <Input
          id="media_name"
          type="text"
          value={settings.mediaName}
          onChange={(e) =>
            dispatchSettings({
              type: "changeMediaName",
              newMediaName: e.target.value,
            })
          }
        />
        <Label htmlFor="text-position">
          Position du nom: {settings.textPosition}
        </Label>
        <Slider
          id="text-position"
          min={-200}
          max={250}
          defaultValue={[0]}
          onValueChange={(e) =>
            dispatchSettings({
              type: "changeTextPosition",
              newTextPosition: e[0],
            })
          }
        />
      </div>
    </div>
  );
};

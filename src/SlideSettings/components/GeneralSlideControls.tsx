import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { slideColors } from "@/helpers/colors";
import {
  useSettings,
  useSlideSettingsDispatch,
} from "../SlideSettingsProvider";

const buildSelectOptions = () => {
  return slideColors.map(({ hex, name }) => (
    <SelectItem value={hex}>
      <div
        className="rounded-md w-3 h-3"
        style={{ backgroundColor: hex }}
      ></div>
      {name}
    </SelectItem>
  ));
};

const selectOptions = buildSelectOptions();

export const GeneralSlideControls = () => {
  const settings = useSettings();

  const dispatchSettings = useSlideSettingsDispatch();

  if (!dispatchSettings || !settings) {
    return;
  }

  return (
    <div className="flex flex-col gap-3">
      <Separator />
      Général
      <div className="flex flex-col gap-2.5">
        <Label htmlFor="slide-title">Titre</Label>
        <Input
          id="slide-title"
          value={settings.slideTitle}
          onChange={(e) =>
            dispatchSettings({
              type: "changeSlideTitle",
              newSlideTitle: e.target.value,
            })
          }
        />
        <Label htmlFor="color-picker">Couleur</Label>
        <Select
          onValueChange={(e) =>
            dispatchSettings({
              type: "changeSlideColor",
              newSlideColor: e,
            })
          }
          value={settings.slideColor}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a color" id="color-picker" />
          </SelectTrigger>
          <SelectContent>{...selectOptions}</SelectContent>
        </Select>
      </div>
    </div>
  );
};

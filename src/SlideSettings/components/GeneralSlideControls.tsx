import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
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
      ></div>{" "}
      {name}
    </SelectItem>
  ));
};

const selectOptions = buildSelectOptions();

export const GeneralSlideControls = () => {
  const settings = useSettings();

  const dispatchSettings = useSlideSettingsDispatch();

  if (!dispatchSettings) {
    return;
  }

  return (
    <div>
      <span> Slide title </span>
      <Textarea
        value={settings?.slideTitle}
        onChange={(e) =>
          dispatchSettings({
            type: "changeSlideTitle",
            newSlideTitle: e.target.value,
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

      <Separator />
    </div>
  );
};

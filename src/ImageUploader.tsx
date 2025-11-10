import { type ChangeEvent } from "react";
import { toast } from "sonner";
import { Input } from "./components/ui/input";
import { useSlideSettingsDispatch } from "./SlideSettingsProvider";

export const ImageUploader = () => {
  const dispatchSettings = useSlideSettingsDispatch();
  if (!dispatchSettings) {
    return;
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target?.result || typeof event.target?.result === "object") {
        toast.error("It seems no file was loaded. Try again");
        return;
      }
      try {
        toast.success("File uploaded" + file.name);
        dispatchSettings({
          type: "changeScreenshotSource",
          newScreenshotSource: event.target?.result,
        });
      } catch (err) {
        if (err instanceof Error) {
          toast.error("Error reading file: " + err.message);
        }
      }
    };

    reader.onerror = () => {
      toast.error("Error reading file");
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <label className="block mb-4">
          <span className="text-gray-700 font-medium mb-2 block">
            Choose an image file to import:
          </span>
          <Input type="file" onChange={handleFileChange} accept="image/*" />
        </label>
      </div>
    </div>
  );
};

import { type ChangeEvent } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "../../components/ui/input";
import { useSlideSettingsDispatch } from "../SlideSettingsProvider";

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
        toast.error("Le fichier n'a pas pu être lu. Essayez à nouveau");
        return;
      }
      try {
        toast.success("Fichier téléversé: " + file.name);
        dispatchSettings({
          type: "changeScreenshotSource",
          newScreenshotSource: event.target?.result,
        });
      } catch (err) {
        if (err instanceof Error) {
          toast.error(
            "Une erreur s'est produite pendant le téléversement du fichier: " +
              err.message,
          );
        }
      }
    };

    reader.onerror = () => {
      toast.error(
        "Une erreur s'est produite pendant le téléversement du fichier",
      );
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Label htmlFor="screenshot"> Screenshot </Label>
      <Input
        id="screenshot"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

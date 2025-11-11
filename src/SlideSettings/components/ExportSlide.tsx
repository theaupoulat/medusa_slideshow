import html2canvas from "html2canvas-pro";
import type { RefObject } from "react";
import { Button } from "@/components/ui/button";

export const ExportSlide = ({
  previewRef,
}: {
  previewRef: RefObject<HTMLDivElement | null>;
}) => {
  const handleCapture = async () => {
    if (!previewRef.current) {
      return;
    }

    const canvas = await html2canvas(previewRef.current, { allowTaint: true });
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "screenshot.png";
    link.click();
  };
  return <Button onClick={handleCapture}>Exporter (PNG)</Button>;
};

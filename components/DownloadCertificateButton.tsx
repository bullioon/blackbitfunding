"use client";

import { toPng } from "html-to-image";

type Props = {
  targetId: string;
  fileName: string;
};

export default function DownloadCertificateButton({
  targetId,
  fileName,
}: Props) {
  const handleDownload = async () => {
    const node = document.getElementById(targetId);
    if (!node) return;

    try {
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 3,
      });

      const link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("PNG download failed:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
    >
      Download PNG
    </button>
  );
}
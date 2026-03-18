"use client";

import * as htmlToImage from "html-to-image";

export default function CertificateActions({
  verifyUrl,
  fileName = "blackbit-certificate",
}: {
  verifyUrl: string;
  fileName?: string;
}) {
  const handleDownloadPng = async () => {
    try {
      const node = document.getElementById("certificate-root");
      if (!node) return;

      const dataUrl = await htmlToImage.toPng(node, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#050505",
      });

      const link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error(error);
      alert("Could not export image");
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "BlackBit Certificate",
          text: "Verify this certificate",
          url: verifyUrl,
        });
      } else {
        await navigator.clipboard.writeText(verifyUrl);
        alert("Link copied");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-6 flex flex-wrap gap-3 print:hidden">
      <button
        onClick={handleDownloadPng}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/[0.08]"
      >
        Download PNG
      </button>

      <button
        onClick={handleShare}
        className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/[0.08]"
      >
        Share
      </button>
    </div>
  );
}
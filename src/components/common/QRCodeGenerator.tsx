// src/components/QRCodeGenerator.tsx
import { QRCodeCanvas } from "qrcode.react";

interface QRCodeGeneratorProps {
  url?: string; // Optional default URL
  title?: string;
  size?: number;
  level?: "L" | "M" | "Q" | "H"; // Error correction level
}

export default function QRCodeGenerator({
  url = "https://example.com",
  title = "Scan this QR Code",
  size = 280,
  level = "M", // High error correction (recommended)
}: QRCodeGeneratorProps) {
  const downloadQR = () => {
    const canvas = document.getElementById("qr-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `qrcode-${new Date()
      .toISOString()
      .slice(0, 10)}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {title}
      </h2>

      {/* QR Code Display */}
      <div className="flex justify-center mb-8 bg-gray-50 p-8 rounded-xl">
        <div className="p-4 bg-white rounded-2xl shadow-sm">
          <QRCodeCanvas
            id="qr-canvas"
            value={url}
            size={size}
            level={level}
            includeMargin={true}
            fgColor="#1f2937" // Dark gray
            bgColor="#ffffff"
          />
          <div className="text-center text-sm text-gray-500 mb-6">
            <span className="font-mono break-all">
              <a href={url} target="_blank">
                {url}
              </a>
            </span>
          </div>
        </div>
        {/* Info */}
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQR}
        className="w-full py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
      >
        ⬇️ Download QR Code as PNG
      </button>
    </div>
  );
}

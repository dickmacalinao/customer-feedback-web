import QRCodeGenerator from "../../components/common/QRCodeGenerator";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <QRCodeGenerator url="http://localhost:5173/feedback" title="QR Code" />
    </div>
  );
}

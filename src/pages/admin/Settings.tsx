import { useParams } from "react-router-dom";
import QRCodeGenerator from "../../components/common/QRCodeGenerator";

export default function Settings() {
  const { customerSlug } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <QRCodeGenerator
        url={`http://localhost:5173/${customerSlug}/feedback`}
        title="QR Code"
      />
    </div>
  );
}

import { QRCodeCanvas } from "qrcode.react";
import {Share } from "lucide-react";
import { Download } from "@mui/icons-material";
const QrGenerator: React.FC<{
  url: string;
  qrCodeSize: number;
  fileName: string;
}> = (props) => {
  console.log(props.url);
  const handleDownloadClick = () => {
    const canvas = document.querySelector("canvas");
    const image = canvas?.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = image ?? "";
    link.download = props.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareClick = () => {
    const canvas = document.querySelector("canvas");
    canvas?.toBlob(async (blob) => {
      if (!blob) return;

      const data = {
        files: [
          new File([blob], props.fileName + ".png", {
            type: blob.type,
          }),
        ],
        title: props.fileName,
        text: "QR Code",
      };

      if (navigator.canShare(data)) {
        await navigator.share(data);
      }
    });
  };
  return (
    <div>
      <QRCodeCanvas
        className="block mx-auto mb-5 display-none"
        value={props.url}
        size={props.qrCodeSize}
        bgColor={""}
        fgColor={"#ffffff"}
        level={"H"}
        includeMargin={false}
        style={{ width: "80%", height: "80%" }}
      />

      <div className="flex justify-center gap-4">
        <button
          onClick={handleDownloadClick}
          className="text-white bg-black p-2 rounded-sm"
        >
          Download <Download/>
        </button>
        <button
          onClick={handleShareClick}
          className="text-black bg-transparent border border-black p-2 rounded-sm flex"
        >
          Share QR Code
          <Share className="ml-1 font-thin" />
        </button>
      </div>
    </div>
  );
};

export default QrGenerator;

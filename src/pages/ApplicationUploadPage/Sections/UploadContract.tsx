import React from "react";
import useContractUploadStore from "../../../stores/ContractStore";
import { File, Upload } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useUiControlStore } from "../../../stores/UiControlStore";

const UploadContract = () => {
  const { file, setFile } = useContractUploadStore();
  const { setStep } = useUiControlStore();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile);
    }
  };

  return (
    <div className="space-y-4 text-center">
      <div
        className={`border-2 border-dashed border-[#2D3348] rounded-lg p-8 text-center transition-all duration-300 ${
          file ? "bg-[#2D3348]/10" : "hover:bg-[#2D3348]/5"
        }`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {!file ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#2D3348] rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-[#D6BCFA]" />
            </div>
            <div>
              <p className="text-lg font-semibold">
                Drag and drop your contract here
              </p>
              <p className="text-[#7E69AB] text-sm mt-2">
                or click to browse files
              </p>
            </div>
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
              id="file-upload"
            />
            <Button
              variant="outline"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              Browse Files
            </Button>
          </div>
        ) : (
          <div className="space-y-4 animate-slideUp">
            <div className="w-16 h-16 mx-auto bg-[#9b87f5] rounded-full flex items-center justify-center">
              <File className="w-8 h-8 text-white" />
            </div>
            <p className="text-lg font-semibold">{file.name}</p>
            <p className="text-[#7E69AB] text-sm">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}
      </div>

      <Button
        className="mt-8 w-full max-w-xs bg-[#D6BCFA] text-[#2D3348]"
        disabled={!file}
        onClick={() => setStep(2)}
      >
        Next
      </Button>
    </div>
  );
};

export default UploadContract;

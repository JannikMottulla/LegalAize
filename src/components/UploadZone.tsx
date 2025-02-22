import React, { useCallback, useState } from "react";
import { Upload } from "lucide-react";
import { cn } from "../lib/utils";

interface UploadZoneProps {
  onFileSelect: (files: FileList) => void;
}

export function UploadZone({ onFileSelect }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFileSelect(e.dataTransfer.files);
      }
    },
    [onFileSelect]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files) {
        onFileSelect(e.target.files);
      }
    },
    [onFileSelect]
  );

  return (
    <div
      className={cn(
        "border p-4 rounded-2xl border-dashed bg-violet-950 upload-zone",
        isDragging && "dragging"
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleChange}
        accept=".pdf,application/pdf"
        multiple
      />
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="p-4 bg-[hsl(271_81%_24%)] rounded-full">
          <Upload className="w-8 h-8 text-[hsl(267_100%_70%)]" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Upload Contracts</h3>
          <p className="text-sm text-[hsl(271_81%_84%)] max-w-[18rem]">
            Drag and drop your PDF contracts here or click to browse
          </p>
        </div>
      </div>
    </div>
  );
}

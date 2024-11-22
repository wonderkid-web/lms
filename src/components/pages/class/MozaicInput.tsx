"use client"
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function MozaicInput() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);

  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Lampirkan Jawaban Kamu
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Format yang diterima: PDF, DOCX
          </p>
        </div>

        <div className="p-4">
          <Dropzone
            onChange={updateFiles}
            value={files}
            accept=".pdf,.docx"
            maxFiles={5}
            maxFileSize={5 * 1024 * 1024} // 5MB
            label="Drag & drop file atau klik untuk memilih"
            uploadConfig={{
              autoUpload: false
            }}
            className="min-h-[200px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          />
        </div>

        {files.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-b-lg">
            <div className="space-y-3">
              {files.map((file: ExtFile) => (
                <FileMosaic
                  key={file.id}
                  {...file}
                  onDelete={removeFile}
                  info
                  preview
                  className="border border-gray-200 rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
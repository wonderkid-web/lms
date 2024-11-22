"use client"
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function MozaicInput() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  return (
   <section>
    <h1 className="text-xl text-primary">Lampirkan Jawaban kamu disini</h1>
    <p className="text-sm">input dibawah hanya menerima file berekstensi .pdf, .docx</p>
     <Dropzone
        onChange={updateFiles}
        value={files}
        accept="pdf, docx"
        maxFileSize={1 * 1024 * 1024}
        maxFiles={2}
        //cleanFiles
        actionButtons={{ position: "before"}}
    >
      {files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
    </Dropzone>
   </section>
  );
}
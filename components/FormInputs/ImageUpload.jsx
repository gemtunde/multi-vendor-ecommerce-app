"use client";

import { useDropzone } from "react-dropzone";
import { Loader2, UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";
import toast from "react-hot-toast";

export default function ImageUpload({ onChange, value }) {
  const [preview, setPreview] = useState(value);
  const [isUploading, setIsUploading] = useState(false);
  const { startUpload } = useUploadThing("imageUploader");

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        setIsUploading(true);
        const res = await startUpload(acceptedFiles);
        if (res?.[0]?.url) {
          setPreview(res[0].url);
          onChange?.(res[0].url);
          console.log("RESPoNSE ToAST<<<<==>>>>", res);
          toast.success("image uploaded successfully");
        }
      } catch (error) {
        console.error("Upload failed:", error);
        toast.error("Failed to upload image");
      } finally {
        setIsUploading(false);
      }
    },
    [onChange, startUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".gif"],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`p-8 border-2 border-dashed rounded-xl cursor-pointer transition-all
        ${isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground/20"}
        ${preview ? "aspect-square" : "min-h-[200px]"}`}
    >
      <input {...getInputProps()} />
      {isUploading ? (
        <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <Loader2 className="w-12 h-12 animate-spin" />
          <p className="font-medium">Uploading...</p>
        </div>
      ) : preview ? (
        <div className="relative w-full h-full">
          <Image
            src={preview}
            alt="Upload preview"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <UploadCloud className="w-12 h-12" />
          <div className="text-center">
            <p className="font-medium">
              Drop your image here, or click to browse
            </p>
            <p className="text-sm">Maximum file size: 4MB</p>
          </div>
        </div>
      )}
      {/* {preview ? (
        <div className="relative w-full h-full">
          <Image
            src={preview}
            alt="Upload preview"
            className="object-cover rounded-lg"
            fill
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <UploadCloud className="w-12 h-12" />
          <div className="text-center">
            <p className="font-medium">
              Drop your image here, or click to browse
            </p>
            <p className="text-sm">Maximum file size: 4MB</p>
          </div>
        </div>
      )} */}
    </div>
  );
}

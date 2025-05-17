"use client";
import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

// Mark this file as a client component since it's generating client-side components

export const { UploadButton, UploadDropzone, Uploader } = generateComponents();

export const { useUploadThing } = generateReactHelpers();

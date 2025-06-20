import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:====>", metadata.userId);
      console.log("file url=====<<<<", file.url);
      return { uploadedBy: metadata.userId };
    }),
  bannerImageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:====>", metadata.userId);
      console.log("file url=====<<<<", file.url);
      return { uploadedBy: metadata.userId };
    }),
  marketImageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:====>", metadata.userId);
      console.log("file url=====<<<<", file.url);
      return { uploadedBy: metadata.userId };
    }),
  productImageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:====>", metadata.userId);
      console.log("file url=====<<<<", file.url);
      return { uploadedBy: metadata.userId };
    }),
  communityImageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:====>", metadata.userId);
      console.log("file url=====<<<<", file.url);
      return { uploadedBy: metadata.userId };
    }),
};

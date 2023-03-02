import React, { useState } from "react";
import { ImageUrlAndFileType } from "../components";
import { imagekit } from "../services/imagekit";

export function useUploadPhoto(
  initialPhoto: string,
  callback: (url: string) => void
): [ImageUrlAndFileType, React.Dispatch<ImageUrlAndFileType>, boolean, () => void, () => void] {
  const [currentPhoto, setPhoto] = useState<ImageUrlAndFileType>({
    url: initialPhoto,
    file: null,
  });
  const [isPhotoUploading, setIsPhotoUploading] = useState(false);

  const savePhoto = () => {
    if (!currentPhoto.file && !currentPhoto.url) {
      callback("");
      return;
    }
    if (!currentPhoto.file) {
      return;
    }
    setIsPhotoUploading(true);
    imagekit.upload(
      {
        file: currentPhoto.file,
        fileName: "collectory-avatars",
      },
      function (err, result) {
        setIsPhotoUploading(false);
        if (err) {
          return;
        }
        callback(result?.url || "");
      }
    );
  };

  const cleanCurrentPhoto = () => {
    setPhoto({
      url: "",
      file: null,
    });
  };
  return [currentPhoto, setPhoto, isPhotoUploading, cleanCurrentPhoto, savePhoto];
}

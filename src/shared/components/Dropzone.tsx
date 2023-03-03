import React, { useCallback, useMemo } from "react";
import { Box } from "@mui/system";
import { useDropzone } from "react-dropzone";
import FolderIcon from "@mui/icons-material/Folder";
import { LightTypo } from "./LightTypo";
import { useTranslation } from "react-i18next";

const baseStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 5,
  borderColor: "#eeeeee",
  borderStyle: "dotted",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export type ImageUrlAndFileType = {
  url: string;
  file: File | null;
};

interface IFropzoneProps {
  setImage: (val: ImageUrlAndFileType) => void;
}

export function Dropzone({ setImage }: IFropzoneProps) {
  const { t } = useTranslation("dropzone");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      const file = acceptedFiles[0];
      setImage({
        url: URL.createObjectURL(file),
        file,
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <Box sx={{ flexDirection: "column" }} {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <FolderIcon sx={{ fontSize: "40px", mb: 1 }} />
        <LightTypo sx={{ textAlign: "center" }}>{t("load_image_info")}</LightTypo>
      </Box>
    </div>
  );
}

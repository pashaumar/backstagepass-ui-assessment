import { useState } from "react";

export function useCheckinFlow() {
  const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [checkinText, setCheckinText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const openCheckinModal = () => setIsCheckinModalOpen(true);
  const closeCheckinModal = () => setIsCheckinModalOpen(false);

  const openPreviewModal = () => setIsPreviewModalOpen(true);
  const closePreviewModal = () => setIsPreviewModalOpen(false);

  return {
    isCheckinModalOpen,
    isPreviewModalOpen,
    checkinText,
    uploadedFile,
    setCheckinText,
    setUploadedFile,
    openCheckinModal,
    closeCheckinModal,
    openPreviewModal,
    closePreviewModal,
  };
}

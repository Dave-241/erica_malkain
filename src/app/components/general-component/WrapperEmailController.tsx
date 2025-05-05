"use client";

import { useEffect, useState } from "react";
import EmailCaptureModal from "./EmailCaptureModal";

export default function WrapperEmailCaptureModal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return <>{show && <EmailCaptureModal />}</>;
}

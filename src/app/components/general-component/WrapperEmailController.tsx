"use client";

import { useEffect, useState } from "react";
import EmailCaptureModal from "./EmailCaptureModal";
import { supabase } from "@/app/utils/supabaseClient";
import { usePathname } from "next/navigation";

export default function WrapperEmailCaptureModal() {
  const [show, setShow] = useState(true);
  const [modalData, setModalData] = useState<null | {
    image: string;
    header: string;
    body: string;
    button_text: string;
  }>(null);

  useEffect(() => {
    const fetchModalData = async () => {
      const { data, error } = await supabase
        .from("email_capture_modal")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error("Error loading modal data:", error.message);
      } else {
        setModalData(data);
      }
    };

    fetchModalData();
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    const modalStatus = localStorage.getItem("emailModalStatus");
    if (modalStatus === "submitted") return;
    setShow(true);

    const delay = modalStatus === "closed" ? 50000 : 20000;

    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show || !modalData) return null;

  return (
    <EmailCaptureModal
      prop_image={modalData.image}
      prop_header={modalData.header}
      prop_body={modalData.body}
      prop_button_text={modalData.button_text}
      setopen_contact_form={setShow}
    />
  );
}

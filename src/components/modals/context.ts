"use client";

import { atom, useAtom } from "jotai";
import { useRouter } from "next/navigation";

const modalAtom = atom({ open: false, message: "" });

export const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom);
  const router = useRouter();
  const openModal = (message: string = "") => setModal({ message, open: true });
  const closeModal = async (back: boolean = false) => {
    setModal({ ...modal, open: false });
    await new Promise((resolve) => setTimeout(resolve, 300));
    modal.message.length === 0 && back && router.back();
  };
  return { ...modal, openModal, closeModal };
};

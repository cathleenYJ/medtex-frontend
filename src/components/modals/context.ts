"use client";

import { atom, useAtom } from "jotai";

export type MODAL_VIEW = "SIGN_IN" | "ERROR";

const modalAtom = atom({ open: false, view: "ADD_REVIEW_VIEW", message: "" });

export const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom);
  const openModal = (view: MODAL_VIEW, message?: string) => setModal({ ...modal, view, message: message || "", open: true });
  const closeModal = () => setModal({ ...modal, open: false });
  return { ...modal, openModal, closeModal };
};

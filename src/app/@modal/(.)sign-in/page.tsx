"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SignIn } from "@/components/auth/sign-in";
import { Modal } from "@/components/modals/modal";
import { useModal } from "@/components/modals/context";
import { Routes } from "@/config/routes";

export default function SignInModal() {
  const { openModal, closeModal } = useModal();
  const pathname = usePathname();
  useEffect(() => {
    pathname === Routes.auth.signIn ? openModal() : closeModal();
  }, [pathname]);
  return (
    <Modal onClose={() => closeModal(true)}>
      <SignIn />
    </Modal>
  );
}

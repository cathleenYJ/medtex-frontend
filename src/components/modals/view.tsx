"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useModal, MODAL_VIEW } from "@/components/modals/context";
import { SignIn } from "@/components/auth/sign-in";
import { ErrorMessage } from "../errors/error-message";

export const modal_views: Record<MODAL_VIEW, MODAL_VIEW> = {
  SIGN_IN: "SIGN_IN",
  ERROR: "ERROR",
};

const renderModalContent = (view: MODAL_VIEW | string) => {
  switch (view) {
    case modal_views.SIGN_IN:
      return <SignIn />;
    case modal_views.ERROR:
      return <ErrorMessage />;
    default:
      return null;
  }
};

export const ModalContainer: React.FC = () => {
  const { open, view, closeModal } = useModal();
  const pathName = usePathname();
  useEffect(() => {
    closeModal();
  }, [pathName]);
  return (
    <Dialog open={open} onClose={closeModal}>
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 bg-white/60">
          <DialogPanel transition className="w-full max-w-md rounded-xl shadow bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            {view && renderModalContent(view)}
            <Button className="block bg-blue-900 text-white rounded-lg py-1.5 px-3 mx-auto mt-3 cursor-pointer" onClick={closeModal}>
              Close
            </Button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

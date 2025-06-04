"use client";

import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useModal } from "./context";

export function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const { message, open } = useModal();
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl shadow-xs shadow-white/50 bg-black text-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            {message || children}
            <Button
              className="absolute top-4 right-4 block cursor-pointer"
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </Button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@ui/button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface RegistrationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationSuccessModal({ isOpen, onClose }: RegistrationSuccessModalProps) {
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-center">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-center"
                  >
                    Registration Successful!
                  </Dialog.Title>
                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      Thank you for your registration. A confirmation email has been sent to your email address with all the details.
                    </p>
                  </div>
                  <div className="mt-6 w-full">
                    <Button
                      onClick={onClose}
                      className="w-full py-2"
                    >
                      Back to Event Page
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

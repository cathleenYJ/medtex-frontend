"use client";

import { useModal } from "@/components/modals/context";

export const ErrorMessage: React.FC = () => {
  const { message } = useModal();
  return <div>{message}</div>;
};

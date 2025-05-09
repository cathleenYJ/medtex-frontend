"use client";

import { useAuth } from "@/hooks/use-auth";

export const SignedOut: React.FC<{ children: React.ReactNode; checkToken?: boolean }> = ({ children }) => {
  const { isAuthorized } = useAuth();
  return !isAuthorized && children;
};

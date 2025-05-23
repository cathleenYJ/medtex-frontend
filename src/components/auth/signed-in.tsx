"use client";

import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";

export const SignedIn: React.FC<{ children: React.ReactNode; checkToken?: boolean }> = ({ children, checkToken = false }) => {
  const { isAuthorized, checkAuth } = useAuth();
  useEffect(() => {
    checkToken && checkAuth();
  }, []);
  return isAuthorized && children;
};

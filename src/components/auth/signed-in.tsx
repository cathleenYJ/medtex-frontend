"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export const SignedIn: React.FC<{ children: React.ReactNode; checkToken?: boolean }> = ({ children, checkToken = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthorized, checkAuth } = useAuth();
  useEffect(() => {
    checkToken && checkAuth(router, pathname, null);
  }, []);
  return isAuthorized && children;
};

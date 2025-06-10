"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { useAppSearchParams } from "@/hooks/use-search-params";
import { Routes } from "@/config/routes";
import type { MenuItemType } from "@/types";

export const useAuthBtn = (): MenuItemType => {
  const pathname = usePathname();
  const router = useRouter();
  const { createQueryString, searchParams } = useAppSearchParams();
  const { unauthorize, isAuthorized } = useAuth();
  
  const handleLogout = () => {
    // Call the unauthorize function to log out
    unauthorize();
    
    // Redirect to login page after logout
    router.push('/login');
  };
  
  const signedInItem = {
    key: "logout",
    label: "Logout",
    onClick: handleLogout,
  };
  const signedOutItem = {
    key: Routes.auth.signIn,
    label: "Login",
    href: `${Routes.auth.signIn}?${createQueryString(
      "redirect",
      `${pathname}?${searchParams?.toString() ?? ''}`,
      true
    )}`,
  };
  return isAuthorized ? signedInItem : signedOutItem;
};

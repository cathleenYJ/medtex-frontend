"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { clientFetch } from "@/data/client";
import { isUnauthorized } from "@/data/client/axios-client";
import { removeAuthToken } from "@/data/client/token.utils";
import { AxiosError } from "axios";
import { Routes } from "@/config/routes";

interface UserType {
  name: string;
  avatar: string;
  role: string;
}

const isLoggedIn = typeof window !== "undefined" ? localStorage.getItem("isAuthorized") : "false";
const userAtom = atomWithStorage<Partial<UserType>>("loggedUser", {});
const authorizationAtom = atomWithStorage("isAuthorized", isLoggedIn === "true");

export const useAuth = () => {
  const [isAuthorized, setAuthorized] = useAtom(authorizationAtom);
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const authorize = (newUser: Partial<UserType>) => {
    setAuthorized(true);
    setUser(newUser);
    const redirect = decodeURIComponent(searchParams?.get("redirect") || Routes.public.home);
    pathname === Routes.auth.signIn && router.push(redirect);
  };
  const unauthorize = () => {
    setAuthorized(false);
    setUser({});
    removeAuthToken();
    pathname.startsWith(Routes.private.admin) && router.refresh();
  };
  const checkAuth = async () => {
    try {
      authorize(await clientFetch.users.me());
    } catch (error) {
      unauthorize();
      if (!isUnauthorized(error as AxiosError)) throw error;
    }
  };
  return {
    isAuthorized,
    user,
    authorize,
    unauthorize,
    checkAuth,
  };
};

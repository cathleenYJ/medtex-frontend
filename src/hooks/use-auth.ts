"use client";

import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
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
    const redirect = searchParams?.get("redirect");
    pathname === Routes.auth.signIn && router.push(decodeURIComponent(redirect || Routes.public.home));
  };
  const unauthorize = () => {
    setAuthorized(false);
    setUser({});
    removeAuthToken();
    pathname.startsWith(Routes.private.admin) && router.push(Routes.public.home);
  };
  return {
    isAuthorized,
    user,
    authorize,
    unauthorize,
    checkAuth: async (router: AppRouterInstance, pathname: string | null, searchParams: ReadonlyURLSearchParams | null) => {
      try {
        authorize(await clientFetch.users.me());
      } catch (error) {
        if (isUnauthorized(error as AxiosError)) {
          unauthorize();
        } else {
          throw error;
        }
      }
    },
  };
};

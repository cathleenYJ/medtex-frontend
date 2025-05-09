"use client";

import { ReadonlyURLSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { clientFetch } from "@/data/client";
import { isUnauthorized } from "@/data/client/axios-client";
import { removeAuthToken } from "@/data/client/token.utils";
import { AxiosError } from "axios";

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
  const authorize = (newUser: Partial<UserType>) => {
    setAuthorized(true);
    setUser(newUser);
  };
  const unauthorize = () => {
    setAuthorized(false);
    setUser({});
    removeAuthToken();
  };
  return {
    isAuthorized,
    user,
    authorize,
    unauthorize,
    checkAuth: async (router: AppRouterInstance, pathname: string | null, searchParams: ReadonlyURLSearchParams | null) => {
      try {
        const user = await clientFetch.users.me();
        authorize(user);
        searchParams && router.push(searchParams.get("redirect") || "/");
      } catch (error) {
        if (isUnauthorized(error as AxiosError)) {
          unauthorize();
          !searchParams && router.push(`/sign-in?redirect=${pathname}`);
        } else {
          throw error;
        }
      }
    },
  };
};

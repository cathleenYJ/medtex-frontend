import { ConfigValue } from "@/config";
import Cookies from "js-cookie";

export const AUTH_TOKEN_KEY = ConfigValue.AUTH_TOKEN_KEY;

export const getAuthToken = () =>
  typeof window !== undefined ? Cookies.get(AUTH_TOKEN_KEY) : null;
export const setAuthToken = (token: string) => {
  Cookies.set(AUTH_TOKEN_KEY, token, { expires: 1 });
};
export const removeAuthToken = () => Cookies.remove(AUTH_TOKEN_KEY);
export const checkHasAuthToken = () => Boolean(Cookies.get(AUTH_TOKEN_KEY));

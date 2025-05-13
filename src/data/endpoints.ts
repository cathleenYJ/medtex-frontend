import { ConfigValue } from "@/config";

export const API_ENDPOINTS = {
  USERS_ME: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/auth/me`,
  USERS_LOGIN: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/login`,
  USERS_LOGOUT: "/logout",
  USERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/auth/data`,
  BUYERS_DATA: "http://localhost:3001/buyers",
  SELLERS_DATA: "http://localhost:3001/sellers",
};

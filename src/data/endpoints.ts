import { ConfigValue } from "@/config";

export const API_ENDPOINTS = {
  USERS_ME: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/auth/me`,
  USERS_LOGIN: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/login`,
  USERS_LOGOUT: "/logout",
  USERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/auth/data`,
  BUYERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/buyers`,
  BUYERS_CONTACT: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/buyers_contact`,
  SELLERS_DATA: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/sellers`,
  FILTER_OPTIONS: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/filter_options`,
  RECOMMENDED: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA}/recommended`,
};

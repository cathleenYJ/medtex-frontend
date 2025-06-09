import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { getAuthToken, removeAuthToken } from "@/data/client/token.utils";

export const isUnauthorized = (error: AxiosError) =>
  error.response &&
  ([404, 403, 401].includes(error.response.status) ||
    (error.response.data as { error: string }).error === "Not Authorized");

const AxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT_DATA,
  timeout: 150000000,
  headers: { "Content-Type": "application/json" },
});

AxiosClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    // Only add token if it exists and the request URL is not for login or publicly accessible endpoints
    if (token && !config.url?.includes('/credentials') && !config.url?.includes('/authData')) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    isUnauthorized(error) && removeAuthToken();
    return Promise.reject(error);
  }
);

export { AxiosClient };

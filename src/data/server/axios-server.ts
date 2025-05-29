import axios, { AxiosRequestHeaders } from "axios";
import { cookies } from "next/headers";

const AxiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 150000000,
  headers: { "Content-Type": "application/json" },
});

AxiosServer.interceptors.request.use(
  async (config) => {
    const token = await cookies().then((res) => res.get("token")?.value);
    config.headers = {
      ...config.headers,
      Authorization: token ? token : "",
    } as AxiosRequestHeaders;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { AxiosServer };

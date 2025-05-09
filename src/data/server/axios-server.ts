import axios from "axios";

const AxiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 150000000,
  headers: { "Content-Type": "application/json" },
});

export { AxiosServer };

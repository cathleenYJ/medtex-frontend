import axios from "axios";
import { FetchData } from "./fetch-data";
import { ConfigValue } from "@/config";

// Create an axios instance for server-side fetching
const serverAxios = axios.create({
  baseURL: ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT_DATA,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create a FetchData instance for server-side fetching
export const serverFetch = new FetchData(serverAxios);

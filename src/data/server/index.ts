import { AxiosServer } from "./axios-server";
import { FetchData } from "../fetch-data";

export const serverFetch = new FetchData(AxiosServer);

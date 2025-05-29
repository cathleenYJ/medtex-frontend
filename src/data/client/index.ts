import { AxiosClient } from "./axios-client";
import { FetchData } from "../fetch-data";

export const clientFetch = new FetchData(AxiosClient);

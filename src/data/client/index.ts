import { AxiosInstance } from "axios";
import { HttpMethod } from "../http-method";
import { API_ENDPOINTS } from "../endpoints";
import { AxiosClient } from "./axios-client";
import type { AuthResponse, BuyerContact, BuyerData, LoginUserInput, SellerData, User } from "@/types";

class FetchData {
  private method: HttpMethod;
  constructor(axios: AxiosInstance) {
    this.method = new HttpMethod(axios);
  }
  users = {
    me: () => this.method.get<User>(API_ENDPOINTS.USERS_ME),
    login: (input: LoginUserInput) => this.method.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
    logout: () => this.method.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    data: () => this.method.get<{ data: number[] }>(API_ENDPOINTS.USERS_DATA),
  };
  buyers = {
    data: (id?: number) => this.method.get<BuyerData[]>(`${API_ENDPOINTS.BUYERS_DATA}${id ? `?id=${id}` : ""}`),
    contact: (id?: number) => this.method.get<BuyerContact[]>(`${API_ENDPOINTS.BUYERS_CONTACT}${id ? `?id=${id}` : ""}`),
  };
  sellers = {
    data: (id?: number) => this.method.get<SellerData[]>(`${API_ENDPOINTS.SELLERS_DATA}${id ? `?id=${id}` : ""}`),
  };
}
export const clientFetch = new FetchData(AxiosClient);

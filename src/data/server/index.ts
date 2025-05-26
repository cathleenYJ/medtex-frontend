import { cookies } from "next/headers";
import { AxiosInstance, AxiosRequestHeaders } from "axios";
import { HttpMethod } from "../http-method";
import { API_ENDPOINTS } from "../endpoints";
import { AxiosServer } from "./axios-server";
import type { AuthResponse, BuyerData, FilterOptionType, LoginUserInput, SellerData, User } from "@/types";

class FetchData {
  private method: HttpMethod;
  constructor(axios: AxiosInstance) {
    axios.interceptors.request.use(
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
  };
  sellers = {
    data: (id?: number) => this.method.get<SellerData[]>(`${API_ENDPOINTS.SELLERS_DATA}${id ? `?id=${id}` : ""}`),
  };
  basic = {
    filterOptions: () => this.method.get<FilterOptionType[]>(API_ENDPOINTS.FILTER_OPTIONS),
  };
}
export const serverFetch = new FetchData(AxiosServer);

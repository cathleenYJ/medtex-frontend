import { AxiosInstance, AxiosRequestConfig } from "axios";

export class HttpMethod {
  constructor(Axios: AxiosInstance) {
    this.Axios = Axios;
  }
  private Axios: AxiosInstance;
  public get = async <T>(url: string, params?: unknown) => {
    const response = await this.Axios.get<T>(url, { params });
    return response.data;
  };
  public post = async <T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig
  ) => {
    const response = await this.Axios.post<T>(url, data, options);
    return response.data;
  };
  public put = async <T>(url: string, data: unknown) => {
    const response = await this.Axios.put<T>(url, data);
    return response.data;
  };
  public delete = async <T>(url: string) => {
    const response = await this.Axios.delete<T>(url);
    return response.data;
  };
}

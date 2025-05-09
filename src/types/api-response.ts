import { BuyerData } from "./buyers";

export type ApiResponseBase = {
  success: boolean;
  status: string;
  message: string;
};

export interface BuyerDataResponse extends ApiResponseBase {
  data: BuyerData[];
}

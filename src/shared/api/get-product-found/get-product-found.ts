import { apiInstance } from "@/shared/config/api/apiinstance";
import {
  IBasketAdd,
  IBasketGoods,
  IFoundAllGoodsApi,
} from "@/shared/config/types/goods";
// import { handleJwtError } from "@/shared/lib/auth/utils/handleJwtError/error";
import toast from "react-hot-toast";

export const getProductFound = async ({
  value,
  type,
  category,
}: IFoundAllGoodsApi) => {
  try {
    const { data } = await apiInstance.get(
      `/api/goods/found?value=${value}&type=${type}&category=${category}`
    );

    return data;
  } catch (error) {
    toast.error(`${(error as Error).message}`);
  }
};

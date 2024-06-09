import { apiInstance } from "@/shared/config/api/apiinstance";
import { IBasketAdd, IBasketGoods } from "@/shared/config/types/goods";
// import { handleJwtError } from "@/shared/lib/auth/utils/handleJwtError/error";
import toast from "react-hot-toast";

export const addProductBasketApi = async ({
  jwt,
  setSpinner,
  ...otherFields
}: IBasketAdd) => {
  try {
    setSpinner(true);
    const { data } = await apiInstance.post(
      "/api/basket/add",
      {
        product: {
          category: otherFields.category,
          productId: otherFields.productId,
          sizes: otherFields.sizes,
          count: otherFields.count,
          clientId: otherFields.clientId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    // if (data.error) {
    //   const res = (await handleJwtError({
    //     errorName: data.error.name,
    //     repeatRequestAfterRefreshData: {
    //       functionName: "addProductBasket",
    //       payload: { setSpinner, ...otherFields },
    //     },
    //   })) as unknown as IBasketGoods[];
    //   return res;
    // }
    toast.success(`${(data as IBasketGoods).name} добавлен в корзину`);
    return data;
  } catch (error) {
    toast.error(`${(error as Error).message}`);
  } finally {
    setSpinner(false);
  }
};

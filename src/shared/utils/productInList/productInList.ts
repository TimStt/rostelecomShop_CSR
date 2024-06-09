import { IBasketGoods, IGoods } from "@/shared/config/types/goods";

export const productInList = (
  product: IBasketGoods[] | IGoods[],
  productId: string
): boolean =>
  product.some(
    (item) =>
      ((item as unknown as IBasketGoods)?.productId ||
        (item as unknown as IGoods)._id) === productId
  );

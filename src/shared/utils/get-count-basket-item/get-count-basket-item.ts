import { IBasketGoods } from "@/shared/config/types/goods";

export const getCountBasketItem = (
  sizes: string,
  productBasket: IBasketGoods[]
) => productBasket.find((item) => item.size === sizes)?.count || 0;

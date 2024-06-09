import { IBasketGoods } from "@/shared/config/types/goods";

export const deleteProductByLS = (id: string) => {
  const lsProducts = JSON.parse(
    localStorage.getItem("basket") as string
  ) as IBasketGoods[];

  const newProducts = lsProducts.filter((item) => item.productId !== id);
  localStorage.setItem("basket", JSON.stringify(newProducts));
  return newProducts;
};

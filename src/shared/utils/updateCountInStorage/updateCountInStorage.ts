import { IBasketGoods } from "@/shared/config/types/goods";

const updateCountInStorage = (count: number, clientIdByChange: string) => {
  let basket = JSON.parse(
    localStorage.getItem("basket") as string
  ) as IBasketGoods[];

  if (!basket) {
    basket = [];
  }
  basket = basket.map((item) => {
    if (item.clientId === clientIdByChange) {
      item.count = count;
    }
    return item;
  });
  localStorage.setItem("basket", JSON.stringify(basket));
  return basket;
};

export default updateCountInStorage;

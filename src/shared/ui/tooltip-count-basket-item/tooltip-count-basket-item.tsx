import React, { useEffect, useState } from "react";
import Icon from "../icon";
import style from "./tooltip-count-basket.module.scss";
import { IBasketGoods } from "@/shared/config/types/goods";
import { getCountBasketItem } from "@/shared/utils/get-count-basket-item";
import cls from "classnames";
interface ITooltipCountBasketItem {
  productBasket: IBasketGoods[] | undefined;
  sizes: string;
  hasIcon?: boolean;
}

const TooltipCountBasketItem = ({
  productBasket,
  sizes,
  hasIcon = true,
}: ITooltipCountBasketItem) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (productBasket) {
      setCount(getCountBasketItem(sizes, productBasket));
    }
  }, [productBasket, sizes]);

  if (count)
    return (
      <div
        className={cls(style.root, {
          [style.hasIcon]: hasIcon,
        })}
      >
        {!!hasIcon && <Icon name="goods/basket" />}
        <span>{count}</span>
      </div>
    );
};

export default TooltipCountBasketItem;

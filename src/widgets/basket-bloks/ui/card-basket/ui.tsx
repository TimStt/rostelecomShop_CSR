"use client";

import Image from "next/image";
import React, { useId } from "react";
import style from "./card-basket.module.scss";
import Icon from "@/shared/ui/icon";
import { useBasketByAuth } from "@/shared/lib/auth/utils/useBasketByAuth";
import { IBasketGoods } from "@/shared/config/types/goods";
import cls from "classnames";
import { Counter } from "@/shared/ui/counter";
import { useBasketAction } from "@/shared/utils/useBasketAction";
import { Spinner } from "@/shared/ui/spinner";
import { PulseLoader } from "@/shared/ui/pulse-loader";
import CountUp from "react-countup";
import { useCardLogic } from "@/shared/utils/useCardLogic/useCardLogic";
import { useItemAction } from "@/shared/utils/useItemAction";
import useGetOldValue from "@/shared/utils/useGetOldValue/useGetOldValue";

const CardBasket = ({ product }: { product: IBasketGoods }) => {
  const {
    isDeleteSpinner,
    count,
    setCount,
    deleteProduct,

    totalPriceSum,
  } = useItemAction();

  const { size, totalPrice, price, name, image, productId } = product;
  const deleteProductById = () => deleteProduct(productId);
  const key = useId();

  const valueTotalPrice = totalPriceSum(product?._id as string);

  const oldPriceTotalItem = useGetOldValue(
    totalPriceSum(product._id as string)
  );

  if (!product) return null;

  return (
    <article className={style.root} id={key}>
      <Image
        className={style.root__image}
        src={image}
        alt={name}
        width={160}
        height={160}
      />
      <label className={style.root__title} htmlFor={key}>
        {name}
      </label>

      <span className={style.root__sizes}>
        {!!size.length
          ? (size.split(",").length > 1 ? "Размеры: " : "Размер: ") + size
          : "Без размера"}
      </span>

      <div className={style.root__priceOne}>
        <span className={style.root__priceOne__price}>{price} ₽</span>{" "}
        <span className={style.root__priceOne__sub}>Цена за 1 шт.</span>
      </div>
      <Counter
        count={count}
        product={product}
        setCount={setCount}
        totalCount={15}
        updateCountAsync={true}
      />
      <CountUp
        className={style.root__priceFull}
        end={valueTotalPrice}
        suffix=" ₽"
        start={oldPriceTotalItem}
      />
      <button
        className={cls(style.root__delete, "btn-reset")}
        title={`Удалить товар ${name} из корзины`}
        onClick={deleteProductById}
      >
        {isDeleteSpinner ? (
          <PulseLoader size={4} color="#ffffff" gap={3.5} />
        ) : (
          <Icon name="goods/delete" />
        )}
      </button>
    </article>
  );
};

export default CardBasket;

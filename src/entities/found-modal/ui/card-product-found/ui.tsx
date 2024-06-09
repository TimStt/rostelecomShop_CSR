import { IGoods, IGoodsFoundModal } from "@/shared/config/types/goods";
import Image from "next/image";
import Link from "next/link";
import style from "./card-product-found.module.scss";
import React, { use, useId } from "react";
import { useDispatch } from "react-redux";
import { toggleModalFound } from "../../store";

const CardProductFound = ({
  category,
  name,
  image,
  _id,
  type,
  price,
}: IGoodsFoundModal) => {
  const id = useId();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <article className={style.root} id={id}>
      <Link
        className={style.root__link}
        href={`/catalog/${category}/${_id}`}
        onClick={() => dispatch(toggleModalFound(false))}
      >
        <Image src={image} alt={name} width={180} height={180} />
        <label htmlFor={id}>{name}</label>
      </Link>

      <span>{category}</span>
      <span>{type}</span>
      <span>{price} руб.</span>
    </article>
  );
};

export default CardProductFound;

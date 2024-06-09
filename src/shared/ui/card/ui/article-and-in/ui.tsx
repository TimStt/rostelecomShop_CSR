import Icon from "@/shared/ui/icon";
import React from "react";
import cls from "classnames";
import style from "./article-and-instock.module.scss";
import { IGoods } from "@/shared/config/types/goods";

const ArticleAndInstock = ({
  inStock,
  article,
  classname,
}: {
  inStock: boolean;
  article: number;
  classname?: string;
}) => {
  return (
    <div className={cls(style.root, classname)}>
      <span
        className={cls(style.root__state, {
          [style.isNotAvailable]: !inStock,
        })}
      >
        {inStock ? "Есть в наличии" : "Нет в наличии"}
      </span>
      <span className={style.root__article}>Арт.: {article}</span>
    </div>
  );
};

export default ArticleAndInstock;

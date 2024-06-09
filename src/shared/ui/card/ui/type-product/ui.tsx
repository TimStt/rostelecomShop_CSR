import React, { useState } from "react";
import { panelItems } from "../../panel-items.data";
import Link from "next/link";
import Popup from "@/shared/ui/popup";
import cls from "classnames";
import style from "./type-product.module.scss";
import { motion } from "framer-motion";
import { IGoods } from "@/shared/config/types/goods";
import { QuickViewModal, toggleModalQuik } from "@/shared/ui/quick-view-modal";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "@/shared/stores/current-product-add-busket";

const TypeProduct = ({
  product,
  classname,
}: {
  product: IGoods;
  classname?: string;
}) => {
  return (
    <span
      className={cls(style.root, classname, {
        [style[`root__new`]]: product.isNew,
        [style[`root__hit`]]: product.isBestseller,
      })}
    >
      {product.isNew ? "Новинка" : "Хит"}
    </span>
  );
};

export default TypeProduct;

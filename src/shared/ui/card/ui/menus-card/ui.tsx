import React, { useState } from "react";
import { panelItems } from "../../panel-items.data";
import Link from "next/link";
import Popup from "@/shared/ui/popup";
import cls from "classnames";
import style from "./menus-card.module.scss";
import { motion } from "framer-motion";
import { IGoods } from "@/shared/config/types/goods";
import { QuickViewModal, toggleModalQuik } from "@/shared/ui/quick-view-modal";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "@/shared/stores/current-product-add-busket";

const MenusCard = ({
  classname,
  product,
}: {
  classname: string;
  product: IGoods;
}) => {
  const dispatch = useDispatch();
  const openQuickViewModal = () => {
    dispatch(setCurrentProduct(product));
    dispatch(toggleModalQuik(true));
  };
  return (
    <div className={cls(style.root, classname)}>
      {panelItems.map(({ href, text, icon }) => (
        <div key={href} className={style.root__item}>
          <button
            className={cls(style.root__link, "btn-reset")}
            onClick={openQuickViewModal}
          >
            {icon}
            <span className="visually-hidden">{text}</span>
          </button>
          <Popup className={style.root__popup} role="tooltip">
            <div className={style.root__popup__wrapper}>
              <span> {text}</span>
            </div>
          </Popup>
        </div>
      ))}
    </div>
  );
};

export default MenusCard;

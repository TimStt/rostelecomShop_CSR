import React, { useEffect } from "react";
import style from "./header.module.scss";
import cls from "classnames";

import Icon from "@/shared/ui/icon";

import { Logo } from "@/shared/ui/logo";
import Menu from "@/entities/menu";
import { useDispatch, useSelector } from "react-redux";

import Navigation from "./ui/navigation/ui";
import AuthModal from "../auth-modal/ui";
import { toggleModalMenu } from "@/shared/stores/menu-catalog-modal";
import { useGetStateOnLocalStorage } from "@/shared/utils/useGetStateOnLocalStorage";
import { IBasketGoods } from "@/shared/config/types/goods";
import { addGoodsNoteAuth } from "@/shared/stores/basket";
import { useUserAuth } from "@/shared/lib/auth/utils/isUserAuth";
import { replaceProductsThunk } from "@/shared/stores/basketAuth";
import App from "next/app";
import { selectIsAuth } from "@/shared/stores/auth";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const openModal = () => dispatch(toggleModalMenu(true));

  const isAuth = useSelector(selectIsAuth);

  useGetStateOnLocalStorage(
    "basket",
    (products: IBasketGoods[]) =>
      !isAuth && dispatch(addGoodsNoteAuth(products))
  );

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokens") as string);
    if (isAuth && token) {
      const basket = JSON.parse(localStorage.getItem("basket") as string);
      if (!basket || !Array.isArray(basket)) return;

      dispatch(
        replaceProductsThunk({ basketProduct: basket, jwt: token.accessToken })
      );
    }
  }, [dispatch, isAuth]);

  return (
    <header className={cls(style.root, "container")}>
      <div className={style.inner}>
        <button
          className={cls("btn-reset", style["menu-button"])}
          onClick={openModal}
        >
          <span className={style["icon-block"]}>
            <Icon name="common/menu" />
          </span>
          <span>Меню</span>
        </button>
        <Menu />

        <Logo className={style.inner__logo} />
        <Navigation />
        <AuthModal />
      </div>
    </header>
  );
};

export default Header;

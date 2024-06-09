import Link from "next/link";
import React from "react";
import style from "./mobile-menu.module.scss";
import { paths } from "@/shared/routing";
import cls from "classnames";
import { useBasketByAuth } from "@/shared/lib/auth/utils/useBasketByAuth";
import Icon from "@/shared/ui/icon";
import { useFavoritesByAuth } from "@/shared/lib/auth/utils/useFavoritesByAuth";
import { useDispatch } from "react-redux";
import { toggleModalMenu } from "@/shared/stores/menu-catalog-modal";

const MobileMenu = () => {
  const { goods: basketProduct } = useBasketByAuth();
  const { goods: favouritesProduct } = useFavoritesByAuth();
  const dispatch = useDispatch();

  const handleOpenCatalogMenu = () => dispatch(toggleModalMenu(true));

  return (
    <nav className={style.root}>
      <Link className={style.root__button} href={paths.home}>
        <Icon name="common/home" />
        <span>Главная</span>
      </Link>
      <button
        className={cls(style.root__button, "btn-reset")}
        onClick={handleOpenCatalogMenu}
      >
        <Icon name="common/catalog" />
        <span>Каталог</span>
      </button>
      <Link className={style.root__button} href={paths.favourites}>
        <Icon
          className={cls(style.root__icon, {
            [style.isNotEmpty]: !!favouritesProduct.length,
          })}
          name="goods/heart"
        />
        <span>Избранное</span>
      </Link>
      <Link className={style.root__button} href={paths.basket}>
        <Icon
          className={cls(style.root__icon, {
            [style.isNotEmpty]: !!basketProduct.length,
          })}
          name="goods/basket"
        />
        <span>Корзина</span>
      </Link>
      <button
        className={cls(style.root__button, "btn-reset")}
        onClick={handleOpenCatalogMenu}
      >
        <Icon name="common/yet" />
        <span>Еще</span>
      </button>
    </nav>
  );
};

export default MobileMenu;

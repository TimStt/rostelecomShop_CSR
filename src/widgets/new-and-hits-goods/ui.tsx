import Card from "@/shared/ui/card/ui";
import React, { useEffect } from "react";
import style from "./new-and-hits-goods.module.scss";
import cls from "classnames";
import Link from "next/link";
import { paths } from "@/shared/routing";
import Icon from "@/shared/ui/icon";
import { getHitsAndNew, selectIsHitsAndNew } from "./store/slice";
import { useDispatch, useSelector } from "react-redux";
import CatalogCards from "../../features/catalog-cards";
import SkeletonCard from "../catalog-main/ui/skeleton-card/ui";
// import CatalogCards from "../../features/catalog-cards";

export const NewAndHitsGoods = () => {
  const { isGoods, loading } = useSelector(selectIsHitsAndNew);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHitsAndNew());
  }, [dispatch]);

  return (
    <section className={cls(style.root, "container")}>
      <div className={cls(style.root__wrapper, style.new)}>
        <header className={style.root__header}>
          <h2 className={style.root__title}>Новинки</h2>
          <Link className={style.root__other} href={paths.catalog}>
            <span>Все</span>
            <Icon name="common/arrow" />
          </Link>
        </header>
        <div className={style.root__catalog}>
          {!loading ? (
            <CatalogCards goods={isGoods?.slice(4, 8)} />
          ) : (
            Array(4)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          )}
        </div>
      </div>

      <div className={cls(style.root__wrapper, style.hits)}>
        <header className={style.root__header}>
          <h2 className={style.root__title}>Хиты</h2>
          <Link className={style.root__other} href={paths.catalog}>
            <span>Все</span>
            <Icon name="common/arrow" />
          </Link>
        </header>
        <div className={style.root__catalog}>
          {!loading || !!isGoods?.length ? (
            <CatalogCards goods={isGoods?.slice(0, 4)} />
          ) : (
            Array(4)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          )}
        </div>
      </div>
    </section>
  );
};

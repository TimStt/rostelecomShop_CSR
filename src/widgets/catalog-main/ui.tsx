"use client";
import React, { use, useEffect, useRef, useState } from "react";
import cls from "classnames";

import Filter from "./ui/filter";
import { Card } from "@/shared/ui/card";
// import CatalogCards from "@/features/catalog-cards";
import { BreadCrumb } from "@/shared/ui/breadcrumbs";
import { useSelector } from "react-redux";
import { selectIsCatalag } from "./store/slice";

import Pagination from "./ui/pagination";

import SkeletonCard from "./ui/skeleton-card/ui";
import { categories } from "@/shared/routing";

import TransitionWrapper from "@/shared/ui/transition-wrapper/ui";

import style from "./catalog-main.module.scss";

import { PulseLoader } from "@/shared/ui/pulse-loader";
import EmptyPageContent from "@/shared/ui/empty-page-content/ui";

import { useUrlParams } from "@/shared/utils/url";

const CatalogMain = () => {
  const { params } = useUrlParams();

  const category = params.get("category");
  const { isGoods, count, limitPage, loading } = useSelector(selectIsCatalag);

  return (
    <TransitionWrapper>
      <section className={cls(style.root, "container")}>
        <BreadCrumb className={style.root__urlNav} />
        <div className={style.root__title}>
          <h1>
            {category
              ? categories[category as keyof typeof categories]
              : "Каталог"}
          </h1>
          <span> {loading ? <PulseLoader size={10} /> : count} товаров</span>
        </div>
        <Filter />

        {isGoods.length ? (
          <>
            {" "}
            <div className={style.root__cards}>
              {loading ? (
                Array.from({ length: limitPage }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              ) : (
                <>
                  {isGoods.map((product) => (
                    <Card key={`${product._id} ${product.type}`} {...product} />
                  ))}
                </>
              )}
            </div>
            <Pagination />
          </>
        ) : (
          <EmptyPageContent
            title={"Ойй...😢 <br/> Кажется кто-то украл все товары"}
            subtitle={"К сожалению, не нашлось товаров по вашему запросу"}
            buttonText={"Попробовать другой запрос"}
            backgroundText={""}
          />
        )}
      </section>
    </TransitionWrapper>
  );
};

export default CatalogMain;

import React from "react";
import style from "./category.module.scss";
import Icon from "@/shared/ui/icon";
import Image from "next/image";
import Link from "next/link";
import { categoryData } from "./category.data";
import cls from "classnames";
import { paths } from "@/shared/routing";

const Category = () => {
  return (
    <section className={cls(style.root, "container")}>
      <div className={style.root__header}>
        <h2 className={style.root__title}>Категории</h2>
        <Link className={style.root__other} href={paths.catalog}>
          <span>Все категории</span>

          <Icon name="common/arrow" />
        </Link>
      </div>
      <ul className={style.root__list}>
        {categoryData.map(({ name, image, href }) => (
          <li key={name} className={style.root__list__item}>
            <Link href={href} className={style.root__list__link}>
              <Image
                className={style.root__list__image}
                src={image}
                alt={name}
                width={365}
                height={365}
              />
              <div className={style.root__list__name}>
                <span>{name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;

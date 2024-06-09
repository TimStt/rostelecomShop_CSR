import { catalogPaths, paths } from "@/shared/routing";
import { Items } from "./types/items.interface";
import { categories } from "@/shared/config";

export const menuItems: Items[] = [
  {
    href: paths.catalog,
    text: "Каталог",
    children: [
      {
        href: catalogPaths.clothes,
        text: categories.clothes,
        children: [
          {
            href: catalogPaths.t_shirts,
            text: categories.t_shirts,
          },
          {
            href: catalogPaths.longsleeves,
            text: categories.longsleeves,
          },
          {
            href: catalogPaths.hoodie,
            text: categories.hoodie,
          },
          {
            href: catalogPaths.outerwear,
            text: categories.outerwear,
          },
        ],
      },
      {
        href: catalogPaths.accessories,
        text: "Аксессуары",
        children: [
          {
            href: catalogPaths.umbrellas,
            text: categories.umbrellas,
          },
          {
            href: catalogPaths.longsleeves,
            text: categories.promotional_gifts,
          },
        ],
      },
      {
        href: catalogPaths.souvenirs,
        text: "Сувениры",
        children: [
          {
            href: catalogPaths.hats,
            text: categories.hats,
          },
          {
            href: catalogPaths.longsleeves,
            text: "Сувениры",
          },
          {
            href: catalogPaths.longsleeves,
            text: "Сувениры",
          },
        ],
      },
      {
        href: catalogPaths.chancellery,
        text: "Канцелярия",
      },
      {
        href: paths.catalog,
        text: "Весь каталог",
      },
    ],
  },
  {
    href: paths.customers,
    text: "Покупателям",
    children: [
      {
        href: catalogPaths.t_shirts,
        text: "Покупателям",
      },
      {
        href: catalogPaths.longsleeves,
        text: "Покупателям",
      },
      {
        href: catalogPaths.longsleeves,
        text: "Покупателям",
      },
    ],
  },
  {
    href: paths.contact,
    text: "Контакты",
    children: [
      {
        href: catalogPaths.t_shirts,
        text: "Контакты",
      },
      {
        href: catalogPaths.longsleeves,
        text: "Контакты",
      },
    ],
  },
];

export const numberOfDropDown = menuItems.length;

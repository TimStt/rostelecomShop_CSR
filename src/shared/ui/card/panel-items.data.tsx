import { paths } from "@/shared/routing";
import Icon from "../icon";
import React from "react";

interface IPanelItem {
  href: string;
  text: string;
  icon: JSX.Element;
}

export const panelItems: IPanelItem[] = [
  {
    href: paths.favourites,
    text: "Добавить в избранное",
    icon: <Icon name="goods/heart" />,
  },
  {
    href: paths.compare,
    text: "Добавить в сравнение",
    icon: <Icon name="goods/compare" />,
  },
  {
    href: paths.catalog,
    text: "Быстрый просмотр",
    icon: <Icon name="goods/eys" />,
  },
];

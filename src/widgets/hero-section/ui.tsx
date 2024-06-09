import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "./hero-section.module.scss";
import cls from "classnames";

// import Swiper styles
import "swiper/css";

import Icon from "@/shared/ui/icon";

import { useDispatch } from "react-redux";

import { Slider } from "./ui/slider";

const HeroSection = () => {
  const dispatch = useDispatch();

  return (
    <section className={style.root}>
      <div className={cls(style.root__inner, "container")}>
        <h1 className="visually-hidden">Магазин одежды Ростелеком</h1>
        <span className={style["root__decoration-text"]}>
          <span>Будь</span>
          <br />
          <span>на стиле</span>
          <br />
          <Icon name="common/tringles-decor" />
        </span>
        <div className={style["root__background-text"]}>
          <span className={style["root__background-text__top"]}>
            [ с новой коллекцией «Line»]
          </span>
          <span className={style["root__background-text__bottom"]}>
            Ростелеком
          </span>
        </div>

        <Slider />

        <div className={style.root__nameplate}>
          <span>Реклама</span> <Icon name="common/i" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import style from "./live-brend.module.scss";
import cls from "classnames";
import Link from "next/link";
import { paths } from "@/shared/routing";
import Icon from "@/shared/ui/icon";
import Image from "next/image";
import { motion } from "framer-motion";

const LiveBrend = () => {
  return (
    <section className={cls(style.root, "container")}>
      <header className={style.root__header}>
        <h2 className={style.root__title}>Жизнь нашего бренда</h2>
        <Link className={style.root__other} href={paths.blog}>
          <span>Блог</span>

          <Icon name="common/arrow" />
        </Link>
      </header>

      <div className={style.root__content}>
        <Link className={style.root__content__item} href={paths.blog}>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className={style.root__content__image}
              src="/live-brend/1.jpeg"
              alt="земля с водой и зеленью"
              width={491}
              height={491}
              loading="lazy"
            />
            <div className={style.root__content__name}>
              <span>С заботой о природе</span>
            </div>
          </motion.div>
        </Link>

        <Link className={style.root__content__item} href={paths.blog}>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className={style.root__content__image}
              src="/live-brend/2.jpeg"
              alt="надпись ростелеком"
              width={491}
              height={491}
              loading="lazy"
            />
          </motion.div>
          <div className={style.root__content__name}>
            <span>Новый взгляд на мерч</span>
          </div>
        </Link>
        <Link className={style.root__content__item} href={paths.blog}>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className={style.root__content__image}
              src="/live-brend/3.jpeg"
              alt="надпись ростелеком"
              width={491}
              height={491}
              loading="lazy"
            />
          </motion.div>
          <div className={style.root__content__name}>
            <span>Идея коллекции «Black»</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default LiveBrend;

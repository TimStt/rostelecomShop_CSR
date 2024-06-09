import React, { use, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Popup from "@/shared/ui/popup";
import Image from "next/image";
import Icon from "@/shared/ui/icon";
import style from "./slider.module.scss";
import Link from "next/link";
import cls from "classnames";

import { slides } from "./slides.data";
import { useWatch } from "@/shared/lib/modal/useWatch";
import { sliderSettings } from "./config";

import "swiper/scss";
import { motion } from "framer-motion";

const Slider = () => {
  const popuplRef = React.createRef<HTMLDialogElement>();

  const [isIndexActive, setIsIndexActive] = React.useState(0);

  // const [activeIndex, setActiveIndex] = React.useState(0);
  const [isOpenPopup, setIsOpenPopup] = React.useState(
    new Array(slides.length).fill(false)
  );
  const hasActiveSlider = isOpenPopup.some((item) => item);
  const onClose = useCallback(() => {
    const copyIsOpenPopup = [...isOpenPopup];
    copyIsOpenPopup.fill(false);
    setIsOpenPopup(copyIsOpenPopup);
  }, [isOpenPopup]);

  const openPopup = (index: number) => {
    const copyIsOpenPopup = [...isOpenPopup];
    copyIsOpenPopup[index] = true;
    setIsOpenPopup(copyIsOpenPopup);
  };

  const handlerChangeSlide = (swiper: any) => {
    setIsIndexActive(swiper.realIndex);
    onClose();
  };

  useWatch(popuplRef, onClose, hasActiveSlider);

  return (
    <motion.div
      className={style.wrapper}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        className={style.root}
        {...sliderSettings}
        slideNextClass={style.root__slideNext}
        slidePrevClass={style.root__slidePrev}
        onSlideChange={handlerChangeSlide}
        onChange={onClose}
      >
        {slides.map(({ id, image, title, price, href }, index) => (
          <SwiperSlide className={style.root__slide} key={id}>
            <Image
              className={style.root__image}
              src={image}
              alt={title}
              width={469.78}
              height={577.98}
            />
            <div className={style.root__info}>
              <button
                className={cls("btn-reset", style.root__button, {
                  [style.isVisible]: isIndexActive === index,
                })}
                onMouseEnter={() => openPopup(index)}
                onClick={() => openPopup(index)}
              >
                <Icon name="common/plus" />
              </button>
              <Popup
                className={cls(style.root__popup, {
                  [style.isOpen]: isOpenPopup[index],
                })}
                ref={popuplRef}
              >
                <Link href={href}>
                  <div className={style.root__popup__wrapper}>
                    <Image
                      className={style.root__popup__image}
                      src={image}
                      alt={title}
                      width={72}
                      height={72}
                    />
                    <div>
                      <h2 className={style.root__popup__title}>{title}</h2>
                      <span className={style.root__popup__price}>
                        {price} ₽
                      </span>
                    </div>
                  </div>
                </Link>
              </Popup>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Slider;

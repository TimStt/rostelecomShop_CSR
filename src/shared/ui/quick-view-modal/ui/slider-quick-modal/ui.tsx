"use client";

import React, { use, useEffect, useRef, useState } from "react";
import style from "./slider-quick-modal.module.scss";
import cls from "classnames";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Icon from "@/shared/ui/icon";
import { TSwiperInstance } from "@/shared/config/types/ui";

const SliderQuickModal = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  const [isActiveIndex, setActiveIndex] = useState<number>(0);
  const refSwiper = useRef<TSwiperInstance>(null);

  return (
    <div className={cls(style.root)}>
      <Swiper
        className={style.root__slider}
        slidesPerView={1}
        mousewheel={true}
        centeredSlides={true}
        keyboard={true}
        wrapperClass={style.root__wrapper}
        onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Mousewheel, Keyboard]}
        onSwiper={(swiper) => (refSwiper.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={style.root__slide}>
            {" "}
            <Image
              className={style.root__image}
              src={image}
              alt={productName}
              width={258}
              height={302}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <nav className={style.root__nav}>
        {" "}
        <button
          className={cls(style.root__prevBtn, "btn-reset")}
          onClick={() => refSwiper.current?.slidePrev()}
          disabled={refSwiper.current?.isBeginning}
          title="Следующее изображение"
        >
          <Icon name="common/arrow2" />
          <span className="visually-hidden">Следующее изображение</span>
        </button>
        <div className={style.root__pagination}>
          {images.map((_, index) => (
            <button
              key={index}
              className={cls(style.root__pagination__bullet, "btn-reset", {
                [style.root__pagination__active]: index === isActiveIndex,
              })}
              onClick={() => {
                refSwiper.current?.slideTo(index);
              }}
            ></button>
          ))}
        </div>
        <button
          className={cls(style.root__nextBtn, "btn-reset")}
          onClick={() => refSwiper.current?.slideNext()}
          disabled={refSwiper.current?.isEnd}
          title="Предыдущее изображение"
        >
          <Icon name="common/arrow2" />
          <span className="visually-hidden">Предыдущее изображение</span>
        </button>
      </nav>
    </div>
  );
};

export default SliderQuickModal;

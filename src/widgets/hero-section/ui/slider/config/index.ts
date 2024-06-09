import { EffectCoverflow } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const sliderSettings: SwiperOptions = {
  modules: [EffectCoverflow],
  effect: "coverflow",

  zoom: true,

  grabCursor: true,
  slidesPerView: "auto",
  initialSlide: 2,
  centeredSlides: true,

  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
};

export { sliderSettings };

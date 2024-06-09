import { Swiper } from "swiper/types";
import { IBasketGoods, IGoods } from "../goods";

export interface ISelectUI {
  dataList: string[];
  type: "multiple" | "single";
  onChange: (arg1: string) => void;
  value: string | undefined;
  classname?: string;
  title?: string;
  hiddenTextOption?: string;
  placeholder?: string;
}

export type TSwiperInstance = Swiper | null;

export interface IUICounter {
  count: number;
  className?: string;
  product: IGoods | IBasketGoods;
  setCount: (state: number) => void;
  totalCount?: number;
  initialCount?: number;
  updateCountAsync?: boolean;
  oneCurrentCartItemCount?: number;
  disabled?: boolean;
}

export interface IUIEmptyPage {
  title: string;
  subtitle: string;
  discription?: string;
  buttonText: string;
  hasImage?: boolean;
  srcImage?: string;
  backgroundText: string;
}

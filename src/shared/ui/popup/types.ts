import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface IPopup<E extends ElementType = ElementType>
  extends HTMLAttributes<HTMLElement> {
  classname?: string;
  children: ReactNode;
  onClose?: () => void;
  as?: E;
}

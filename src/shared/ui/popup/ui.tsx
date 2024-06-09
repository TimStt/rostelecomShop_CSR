import React, { ElementType, forwardRef } from "react";
import { IPopup } from "./types";
import style from "./popup.module.scss";

import cls from "classnames";

export const Popup = forwardRef<HTMLElement, IPopup>(
  ({ className, children, as, onClose, ...props }, ref) => {
    const DEFOULT_ELEMENT: ElementType = "section";
    const Element = as || DEFOULT_ELEMENT;

    return (
      <Element
        ref={ref}
        role="dialog"
        className={cls(style.root, className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);
Popup.displayName = "Popup";

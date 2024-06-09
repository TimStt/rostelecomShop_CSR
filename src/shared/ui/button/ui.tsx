import React, { forwardRef } from "react";
import style from "./button.module.scss";
import type { ElementType } from "react";
import { Ibutton } from "./types";
import cln from "classnames";

const Button = forwardRef<HTMLButtonElement, Ibutton>(
  (
    {
      children,
      as,
      loading,

      startIcon,
      endIcon,
      skeletonLoading,
      variant = "primary",
      size = "medium",
      gradient,
      className,
      ...props
    },
    ref
  ) => {
    const DEFOULT_ELEMENT: ElementType = "button";

    const Element = as || DEFOULT_ELEMENT;

    return (
      <Element
        className={cln(style.root, style[variant], style[size], className)}
        {...props}
        ref={ref}
      >
        {children}
      </Element>
    );
  }
);
Button.displayName = "CustomButton";
export default Button;

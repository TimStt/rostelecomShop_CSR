import React, { ForwardedRef, Ref, RefObject, forwardRef, useRef } from "react";
import { IModel } from "./types";
import style from "./modal.module.scss";
import Icon from "../icon";
import cls from "classnames";

export const Modal = forwardRef<HTMLDialogElement, IModel>(
  ({ className, children, ...props }, ref) => {
    return (
      <dialog ref={ref} className={cls(style.root, className)} {...props}>
        {children}
      </dialog>
    );
  }
);
Modal.displayName = "Modal";

import { TActiveForm } from "@/shared/config/types/auth";
import { HTMLAttributes } from "react";

export interface IAuthLayout extends HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDialogElement>;

  type?: TActiveForm;
  classname?: string;
}

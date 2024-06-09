import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

export interface Ibutton<E extends ElementType = ElementType>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  skeletonLoading?: boolean;
  href?: string;
  children?: ReactNode;

  gradient?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outline" | "none";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  as?: E | React.ComponentType<any>;
}

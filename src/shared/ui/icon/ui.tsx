import cls from "classnames";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

export const Icon = ({
  name,
  className,
  viewBox,
  role,
  ...props
}: IconProps) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <svg
      aria-hidden
      className={cls("icon", className)}
      focusable="false"
      viewBox={viewBox}
      {...props}
    >
      <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};

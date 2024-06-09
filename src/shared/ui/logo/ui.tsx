import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";
import React, { ForwardedRef } from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  width?: number;
  height?: number;
  href?: string;
  alt?: string;
}

export const Logo = ({
  className,
  width = 197,
  height = 50,
  href = paths.home,
  alt = "логотип Rostelekom",
  ...props
}: LogoProps) => {
  return (
    <Link className={className} href={href}>
      <Image
        src="/logo.svg"
        alt={alt}
        priority
        width={width}
        height={height}
        {...props}
      />
    </Link>
  );
};

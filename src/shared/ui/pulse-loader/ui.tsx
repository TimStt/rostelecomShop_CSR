import React from "react";
import style from "./pulse-loader.module.scss";
import cls from "classnames";

interface IPulseLoaderProps {
  size: number;
  className?: string;
  color?: string;
  duration?: string;
  gap?: number;
}

const PulseLoader = ({
  size,
  className,
  color = "#333",
  duration = "1.2s",
  gap = 10,
}: IPulseLoaderProps) => {
  const styleProps = {
    "--sizeDotes": `${size}px`,
    "--spinnerColor": color,
    "--spinnerDuration": duration,
    "--gap": `${gap}px`,
  } as React.CSSProperties;

  return (
    <div
      className={cls(style.root, className)}
      style={styleProps}
      role="status"
      aria-label="Загрузка..."
      aria-live="polite"
    >
      <div></div>
      <div></div>
      <div></div>
      <span className="visually-hidden">Загрузка ...</span>
    </div>
  );
};

export default PulseLoader;

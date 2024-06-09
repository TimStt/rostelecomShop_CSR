import { transform } from "next/dist/build/swc";
import { exit } from "process";

export const motionSettingsVisibleDisplay = (state: boolean) => {
  return {
    initial: { opacity: 0, display: "none", scale: 0.5 },
    animate: {
      opacity: state ? 1 : 0,
      display: state ? "block" : "none",
      scale: state ? 1 : 0.5,
      transform: state ? " scale(1) " : " scale(0.5)",
    },
  };
};

export const motionSettingsVisibleOpacity = {
  whileInView: { opacity: 1 },
  initial: { opacity: 0.2 },
  transition: { duration: 0.6 },
};

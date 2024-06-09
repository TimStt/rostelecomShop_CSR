import { IconName } from "@/shared/ui/icon/types";

export interface IIconData {
  iconName: IconName;
  hiddenText: string;
}

export const iconsData: IIconData[] = [
  {
    iconName: "social/github",
    hiddenText: "Войти с помощью GitHub",
  },
  {
    iconName: "social/google",
    hiddenText: "Войти с помощью Google",
  },
  {
    iconName: "social/yandex",
    hiddenText: "Войти с помощью Yandex",
  },
  {
    iconName: "social/vk2",
    hiddenText: "Войти с помощью ВКонтакте",
  },
];

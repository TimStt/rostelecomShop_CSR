import { translateWords } from "@/shared/routing/paths";
import { tr } from "@faker-js/faker";

export const translateToWord = ({
  word,
  lang,
}: {
  word: string | undefined;
  lang: "ru" | "en";
}) => {
  let translate: string;
  if (!word) return "";

  switch (lang) {
    case "ru":
      translate = translateWords[
        word?.replaceAll("-", "_") as keyof typeof translateWords
      ] as string;
      break;
    case "en":
      translate = Object.entries(translateWords).find(
        ([_, ruWord]) => ruWord.replace("_", "-") === word
      )?.[0] as string;
      break;
  }

  return translate;
};

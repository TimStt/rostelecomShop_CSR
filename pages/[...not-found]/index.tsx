import EmptyPageContent from "@/shared/ui/empty-page-content/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <EmptyPageContent
        title="Упс... <br/> Кажется кто то украл страницу!"
        subtitle="Наша <span  class='text-violet'>секретная служба </span> уже ведет расследование"
        discription="В ближайшее время страница будет найдена!"
        buttonText="Продолжить покупки"
        backgroundText="Зона
404"
      />
    </>
  );
}

import { Button } from "@/shared/ui";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import style from "./cookie-alert.module.scss";
import cls from "classnames";
import Icon from "@/shared/ui/icon";

import ModalMotion from "@/shared/ui/ModalMotion/ui";
import { useOpen } from "@/shared/lib/modal";

const CokieAlert = ({
  setCokieAlertOpen,
  stateCokieAlert,
}: {
  setCokieAlertOpen: (state: boolean) => void;
  stateCokieAlert: boolean;
}) => {
  const handleAccept = () => {
    document.cookie = `CookieBy=RostelecomShop; max-age=${60 * 60 * 24 * 30}`;

    document.cookie
      ? setCokieAlertOpen(false)
      : toast.error(
          "Файл cookie не может быть записан! Пожалуйста, убедитесь, что вы разблокировали cookies в настройках браузера"
        );
  };

  const handleCloseAlert = () => setCokieAlertOpen(false);
  const ref = useRef<HTMLDialogElement>(null);
  useOpen(stateCokieAlert, ref);

  return (
    <ModalMotion className={style.root} state={stateCokieAlert} ref={ref}>
      <div className={cls(style.root__wrapper, "container")}>
        <p className={style.root__text}>
          ПАО «Ростелеком» обрабатывает{" "}
          <a href="https://browser.yandex.ru/help/personal-data-protection/cookies.html">
            Cookies
          </a>{" "}
          для корректной работы сайта и персонализации сервисов, в т.ч. с
          использованием метрических программ и систем аналитик. Вы можете
          запретить обработку{" "}
          <a href="https://browser.yandex.ru/help/personal-data-protection/cookies.html">
            Cookies
          </a>
          в настройках браузера.
        </p>
        <div className={style.root__btns}>
          <Button
            className={style.root__accept}
            variant="primary"
            size="medium"
            onClick={handleAccept}
          >
            Принять
          </Button>
          <button
            className={cls("btn-reset", style.root__close)}
            onClick={handleCloseAlert}
          >
            <Icon name="common/close" />
            <span className="visually-hidden">Закрыть окно cokies alert</span>
          </button>
        </div>
      </div>
    </ModalMotion>
  );
};

export default CokieAlert;

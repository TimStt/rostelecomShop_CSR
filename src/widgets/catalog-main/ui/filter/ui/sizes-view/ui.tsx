import Icon from "@/shared/ui/icon";
import { selectIsCatalag } from "@/widgets/catalog-main/store/slice";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import style from "./sizes-view.module.scss";
import cls from "classnames";
import { useUrlParams } from "@/shared/utils/url";

const SizesView = () => {
  const { pathname, params } = useUrlParams();
  const sizes = params.get("sizes")?.split(",");

  const { push } = useRouter();

  const deleteSize = (size: string) => {
    const newSizes = sizes?.filter((s) => s !== size).join(",");
    if (newSizes) {
      params.set("sizes", newSizes);
    } else {
      params.delete("sizes");
    }

    push(`${pathname}?${params.toString()}`);
  };
  if (sizes)
    return (
      <ul className={cls(style.root, "list-reset")}>
        {sizes.map((sizeName) => (
          <li className={style.root__item} key={sizeName}>
            <button
              className={cls(style.root__button, "btn-reset")}
              onClick={() => deleteSize(sizeName)}
              title={`Удалить размер ${sizeName}`}
            >
              <span>{sizeName}</span>
              <Icon name="common/close" />
            </button>
          </li>
        ))}
      </ul>
    );
};

export default SizesView;

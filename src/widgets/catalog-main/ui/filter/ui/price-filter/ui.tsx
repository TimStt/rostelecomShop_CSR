import React, { useState } from "react";
import style from "./price.module.scss";
import Icon from "@/shared/ui/icon";
import { useRouter } from "next/navigation";
import cls from "classnames";

import { useUrlParams } from "@/shared/utils/url";
import { useWatch } from "@/shared/lib/modal";

const PriceFilter = () => {
  const [errorPrice, setErrorPrice] = useState("");
  const { pathname, params } = useUrlParams();
  const price_min = params.get("price_min");
  const price_max = params.get("price_max");
  const [isValueInputs, setIsValueInputs] = useState({
    price_min: price_min,
    price_max: price_max,
  });

  const { push } = useRouter();

  const [isOpenPriceRange, setIsOpenPriceRange] = useState(false);

  const isNotEmpty = price_min && price_max;
  const refWrapper = React.useRef<HTMLDivElement>(null);

  // const { filter } = useSelector((state: RootState) => state.goodsCatalog);

  const handlePriceRangeChange = () => {
    const page = params.get("page");
    if (!isValueInputs.price_min || !isValueInputs.price_max) return;

    if (+isValueInputs.price_min < +isValueInputs.price_max) {
      page && page !== "1" && params.set("page", "1");

      params.set("price_min", isValueInputs.price_min);
      params.set("price_max", isValueInputs.price_max);
      setErrorPrice("");
      push(`${pathname}?${params}`);
    } else {
      params.delete("price_min");
      params.delete("price_max");
      setErrorPrice("Максимальная цена должна быть больше минимальной");
    }
  };
  useWatch(refWrapper, () => setIsOpenPriceRange(false), isOpenPriceRange);
  return (
    <div className={style.root} ref={refWrapper}>
      <button
        className={cls(style.root__button, "btn-reset")}
        onClick={() => setIsOpenPriceRange(!isOpenPriceRange)}
        aria-haspopup="listbox"
        id="price-filter-button"
        aria-expanded={isOpenPriceRange}
      >
        <div className={style.root__button__text}>
          <span
            className={cls(style.root__placholder, {
              [style.isNotEmpty]: isNotEmpty,
            })}
          >
            Цена
          </span>{" "}
          {isNotEmpty && (
            <span className={style.root__selected}>
              {`от ${price_min} ₽ - до ${price_max} ₽`}
            </span>
          )}
        </div>
        <Icon
          className={cls(style.root__icon, {
            [style.isRotate]: isOpenPriceRange,
          })}
          name="common/arrow2"
        />
      </button>
      <div
        className={cls(style.root__dropdown, {
          [style.isOpen]: isOpenPriceRange,
        })}
        aria-labelledby="price-filter-button"
      >
        <div className={style.root__inputGroup}>
          <input
            type="number"
            placeholder="130"
            className={cls(style.root__input, "input-reset", {
              [style.isError]: errorPrice,
            })}
            value={isValueInputs.price_min || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsValueInputs({ ...isValueInputs, price_min: e.target.value })
            }
            aria-describedby="price-error"
          />
          <input
            type="number"
            placeholder="6500"
            className={cls(style.root__input, "input-reset", {
              [style.isError]: errorPrice,
            })}
            value={isValueInputs.price_max || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsValueInputs({ ...isValueInputs, price_max: e.target.value })
            }
            aria-describedby="price-error "
          />
        </div>

        {errorPrice && (
          <span className={style.root__error} id="price-error" role="alert">
            {errorPrice}
          </span>
        )}

        <button
          className={cls(style.root__buttonPush, "btn-reset")}
          onClick={handlePriceRangeChange}
          disabled={!isValueInputs.price_min || !isValueInputs.price_max}
          title="Фильтровать по цене"
        >
          Готово
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;

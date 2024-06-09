import React, { useEffect } from "react";
import style from "./counter.module.scss";
import Icon from "../icon";
import cls from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { updateCountBasketThunk } from "@/shared/stores/basketAuth/slice";
import { IUICounter } from "@/shared/config/types/ui";
import { IBasketGoods, IGoods } from "@/shared/config/types/goods";
import { PulseLoader } from "../pulse-loader";
import { selectIsAuth } from "@/shared/stores/auth";
import { addGoodsNoteAuth, updateGoodsNoteAuth } from "@/shared/stores/basket";
import { updateCountInStorage } from "@/shared/utils/updateCountInStorage";

const Counter = ({
  count,
  className,
  product,
  setCount,
  totalCount,
  initialCount,
  updateCountAsync,
  disabled = false,
  oneCurrentCartItemCount,
}: IUICounter) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isStateSpinner, setIsStateSpinner] = React.useState(false);
  const currentTotalCount =
    (product as IGoods)?.isCount ||
    (product as IBasketGoods)?.quantityStock ||
    totalCount;
  const currentInitialCount =
    (product as IBasketGoods)?.count || initialCount || 1;
  const isAuth = useSelector(selectIsAuth);

  const updateRequestCount = (count: number) => {
    const basket = updateCountInStorage(
      count,
      (product as IBasketGoods)?.clientId
    );
    if (!isAuth) {
      dispatch(addGoodsNoteAuth(basket));
      return;
    }
    const accessToken = JSON.parse(
      localStorage.getItem("tokens") as string
    ).accessToken;
    dispatch(
      updateCountBasketThunk({
        id: product._id as string,
        count: count,
        jwt: accessToken,
        setSpinner: setIsStateSpinner,
      })
    );
  };

  useEffect(
    () => setCount(currentInitialCount),
    [currentInitialCount, setCount]
  );

  const handlerClickBtn = async (value: 1 | -1) => {
    setCount(count + value);

    if (updateCountAsync) {
      updateRequestCount(count + value);
    }
  };

  return (
    <div
      className={cls(style.root, className, {
        [style.root__disabled]: disabled,
      })}
    >
      {!disabled ? (
        <>
          <button
            className="btn-reset"
            title="Убрать одну единицу товара"
            disabled={count === 1 || isStateSpinner}
            onClick={() => handlerClickBtn(-1)}
          >
            <Icon className={style.root__minus} name="common/minus" />
            <span className="visually-hidden">Убрать одну единицу товара</span>
          </button>
          <span className={style.root__quantity}>
            {!isStateSpinner ? (
              count || currentInitialCount
            ) : (
              <PulseLoader size={6} color="#ffffff" gap={1.5} />
            )}
          </span>
          <button
            className="btn-reset"
            title="Увеличить количество на одну единицу товара"
            disabled={count === currentTotalCount || isStateSpinner}
            onClick={() => handlerClickBtn(1)}
          >
            <Icon className={style.root__plus} name="common/plus" />
            <span className="visually-hidden">
              Увеличить количество на одну единицу товара
            </span>
          </button>
        </>
      ) : (
        <span className={style.root__quantity}>
          Всего в корзине: {oneCurrentCartItemCount}
        </span>
      )}
    </div>
  );
};

export default Counter;

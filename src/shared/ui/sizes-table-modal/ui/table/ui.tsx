import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryProductSizesTable } from "../../store";
import style from "./table.module.scss";
import { IBasketGoods, INewSizeClothes } from "@/shared/config/types/goods";
import {
  selectSizes,
  selectSizesTableState,
  setSelectedSize,
} from "../../store/slice";
import cls from "classnames";
import { de } from "@faker-js/faker";
import { selectCurrentProductAddBusketState } from "@/shared/stores/current-product-add-busket";
import Icon from "@/shared/ui/icon";
import { TooltipCountBasketItem } from "@/shared/ui/tooltip-count-basket-item";

const Table = ({ productBasket }: { productBasket?: IBasketGoods[] }) => {
  const sizes = useSelector(selectSizes);
  const categoryProduct = useSelector(selectCategoryProductSizesTable);
  //   const [isActiveRow, setIsActiveRow] = useState<boolean[]>(
  //     Array(product?.sizes?.length).fill(false)
  const isOpenModal = useSelector(selectSizesTableState);
  const dispatch = useDispatch();
  const [isActiveRow, setIsActiveRow] = useState<boolean[]>(
    Array(sizes?.length).fill(false)
  );

  useEffect(() => {
    if (!isOpenModal) {
      dispatch(setSelectedSize(""));
      setIsActiveRow([]);
    }
  }, [dispatch, isOpenModal]);

  const saveSizes = (
    e: React.MouseEvent<HTMLTableRowElement>,
    size: string,
    indexRow: number
  ) => {
    e.stopPropagation();
    console.log(isActiveRow[indexRow]);
    let copy = [...isActiveRow];

    if (isActiveRow[indexRow]) {
      dispatch(setSelectedSize(""));
      copy[indexRow] = false;
      setIsActiveRow(copy);
      return;
    }
    copy[indexRow] = true;

    setIsActiveRow(copy.map((_, index) => index === indexRow));

    dispatch(setSelectedSize(size));
  };

  return (
    <table className={style.root}>
      {categoryProduct === "accessories" ? (
        <>
          <thead className={style.root__header}>
            <tr className={style.root__header__row}>
              <th>Размер производителя</th>
            </tr>
          </thead>
          <tbody className={style.root__body}>
            {sizes?.map((size, index) => (
              <tr
                className={cls(style.root__body__row, {
                  [style.isActive]: isActiveRow[index],
                })}
                key={index}
                onClick={(e) => saveSizes(e, size.size, index)}
              >
                <td>
                  {size.size.toUpperCase()}
                  <TooltipCountBasketItem
                    sizes={size.size}
                    productBasket={productBasket}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </>
      ) : (
        <>
          <thead className={style.root__header}>
            <tr className={style.root__header__row}>
              <th>Российский размер</th>
              <th>Размер производителя</th>
              <th>Обхват груди, в см</th>
              <th>Обхват талии, в см</th>
              <th>Обхват бедер, в см</th>
            </tr>
          </thead>
          <tbody className={style.root__body}>
            {sizes?.map((size, index) => {
              const newSize = size as INewSizeClothes;

              return (
                <tr
                  className={cls(style.root__body__row, {
                    [style.isActive]: isActiveRow[index],
                  })}
                  key={index}
                  data-disabled={!newSize.isHas}
                  //   onClick={s}
                  onClick={(e) => saveSizes(e, newSize.size, index)}
                >
                  <td> {newSize.ruSize}</td>
                  <td>{newSize.size.toUpperCase()}</td>
                  <td>{newSize.chest_circumference}</td>
                  <td>{newSize.waist_circumference}</td>
                  <td>
                    {newSize.hip_circumference}{" "}
                    <TooltipCountBasketItem
                      sizes={newSize.size}
                      productBasket={productBasket}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
};

export default Table;

import { IBasketGoods, IGoods, TSize } from "@/shared/config/types/goods";
import React, { useState } from "react";
import style from "./sizes-list-checkbox.module.scss";
import { TooltipCountBasketItem } from "../tooltip-count-basket-item";
import cls from "classnames";
import { useDispatch } from "react-redux";
import { set } from "mongoose";
import { setSelectedSize } from "../sizes-table-modal/store";

interface ISizesListCheckBox {
  sizesData: TSize[];
  product: IBasketGoods[];
  classname?: string;
}

const SizesListCheckBox = ({
  sizesData,
  product,
  classname,
}: ISizesListCheckBox) => {
  const dispatch = useDispatch();

  const sizes = sizesData.map((size, index) => ({
    name: Object.keys(size)[0],
    isHas: Object.values(size)[0],
  }));

  const [isSelectedBtn, setIsSelectedBtn] = useState(
    Array(sizes.length).fill(false)
  );

  const handleClick = (index: number, size: string) => {
    let newIsSelectedBtn = isSelectedBtn;
    const stateBtn = isSelectedBtn[index];
    newIsSelectedBtn.fill(false);
    newIsSelectedBtn[index] = stateBtn ? false : true;

    dispatch(setSelectedSize(newIsSelectedBtn[index] ? size : ""));

    setIsSelectedBtn(newIsSelectedBtn);
  };
  return (
    <div className={cls(style.root, classname)}>
      {sizes.map((size, index) => (
        <button
          className={cls(style.root__item, "btn-reset", {
            [style.isSelected]: size.isHas && isSelectedBtn[index],
          })}
          key={size.name}
          disabled={!size.isHas}
          onClick={() => handleClick(index, size.name)}
          title={`Выбрать размер ${size.name.toLocaleUpperCase()}`}
        >
          <span>{size.name?.toLocaleUpperCase()}</span>
          <TooltipCountBasketItem
            productBasket={product}
            sizes={size.name}
            hasIcon={false}
          />
        </button>
      ))}
    </div>
  );
};

export default SizesListCheckBox;

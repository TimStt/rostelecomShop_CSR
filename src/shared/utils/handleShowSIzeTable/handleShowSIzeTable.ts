import { productNotSizes } from "@/shared/config/constants/product-not-sizes";
import { IGoods } from "@/shared/config/types/goods";
import { selectCurrentProductAddBusketState } from "@/shared/stores/current-product-add-busket";
import { makeStore } from "@/shared/stores/store";
import {
  setProduct,
  toggleSizesTable,
} from "@/shared/ui/sizes-table-modal/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useHandleShowSIzeTable = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectCurrentProductAddBusketState);

  useEffect(() => {
    if (!currentProduct || productNotSizes.includes(currentProduct.type))
      return;
    dispatch(setProduct(currentProduct as IGoods));
  }, [currentProduct, dispatch]);

  return () => {
    dispatch(toggleSizesTable(true));
  };
};

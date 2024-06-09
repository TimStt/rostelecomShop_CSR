"use client";

import { productNotSizes } from "@/shared/config/constants/product-not-sizes";
import { IGoods } from "@/shared/config/types/goods";
import { count } from "console";
import { useAddProductBasketAuth } from "../addProductBasket";
import { useDispatch } from "react-redux";
import { toggleSizesTable } from "@/shared/ui/sizes-table-modal/store";
import { tr } from "@faker-js/faker";
import { useHandleShowSIzeTable } from "../handleShowSIzeTable";
import { useCallback } from "react";

export const useAddProductBySizeTable = (
  product: IGoods,
  setSpinner: (state: boolean) => void,
  count: number,
  selectedSize: string = ""
) => {
  const showSizesTable = useHandleShowSIzeTable();
  const addProductNoteSizesByAuth = useAddProductBasketAuth({
    product,
    count,
    setSpinner,
  });

  const addProductBasketSizesAuth = useAddProductBasketAuth({
    product,
    count,
    setSpinner,
    selectedSizes: selectedSize,
  });

  return useCallback(() => {
    if (productNotSizes.includes(product.type)) {
      addProductNoteSizesByAuth();
      return;
    }
    if (selectedSize) {
      addProductBasketSizesAuth();
      console.log("trigger  sizetable selected size");
      return;
    }
    showSizesTable();
  }, [
    product?.type,
    selectedSize,
    showSizesTable,
    addProductNoteSizesByAuth,
    addProductBasketSizesAuth,
  ]);
};

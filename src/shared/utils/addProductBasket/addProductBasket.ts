"use client";
import { IBasketGoods, IGoods } from "@/shared/config/types/goods";
import { useUserAuth } from "@/shared/lib/auth/utils/isUserAuth";
import { addGoodsNoteAuth } from "@/shared/stores/basket";
import { create } from "domain";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addProductsThunk } from "@/shared/stores/basketAuth/slice";
import { selectUser } from "@/shared/stores/user";
import { useGetStateOnLocalStorage } from "../useGetStateOnLocalStorage";
import { use, useCallback } from "react";

interface IAddProductBasketAuth {
  product: IGoods;
  count: number;

  setSpinner: (state: boolean) => void;
  selectedSizes?: string;
}

interface IBasketAddProduct {
  product: IGoods;
  selectedSizes: string;

  count: number;
  isToast?: boolean;
}

export const useAddProductBasket = ({
  product,
  selectedSizes,
  count,
  isToast = true,
}: IBasketAddProduct) => {
  const dispatch = useDispatch<AppDispatch>();

  let basket =
    typeof localStorage !== "undefined"
      ? (JSON.parse(
          localStorage?.getItem("basket") as string
        ) as unknown as IBasketGoods[])
      : [];

  if (!basket) {
    basket = [];
  }
  const isAuth = useUserAuth();
  const isHasProduct = basket.find(
    (basketProduct) =>
      basketProduct?.productId === product?._id &&
      basketProduct.size === selectedSizes
  );

  let clientId = Math.random().toString(36).substring(2, 15);

  return () => {
    if (isHasProduct) {
      const countUpdated =
        isHasProduct.count !== count ? count : isHasProduct.count + 1;

      const newBasket = basket.map((basketProduct) =>
        isHasProduct === basketProduct
          ? {
              ...basketProduct,
              count: countUpdated,
            }
          : basketProduct
      );

      basket = newBasket;
      clientId = isHasProduct.clientId;
    } else {
      basket = [
        ...basket,
        {
          name: product.name,
          price: product.price,
          count,
          size: selectedSizes,
          clientId: clientId,
          quantityStock: product.isCount || 0,
          productId: product?._id,
          image: product.images[0],
          totalPrice: product.price,
          inStock: false,
          color: product.characteristics?.color ?? "",
          category: product.category,
        },
      ];
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log("trigger  handlernByNoteAuth");
    if (isToast) {
      toast.success("Добавлено в корзину");
    }

    !isAuth && dispatch(addGoodsNoteAuth(basket));

    return clientId;
  };
};

export const useAddProductBasketAuth = ({
  product,
  count,
  setSpinner,
  selectedSizes = "",
}: IAddProductBasketAuth) => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useUserAuth();
  const user = useSelector(selectUser);
  const handlerByNoteAuth = useAddProductBasket({
    product,
    selectedSizes,
    count,
    isToast: true,
  });

  const handlerByAuth = useAddProductBasket({
    product,
    selectedSizes,
    count,
    isToast: false,
  });

  return useCallback(() => {
    if (!isAuth) {
      handlerByNoteAuth();
      return;
    }

    const accessToken = JSON.parse(localStorage.getItem("tokens") as string)
      .accessToken as string;

    const clientId = handlerByAuth();

    dispatch(
      addProductsThunk({
        jwt: accessToken,
        setSpinner,
        productId: product?._id,
        count: count,
        sizes: selectedSizes,
        clientId: clientId,
        userId: user?._id as string,
        category: product.category,
      })
    );
  }, [
    isAuth,
    handlerByAuth,
    dispatch,
    setSpinner,
    product?._id,
    product?.category,
    count,
    selectedSizes,
    user?._id,
    handlerByNoteAuth,
  ]);
};

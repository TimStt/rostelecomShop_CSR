import { ProductCardPage } from "@/widgets/product-card-page";
import { selectIsProductOne } from "@/widgets/product-card-page/store/slice";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { isGoods: product } = useSelector(selectIsProductOne);
  return (
    <>
      <Head>
        <title>{product?.name || "Карточка товара"} | Rostelecom Shop</title>
        <meta
          name="description"
          content={product?.description || "Карточка товара"}
        />
      </Head>
      <ProductCardPage />
    </>
  );
};

export default ProductPage;

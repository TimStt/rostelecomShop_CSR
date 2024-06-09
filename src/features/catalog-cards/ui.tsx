import Card from "@/shared/ui/card/ui";

import React from "react";

import { IGoodsList } from "@/shared/config/types/goods/types";

export const CatalogCards: React.FC<{ goods: IGoodsList }> = ({ goods }) => {
  return (
    <>
      {goods.map((product) => (
        <Card key={`${product._id} ${product.type}`} {...product} />
      ))}
    </>
  );
};

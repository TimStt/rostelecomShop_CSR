import { selectCurrentProductAddBusketState } from "@/shared/stores/current-product-add-busket";
import { useSelector } from "react-redux";

export const useCurrentProduct = () => {
  const currentProduct = useSelector(selectCurrentProductAddBusketState);

  return currentProduct;
};

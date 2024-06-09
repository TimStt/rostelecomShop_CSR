import { useSelector } from "react-redux";
import { useUserAuth } from "../isUserAuth";
import { selectBasket } from "@/shared/stores/basket";
import { selectBasketAuth } from "@/shared/stores/basketAuth";

export const useBasketByAuth = () => {
  const isAuth = useUserAuth();
  const basket = useSelector(selectBasket);
  const basketAuth = useSelector(selectBasketAuth);

  return isAuth ? basketAuth : basket;
};

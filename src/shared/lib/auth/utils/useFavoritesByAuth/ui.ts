import { useSelector } from "react-redux";
import { useUserAuth } from "../isUserAuth";
import { selectFavorites } from "@/shared/stores/favorites";
import { selectFavoritesAuth } from "@/shared/stores/favorites-auth";

export const useFavoritesByAuth = () => {
  const isAuth = useUserAuth();
  const favoritesState = useSelector(selectFavorites);
  const favoritesAuthState = useSelector(selectFavoritesAuth);

  return isAuth ? favoritesAuthState : favoritesState;
};

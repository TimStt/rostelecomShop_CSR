import { selectIsAuth, setAuth } from "@/shared/stores/auth";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useUserAuth = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const tokens = JSON.parse(localStorage.getItem("tokens") as string);
    !!tokens && !!tokens?.accessToken
      ? dispatch(setAuth(true))
      : dispatch(setAuth(false));
  }, [dispatch]);

  return isAuth;
};

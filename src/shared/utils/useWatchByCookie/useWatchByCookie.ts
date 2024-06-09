import { useEffect, useState } from "react";

export const useWatchByCookie = (
  cookieName: string,
  setIsWatched: (state: boolean) => void
) => {
  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .find((item) => item.includes(cookieName));
    cookie ? setIsWatched(false) : setTimeout(() => setIsWatched(true), 3000);
  }, [cookieName, setIsWatched]);
};

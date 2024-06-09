import { apiInstance } from "@/shared/config/api/apiinstance";

let isRefreshing = false;
let refreshSubscribers: Array<(newToken: string) => void> = [];

// Добавляет коллбэк в очередь для вызова после обновления токенов
const subscribeTokenRefresh = (cb: (newToken: string) => void) => {
  refreshSubscribers.push(cb);
};

// Вызывает все коллбэки после обновления токенов
const onRefreshed = (newToken: string) => {
  refreshSubscribers.map((cb) => cb(newToken));
  refreshSubscribers = [];
};

// Функция для обновления токенов
export const refreshToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve) => {
      subscribeTokenRefresh(resolve);
    });
  }

  isRefreshing = true;
  const tokens = JSON.parse(localStorage.getItem("tokens") as string);

  try {
    const { data: newTokens } = await apiInstance.post(
      "/api/user/refreshToken",
      {
        jwt: tokens.refreshToken,
      }
    );

    localStorage.setItem("tokens", JSON.stringify(newTokens));
    onRefreshed(newTokens.accessToken);
    isRefreshing = false;
    return newTokens.accessToken;
  } catch (error) {
    isRefreshing = false;
    throw new Error("Failed to refresh token");
  }
};

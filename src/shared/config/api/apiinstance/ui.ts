import { refreshToken } from "@/shared/api/refreshTokenApi/refreshTokenApi";
import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache",
  },
});
apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      apiInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return apiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default apiInstance;

import { IResponseData } from "@/shared/config/types/auth";
import toast from "react-hot-toast";

export const onAuthSuccess = (
  message: string,
  data: {
    accessToken: string;
    refreshToken: string;
  }
) => {
  console.log("onAuthSuccess", data);
  localStorage.setItem("tokens", JSON.stringify(data));

  toast.success(message);
};

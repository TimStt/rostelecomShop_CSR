import { apiInstance } from "@/shared/config/api/apiinstance";
import { IAuth } from "@/shared/config/types/auth";
import { onAuthSuccess } from "@/shared/lib/auth/utils/on-auth-success";

import toast from "react-hot-toast";
import { oauth } from "../oauth";

export const signup = async ({ name, email, password }: IAuth) => {
  try {
    const PATH_ROUTE = "api/user/signup";

    const { data } = await apiInstance.post(PATH_ROUTE, {
      name,
      email,
      password,
    });
    if (data.warningMessage) {
      toast.error(data.warningMessage);
      return;
    }

    onAuthSuccess("Вы успешно зарегистрировались!", data);

    return data;
  } catch (error: any) {
    console.error("signup error: ", error);
    return;
  }
};

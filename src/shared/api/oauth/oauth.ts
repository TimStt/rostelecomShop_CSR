import { apiInstance } from "@/shared/config/api/apiinstance";
import { IAuth } from "@/shared/config/types/auth";
import { onAuthSuccess } from "@/shared/lib/auth/utils/on-auth-success";

export const oauth = async (data: IAuth) => {
  try {
    const PATH_ROUTE = "/api/user/oauth";

    if (!data) {
      throw new Error("email or password is not defined");
    }
    const { data: response } = await apiInstance.post(PATH_ROUTE, data);
    const { email, password } = data;

    if (response.warningMessage) {
      console.log("warningMessage", response.warningMessage);
      return;
    }
    await apiInstance.post("/api/user/email", {
      email,
      password,
    });

    onAuthSuccess("Вы успешно авторизовались!", response);

    return data;
  } catch (error) {
    console.error("oauth error: ", error);
  }
};

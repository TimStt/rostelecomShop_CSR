import { apiInstance } from "@/shared/config/api/apiinstance";

export const loginCheck = async (token: string) => {
  try {
    const { data } = await apiInstance.get("/api/user/checkLogin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // if (data.error) {
    //   await handleJwtError({
    //     errorName: data.error.name,
    //     repeatRequestAfterRefreshData: { functionName: "loginCheck" },
    //   });
    //   return;
    // }

    return data.user;
  } catch (error) {
    new Error((error as Error).message);
  }
};

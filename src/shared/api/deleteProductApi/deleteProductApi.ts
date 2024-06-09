import { apiInstance } from "@/shared/config/api/apiinstance";
import { IBasketDelete } from "@/shared/config/types/goods";
import toast from "react-hot-toast";

export const deleteProductApi = async ({
  id,
  jwt,
  setSpinner,
}: IBasketDelete) => {
  try {
    setSpinner(true);
    const { data } = await apiInstance.delete(`/api/basket/delete?id=${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data.id;
  } catch (error) {
    return { status: 500, message: (error as Error).message };
  } finally {
    setSpinner(false);
    toast.success("Товар удален");
  }
};

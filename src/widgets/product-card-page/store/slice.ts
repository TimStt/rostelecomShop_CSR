import { apiInstance } from "@/shared/config/api/apiinstance";
import { IGoods } from "@/shared/config/types/goods/types";
import {
  PayloadAction,
  Selector,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { REHYDRATE } from "redux-persist";

export const getProductOne = createAsyncThunk(
  "goods/fetchProductOne",
  async ({
    id_product,
    category,
  }: {
    id_product: string;
    category: string;
  }) => {
    const { data: product } = await apiInstance.get(
      `/api/goods/one-product?id_product=${id_product}&category=${category}`
    );

    return product;
  }
);

export interface typeState {
  isGoods: IGoods | null;
  loading: boolean;
}

const initialState: typeState = {
  isGoods: null,
  loading: false,
};

export const productOneSlice = createSlice({
  name: "productOne",
  initialState,
  reducers: {
    getGoodsSave: (state, action: PayloadAction<IGoods>) => {
      state.isGoods = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getProductOne.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductOne.fulfilled, (state, action) => {
        state.loading = false;
        state.isGoods = action.payload;
      })
      .addCase(getProductOne.rejected, (state) => {
        state.loading = false;
        state.isGoods = null;
      });
  },
});

export const selectIsProductOne = (state: RootState) => state.product;

export const { getGoodsSave } = productOneSlice.actions;
export default productOneSlice.reducer;

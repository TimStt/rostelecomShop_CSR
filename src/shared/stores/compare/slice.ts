import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  IBasketGoods,
  IBasketState,
  IFavoritesAndCompareState,
  IGoods,
} from "@/shared/config/types/goods";
import { getProductBasket } from "@/shared/api/getProductBasket";

// export const getProductsThunk = createAsyncThunk(
//   "basketAuth/getProducts",
//   async (jwt: string) => await getProductBasket(jwt)
// );

const initialState: IFavoritesAndCompareState = {
  goods: [],
  loading: false,
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addGoods: (state, action: PayloadAction<IGoods>) => {
      state.goods.push(action.payload);
    },
    removeGoods: (state, action: PayloadAction<IGoods>) => {
      if (!action.payload) return;
      const index = state.goods.findIndex(
        (item) => item._id === action.payload._id
      );
      state.goods.splice(index, 1);
    },
    updateGoods: (state, action: PayloadAction<IGoods>) => {
      const index = state.goods.findIndex(
        (item) => item._id === action.payload._id
      );
      state.goods[index] = action.payload;
    },
  },

  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getProductsThunk.fulfilled, (state, action) => {
  //         state.goods = action.payload;
  //         state.loading = false;
  //       })
  //       .addCase(getProductsThunk.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(getProductsThunk.rejected, (state) => {
  //         state.loading = false;
  //       });
  //   },
});
export const selectCompare = (state: RootState) => state.compare;
export const { addGoods, removeGoods, updateGoods } = compareSlice.actions;

export default compareSlice.reducer;

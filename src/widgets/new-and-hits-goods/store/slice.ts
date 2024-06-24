import { apiInstance } from "@/shared/config/api/apiinstance";
import { IGoodsList } from "@/shared/config/types/goods/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { REHYDRATE } from "redux-persist";

export const getHitsAndNew = createAsyncThunk(
  "hitsAndNew/fetchGoodsGet",
  async () => {
    const { data: goodsHits } = await apiInstance.get("/api/goods/hits");
    const { data: goodsNew } = await apiInstance.get("/api/goods/new");

    return [...goodsHits, ...goodsNew];
  }
);

export interface typeState {
  productData: IGoodsList | [];
  loading: boolean;
}

const initialState: typeState = {
  productData: [],
  loading: false,
};

export const goodsHitsAndNewSlice = createSlice({
  name: "goodsHitsAndNew",
  initialState,
  reducers: {
    getGoodsSave: (state, action: PayloadAction<IGoodsList>) => {
      state.productData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getHitsAndNew.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHitsAndNew.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(getHitsAndNew.rejected, (state) => {
        state.loading = false;
        state.productData = [];
      });
  },
});

export const selectGoodsIsHitsAndNew = (state: RootState) =>
  state.goodsHitsAndNew.productData;

export const selectLoadingHitsAndNew = (state: RootState) =>
  state.goodsHitsAndNew.loading;

export const { getGoodsSave } = goodsHitsAndNewSlice.actions;
export default goodsHitsAndNewSlice.reducer;

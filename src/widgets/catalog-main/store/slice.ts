import { apiInstance } from "@/shared/config/api/apiinstance";
import { IGoodsList } from "@/shared/config/types/goods/types";
import {
  PayloadAction,
  Selector,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { get } from "http";
import { set } from "mongoose";
import { HYDRATE } from "next-redux-wrapper";
import { REHYDRATE } from "redux-persist";

export const goodsfetch = createAsyncThunk("goods/fetchGoodsGet", async () => {
  const { data: goodsHits } = await apiInstance.get("/api/goods/hits");
  const { data: goodsNew } = await apiInstance.get("/api/goods/new");

  return [...goodsHits, ...goodsNew];
});

export interface typeState {
  isGoods: IGoodsList | [];
  count: number;
  limitPage: number;
  loading: boolean;
}

const initialState: typeState = {
  isGoods: [],
  count: 0,
  limitPage: 12,
  loading: false,
};

export const goodsCatalogSlice = createSlice({
  name: "goodsCatalog",
  initialState,
  reducers: {
    getGoodsSave: (state, action: PayloadAction<IGoodsList>) => {
      state.isGoods = action.payload;
    },
    getGoodsSaveCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setLoadingCatalog: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        if (payload.goodsCatalog) {
          state.isGoods = payload.goodsCatalog.isGoods;
          state.count = payload.goodsCatalog.count;
          state.loading = payload.goodsCatalog.loading;
        }
      }
    );
    // .addCase(REHYDRATE, (state, action) => {

    //     state.isGoods = action.payload.goodsHitsAndNew.isGoods;

    // });
  },
});

export const selectIsCatalag: Selector<RootState, typeState> = (state) =>
  state.goodsCatalog;

export const { getGoodsSave, getGoodsSaveCount, setLoadingCatalog } =
  goodsCatalogSlice.actions;
export default goodsCatalogSlice.reducer;

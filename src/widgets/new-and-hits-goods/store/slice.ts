import { apiInstance } from "@/shared/config/api/apiinstance";
import { IGoodsList } from "@/shared/config/types/goods/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { REHYDRATE } from "redux-persist";

export const getHitsAndNew = createAsyncThunk(
  "goods/fetchGoodsGet",
  async () => {
    const { data: goodsHits } = await apiInstance.get("/api/goods/hits");
    const { data: goodsNew } = await apiInstance.get("/api/goods/new");

    return [...goodsHits, ...goodsNew];
  }
);

export interface typeState {
  isGoods: IGoodsList | [];
  loading: boolean;
}

const initialState: typeState = {
  isGoods: [],
  loading: false,
};

export const goodsHitsAndNewSlice = createSlice({
  name: "goodsHitsAndNew",
  initialState,
  reducers: {
    getGoodsSave: (state, action: PayloadAction<IGoodsList>) => {
      state.isGoods = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
        HYDRATE,
        (state, { payload }) => {
          if (payload.goodsHitsAndNew) {
            state.isGoods = payload.goodsHitsAndNew.isGoods;
          }
        }
      )
      .addCase(getHitsAndNew.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHitsAndNew.fulfilled, (state, action) => {
        state.loading = false;
        state.isGoods = action.payload;
      })
      .addCase(getHitsAndNew.rejected, (state) => {
        state.loading = false;
        state.isGoods = [];
      });

    // .addCase(REHYDRATE, (state, action) => {

    //     state.isGoods = action.payload.goodsHitsAndNew.isGoods;

    // });
  },
});

export const selectIsHitsAndNew = (state: RootState) => state.goodsHitsAndNew;

export const { getGoodsSave } = goodsHitsAndNewSlice.actions;
export default goodsHitsAndNewSlice.reducer;

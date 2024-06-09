import { apiInstance } from "@/shared/config/api/apiinstance";
import { IGoodsList } from "@/shared/config/types/goods/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { REHYDRATE } from "redux-persist";

// export const goodsfetch = createAsyncThunk("goods/fetchGoodsGet", async () => {
//   const { data: goodsHits } = await apiInstance.get("/api/goods/hits");
//   const { data: goodsNew } = await apiInstance.get("/api/goods/new");

//   return [...goodsHits, ...goodsNew];
// });

export interface typeState {
  isGoods: IGoodsList | [];
  getStatus: "loading" | "success" | "error";
}

const initialState: typeState = {
  isGoods: [],
  getStatus: "loading",
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
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        if (payload.goodsHitsAndNew) {
          state.isGoods = payload.goodsHitsAndNew.isGoods;
        }
      }
    );
    // .addCase(REHYDRATE, (state, action) => {

    //     state.isGoods = action.payload.goodsHitsAndNew.isGoods;

    // });
  },
});

export const selectIsGoods = (state: RootState) =>
  state.goodsHitsAndNew.isGoods;

export const { getGoodsSave } = goodsHitsAndNewSlice.actions;
export default goodsHitsAndNewSlice.reducer;

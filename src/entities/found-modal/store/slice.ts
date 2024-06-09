import { getProductFound } from "@/shared/api/get-product-found/get-product-found";
import { IFoundAllGoodsApi, IGoods } from "@/shared/config/types/goods";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFoundedProductsThunk = createAsyncThunk(
  "found/getFoundedProducts",
  async ({ value, type, category }: IFoundAllGoodsApi) => {
    return await getProductFound({ value, type, category });
  }
);

export interface typeState {
  isOpenModal: boolean;
  foundedProducts: IGoods[];
  loading: boolean;
  searchValue: string;
  type: string;
  category: string;
}

const initialState: typeState = {
  isOpenModal: false,
  foundedProducts: [],
  loading: false,
  searchValue: "",
  type: "",
  category: "",
};

export const foundSlice = createSlice({
  name: "found",
  initialState,
  reducers: {
    toggleModalFound: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setFoundedProducts: (state, action: PayloadAction<IGoods[]>) => {
      state.foundedProducts = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setLoadingFound: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoundedProductsThunk.fulfilled, (state, action) => {
        state.foundedProducts = action.payload;
        state.loading = false;
      })
      .addCase(getFoundedProductsThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getFoundedProductsThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectModalFound = (state: RootState) => state.found;

export const {
  toggleModalFound,
  setFoundedProducts,
  setSearchValue,
  setLoadingFound,
  setType,
  setCategory,
} = foundSlice.actions;
export default foundSlice.reducer;

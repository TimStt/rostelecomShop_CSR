import { IGoods } from "@/shared/config/types/goods";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IQuickViewModalState {
  isOpen: boolean;
  product: IGoods | null;
}

const initialState: IQuickViewModalState = {
  isOpen: false,
  product: null,
};

export const quickViewModalSlice = createSlice({
  name: "quickViewModal",
  initialState,
  reducers: {
    toggleModalQuik: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setProduct: (state, action: PayloadAction<IGoods>) => {
      state.product = action.payload;
    },
  },
});

export const { toggleModalQuik, setProduct } = quickViewModalSlice.actions;

export const selectModalQuickState = (state: RootState) =>
  state.quickViewModal.isOpen;

export const selectProductQuick = (state: RootState) =>
  state.quickViewModal.product;

export default quickViewModalSlice.reducer;

import { setItemLocalStorage } from "@/shared/utils/setItemLocalStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getStorage from "redux-persist/es/storage/getStorage";

export interface typeState {
  isOpenModal: boolean;
}

const initialState: typeState = {
  isOpenModal: false,
};

export const menuModalSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleModalMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
      setItemLocalStorage("isOpenMenuModal", action.payload);
    },
  },
});

export const selectIsModal = (state: RootState) => state.menuModal.isOpenModal;

export const { toggleModalMenu } = menuModalSlice.actions;
export default menuModalSlice.reducer;

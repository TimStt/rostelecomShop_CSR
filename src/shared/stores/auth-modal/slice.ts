import { IUser } from "@/shared/config/types/user/types";
import { signInThunk, signOauthThunk } from "@/shared/stores/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const globalAuthSlice = createSlice({
  name: "globalAuth",
  initialState: {
    isOpenModal: false,
    user: {},
  },
  reducers: {
    toggleStateModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state) => {
      state.isOpenModal = false;
    });
    builder.addCase(signOauthThunk.fulfilled, (state) => {
      state.isOpenModal = false;
    });
  },
});

export const selectOpenModal = (state: RootState) =>
  state.globalAuth.isOpenModal;

export const { toggleStateModal } = globalAuthSlice.actions;

export default globalAuthSlice.reducer;

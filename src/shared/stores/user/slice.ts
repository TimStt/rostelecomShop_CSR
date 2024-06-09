import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { IUser } from "@/shared/config/types/user/types";
import { loginCheckThunk } from "../auth/slice";

interface RootState {
  user: IUser | null;
}

const initialState: RootState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginCheckThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
export const selectUser: Selector<RootState, IUser | null> = (state) =>
  state.user;
export const { setUser } = userSlice.actions;

export default userSlice.reducer;

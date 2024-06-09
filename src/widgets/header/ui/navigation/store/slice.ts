import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPopups {
  basket?: boolean;
  profile?: boolean;
}

export const navigationSlice = createSlice({
  name: "navigation_popups",
  initialState: {
    statesPopups: {
      basket: false,
      profile: false,
    },
  },
  reducers: {
    togglePopups: (state, action: PayloadAction<IPopups>) => {
      state.statesPopups = { ...state.statesPopups, ...action.payload };
    },
  },
});

export const selectStatesPopups = (state: RootState) =>
  state.navigation_popups.statesPopups;

export const { togglePopups } = navigationSlice.actions;
export const selectNavigation = (state: RootState) => state.navigation_popups;

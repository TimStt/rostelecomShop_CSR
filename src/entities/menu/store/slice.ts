import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { numberOfDropDown } from "../item-menu.data";
import { set } from "mongoose";
import { setItemLocalStorage } from "@/shared/utils/setItemLocalStorage";

export interface typeState {
  isOpenMenus: Record<string, boolean> | null;
}

const initialState: typeState = {
  isOpenMenus: {},
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleStateMenus: (state, action: PayloadAction<{ keySelect: string }>) => {
      const { keySelect } = action.payload;
      const level = keySelect.split("_")[1];

      let copyIsOpenMenus = { ...state.isOpenMenus };

      copyIsOpenMenus = Object.entries(copyIsOpenMenus).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: key.includes(level) && keySelect !== key ? false : value,
        }),

        {}
      );

      copyIsOpenMenus[keySelect] = !copyIsOpenMenus[keySelect];

      setItemLocalStorage("isOpenMenusCatalog", copyIsOpenMenus);

      state.isOpenMenus = copyIsOpenMenus;
    },
    closeAllMenus: (state) => {
      closeMenus(state);
    },

    setIsOpenMenus: (state, action: PayloadAction<Record<string, boolean>>) => {
      state.isOpenMenus = action.payload;
    },
  },
});

const closeMenus = (state: typeState) => {
  let copyIsOpenMenus = { ...state.isOpenMenus };
  copyIsOpenMenus = Object.keys(copyIsOpenMenus).reduce(
    (acc, key) => ({
      ...acc,
      [key]: false,
    }),

    {}
  );
  state.isOpenMenus = copyIsOpenMenus;

  localStorage.setItem("isOpenMenusCatalog", JSON.stringify(copyIsOpenMenus));
};

export const selectIsMenu = (state: RootState) => state.menu.isOpenMenus;

export const { toggleStateMenus, closeAllMenus, setIsOpenMenus } =
  menuSlice.actions;
export default menuSlice.reducer;

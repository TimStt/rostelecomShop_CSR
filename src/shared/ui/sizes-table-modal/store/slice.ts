import {
  IGoods,
  INewSizeAccessories,
  INewSizeClothes,
  TSize,
} from "@/shared/config/types/goods";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sizesInfo } from "../sizes.data";
import { set } from "mongoose";
import { setServers } from "dns";

export type ModifierGoods = Omit<IGoods, "sizes"> & {
  sizes?: INewSizeClothes[] | INewSizeAccessories[];
};

export interface ISizesTableState {
  isOpen: boolean;
  productCategory: IGoods["category"] | "";
  sizes: INewSizeClothes[] | INewSizeAccessories[];
  selectedSize: string;
}

const initialState: ISizesTableState = {
  isOpen: false,
  productCategory: "",
  selectedSize: "",
  sizes: [],
};

export const sizesTableModalSlice = createSlice({
  name: "sizesTableModal",
  initialState,
  reducers: {
    toggleSizesTable: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setProduct: (state, action: PayloadAction<IGoods>) => {
      const { sizes, category } = action.payload;
      const sizesNew = sizes?.map((size, index) => ({
        ...sizesInfo[category as keyof typeof sizesInfo][index],
        size: Object.keys(size)[0],
        isHas: Object.values(size)[0],
      }));
      state.sizes = sizesNew as unknown as
        | INewSizeClothes[]
        | INewSizeAccessories[];

      state.productCategory = category;
    },
    setSelectedSize: (state, action: PayloadAction<string>) => {
      // const isHas = state.selectedSize.find((size) => size === action.payload);
      // if (isHas) {
      //   state.selectedSize = state.selectedSize.filter(
      //     (size) => size !== action.payload
      //   );
      // }
      state.selectedSize = action.payload;
    },
  },
});

export const { toggleSizesTable, setProduct, setSelectedSize } =
  sizesTableModalSlice.actions;

export const selectSizesTableState = (state: RootState) =>
  state.sizesTableModal.isOpen;
export const selectCategoryProductSizesTable = (state: RootState) =>
  state.sizesTableModal.productCategory;

export const selectSelectedSize = (state: RootState) =>
  state.sizesTableModal.selectedSize;

export const selectSizes = (state: RootState) => state.sizesTableModal.sizes;

export default sizesTableModalSlice.reducer;

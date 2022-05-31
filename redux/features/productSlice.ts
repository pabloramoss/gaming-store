import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IProduct} from "./../../types/index";

interface ProductState {
  cart: IProduct[];
}

const initialState: ProductState = {
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productAdded: (state, action: PayloadAction<IProduct>) => {
      state.cart.push(action.payload);
    },
  },
});

export const {productAdded} = productSlice.actions;

export default productSlice.reducer;

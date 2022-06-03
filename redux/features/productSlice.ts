import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {sortProducts} from "@utils/sortProducts";
import {Product} from "types/Product";
interface ProductState {
  cart: Product[];
  productList: Product[];
}

const initialState: ProductState = {
  cart: [],
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productAdded: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    productRemoved: (state, action: PayloadAction<Product>) => {
      const {id} = action.payload;

      state.cart = state.cart.filter((product) => product.id !== id);
    },
    sortedAscendingProducts: (state) => {
      const productsAsceding = sortProducts("ascending", state.productList);

      state.productList = productsAsceding;
    },
    sortedDescendingProducts: (state) => {
      const productsDesceding = sortProducts("descending", state.productList);

      state.productList = productsDesceding;
    },
    setedProducts: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
  },
});

export const {
  productAdded,
  productRemoved,
  sortedAscendingProducts,
  sortedDescendingProducts,
  setedProducts,
} = productSlice.actions;

export default productSlice.reducer;

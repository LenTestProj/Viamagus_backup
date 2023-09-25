import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/productData";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) ?? productData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push({
        ...action.payload,
        quantity: 0,
      });
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (prod) => prod.name !== action.payload.name
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

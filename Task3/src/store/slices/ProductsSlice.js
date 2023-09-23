import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/productData";

const initialState = {
  products: productData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

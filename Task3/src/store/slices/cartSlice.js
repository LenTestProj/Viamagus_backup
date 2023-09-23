import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // const cartItemIndex=action.payload.cartItemIndex;
      state.cartItems.push({
        ...action.payload,
        quantity: 0,
      });
      state.totalQuantity = state.totalQuantity + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

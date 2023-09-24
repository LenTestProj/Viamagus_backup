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
      const existingCartItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (!existingCartItem) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        const existingCartItemIndex = state.cartItems.findIndex(
          (item) => item.name === action.payload.name
        );
        existingCartItem.quantity++;
        state.cartItems[existingCartItemIndex] = existingCartItem;
      }
      state.totalQuantity = state.totalQuantity + 1;
    },
    removeFromCart(state, action) {
      const existingCartItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      existingCartItem.quantity--;
      if (existingCartItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.cartItems[existingCartItemIndex] = existingCartItem;
      }
      state.totalQuantity = state.totalQuantity - 1;
    },
    deleteItemFromCart(state, action) {
      const existingCartItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      state.totalQuantity = state.totalQuantity - existingCartItem.quantity;
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const { addToCart, removeFromCart, deleteItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

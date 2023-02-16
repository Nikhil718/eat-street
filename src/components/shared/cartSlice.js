import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const newCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newCartItems;
    },
    clearCart: (state) => {
      state.items = [];
    },
    getTotalAmount: (state, action) => {
      const total = state.items.reduce((cartTotal, cartItem) => {
        const { price } = cartItem;
        cartTotal += price;
        return cartTotal;
      }, 0);
      state.cartTotalAmount = total;
    },
  },
});

export const { addItem, removeItem, clearCart, getTotalAmount } =
  cartSlice.actions;
export default cartSlice.reducer;

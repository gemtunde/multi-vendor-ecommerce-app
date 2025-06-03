import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, salePrice, imageUrl, qty } = action.payload;
      //check if items exist in cart
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        //state.push(existingItem);
      } else {
        state.push({ id, title, salePrice, imageUrl, qty });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;

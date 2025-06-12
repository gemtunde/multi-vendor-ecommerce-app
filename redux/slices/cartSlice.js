import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        title,
        salePrice,
        imageUrl,
        qty,
        userId: vendorId,
      } = action.payload;
      //check if items exist in cart
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        //state.push(existingItem);
      } else {
        const newItem = { id, title, salePrice, qty: 1, imageUrl, vendorId };
        state.push(newItem);
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state, newItem]));
        }
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      const newState = state.filter((item) => item.id !== cartId);

      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
        localStorage.setItem("cart", JSON.stringify([...state]));
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
        localStorage.setItem("cart", JSON.stringify([...state]));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;

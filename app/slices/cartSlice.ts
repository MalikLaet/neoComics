import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Comic } from './comicsSlice';

interface CartState {
  items: Comic[];
}

const initialState: CartState = {
  items: [],
};

const localStorageCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
if (localStorageCart) {
  initialState.items = JSON.parse(localStorageCart);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Comic>) {
      const exists = state.items.find((c) => c.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

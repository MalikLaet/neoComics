import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Comic } from './comicsSlice';

interface CartItem extends Comic {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const localStorageCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
if (localStorageCart) {
  initialState.items = JSON.parse(localStorageCart) as CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Comic>) {
      const itemIndex = state.items.findIndex((c) => c.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((c) => c.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((c) => c.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((c) => c.id !== action.payload);
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
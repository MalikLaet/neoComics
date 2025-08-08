import { configureStore } from '@reduxjs/toolkit';
import comicsReducer from '@/app/slices/comicsSlice';
import cartReducer from '@/app/slices/cartSlice';

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

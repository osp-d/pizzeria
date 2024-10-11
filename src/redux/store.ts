import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Cart/cartSlice';
import { productsReducer } from './Products/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

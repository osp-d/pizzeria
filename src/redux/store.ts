import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Cart/cartSlice';
import { pizzaApi } from '@/services/pizzaApi';
import { filterReducer } from './Filter/filterSlice';
import { favoritesReducer } from './Favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(pizzaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types';

type FavoriteProducts = Array<Product>;

const initialState: { favoriteItems: FavoriteProducts } = {
  favoriteItems: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.favoriteItems.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item?.id !== action.payload,
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;

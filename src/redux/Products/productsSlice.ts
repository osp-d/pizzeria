import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types';
import data from '@/assets/tempData.json';

const initialState: { productItems: Array<Product> } = {
  productItems: data,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;

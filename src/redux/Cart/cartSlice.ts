import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
}

interface CartItems {
  inCart: Array<CartItem | undefined>;
  inFavorites: Array<string>;
}

const initialState: { cartItems: CartItems } = {
  cartItems: {
    inCart: [],
    inFavorites: [],
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.cartItems.inCart.push({ id: action.payload, quantity: 1 });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cartItems.inCart = state.cartItems.inCart.filter(
        (item) => item?.id !== action.payload,
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Product, PurchaseProduct } from '@/types';

type PurchaseProducts = Array<PurchaseProduct | undefined>;

interface AddProduct {
  product: Product;
  selectedSize: string;
  quantity: number;
}

interface EditQuantity {
  id: string;
  quantity: number;
}

interface EditSize {
  id: string;
  size: string;
}

const initialState: {
  cartItems: PurchaseProducts;
} = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddProduct>) => {
      state.cartItems.push({
        product: action.payload.product,
        selectedSize: action.payload.selectedSize,
        quantity: action.payload.quantity,
      });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item?.product.id !== action.payload,
      );
    },
    setQuantity: (state, action: PayloadAction<EditQuantity>) => {
      const itemId = state.cartItems.findIndex(
        (item) => item?.product.id === action.payload.id,
      );

      if (state.cartItems[itemId]) {
        state.cartItems[itemId].quantity = action.payload.quantity;
      }
    },
    setSize: (state, action: PayloadAction<EditSize>) => {
      const itemId = state.cartItems.findIndex(
        (item) => item?.product.id === action.payload.id,
      );

      if (state.cartItems[itemId]) {
        state.cartItems[itemId].selectedSize = action.payload.size;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

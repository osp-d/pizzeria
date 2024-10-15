import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { CartItem } from './CartItem';
import { PurchaseProduct } from '@/types';

export function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems.inCart,
  );

  let subtotal = 0;

  if (cartItems) {
    subtotal = cartItems.reduce((acc, item): number => {
      if (item?.selectedSize === '25') {
        return acc + +item.product.price * item.quantity;
      } else if (item?.selectedSize === '30') {
        return acc + +item.product.price * 1.2 * item.quantity;
      } else if (item?.selectedSize === '35') {
        return acc + +item.product.price * 1.4 * item.quantity;
      }
    }, 0);
  }

  const tax = Math.floor(subtotal * 0.12 * 100) / 100;
  const total = subtotal + tax;
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="mb-10 flex flex-col gap-6">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="w-fit rounded-md p-2 transition hover:bg-gray-100"
      >
        <ArrowLeft />
      </div>

      <p className="text-lg font-bold">Shopping Bag</p>

      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
        <div className="flex w-full max-w-screen-md flex-col gap-8">
          {cartItems.map((item) => (
            <CartItem item={item as PurchaseProduct} key={item?.product.id} />
          ))}
        </div>

        <div className="flex h-fit w-full flex-col gap-6 rounded-md border-[1px] border-gray-300 p-10 lg:max-w-96">
          <p className="text-lg font-bold">Order summary</p>
          <p className="text-xl font-bold">{total} KZT</p>
          <div className="flex items-center justify-between">
            <p className="text-base">Subtotal ({totalQuantity})</p>
            <p className="text-base">{subtotal} KZT</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base">VAT (12%)</p>
            <p className="text-base">{tax} KZT</p>
          </div>
          <div className="h-[1px] w-full bg-gray-200" />
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">{total} KZT</p>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-700">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

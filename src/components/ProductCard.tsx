import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { Product } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/redux/Cart/cartSlice';
import { RootState } from '@/redux/store';

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cartItems.inCart);
  const cartStatus = cart.find((item) => item?.id === product.id);

  return (
    <div
      key={product.id}
      className="flex aspect-nineToTen flex-col items-center justify-between rounded-md bg-gray-100 p-5"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className="flex w-full justify-end">
        <Heart
          className={clsx(
            'opacity-0 transition hover:scale-125',
            hovered && 'opacity-100',
          )}
        />
      </div>
      <img src={product.imageUrl} width="120px" />
      <div className="flex aspect-auto w-full items-center justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-bold">{product.title}</p>
          <p className="text-base font-bold">{product.price} KZT</p>
        </div>

        <div
          onClick={() => {
            if (cartStatus) {
              dispatch(cartActions.remove(product.id));
            } else {
              dispatch(cartActions.add(product.id));
            }
          }}
        >
          {cartStatus ? (
            <ShoppingBag className="text-green-600 transition hover:scale-125" />
          ) : (
            <ShoppingBag className="transition hover:scale-125" />
          )}
        </div>
      </div>
    </div>
  );
}

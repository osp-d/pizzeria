import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/redux/Cart/cartSlice';
import { favoritesActions } from '@/redux/Favorites/favoritesSlice';
import clsx from 'clsx';

import { RootState } from '@/redux/store';
import { Product } from '@/types';

import { Heart, ShoppingBag } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const cartStatus = cart.find((item) => item?.product.id === product.id);

  const favorites = useSelector(
    (state: RootState) => state.favorites.favoriteItems,
  );
  const favoriteStatus = favorites.find((item) => item?.id === product.id);

  return (
    <Link
      key={product.id}
      className="flex aspect-nineToTen flex-col items-center justify-between rounded-md bg-gray-100 p-5 text-gray-900 hover:text-gray-900"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      to={`${product.id}`}
    >
      <div
        className="flex w-full justify-end"
        onClick={(event) => {
          event.preventDefault();

          if (favoriteStatus) {
            dispatch(favoritesActions.remove(product.id));
          } else {
            dispatch(favoritesActions.add(product));
          }
        }}
      >
        {favoriteStatus ? (
          <Heart
            fill="red"
            color="red"
            className="transition hover:scale-125"
          />
        ) : (
          <Heart
            className={clsx(
              'opacity-0 transition hover:scale-125',
              hovered && 'opacity-100',
            )}
          />
        )}
      </div>
      <img src={product.imageUrl} width="120px" />
      <div className="flex aspect-auto w-full items-center justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-bold">{product.title}</p>
          <p className="text-base font-bold">{product.price} KZT</p>
        </div>

        <div
          onClick={(event) => {
            event.preventDefault();

            if (cartStatus) {
              dispatch(cartActions.remove(product.id));
            } else {
              dispatch(
                cartActions.add({
                  product: product,
                  selectedSize: '30',
                  quantity: 1,
                }),
              );
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
    </Link>
  );
}

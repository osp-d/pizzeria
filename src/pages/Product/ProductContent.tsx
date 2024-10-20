import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/redux/Cart/cartSlice';
import { favoritesActions } from '@/redux/Favorites/favoritesSlice';
import clsx from 'clsx';

import { Product, PurchaseProduct } from '@/types';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EditQuantity } from '@/components/EditQuantity';
import { Heart, ShoppingBag } from 'lucide-react';

export function ProductContent({
  product,
  favoriteStatus,
  cartStatus,
}: {
  product: Product;
  favoriteStatus: Product | undefined;
  cartStatus: PurchaseProduct | undefined;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [size, setSize] = useState(cartStatus?.selectedSize ?? '30');
  const [quantity, setQuantity] = useState(cartStatus?.quantity ?? 1);
  const [hovered, setHovered] = useState(false);

  let productPrice: number;

  productPrice = +product?.price;

  switch (size) {
    case '25':
      productPrice = +product?.price;
      break;
    case '30':
      productPrice = +product?.price * 1.2;
      break;
    case '35':
      productPrice = +product?.price * 1.4;
      break;
  }

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div
        className="flex aspect-square flex-col items-center gap-4 rounded-md bg-gray-100 p-5 md:max-w-md"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
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
        <img
          src={product.imageUrl}
          alt={product.title}
          width="70%"
          className="m-auto"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-bold">{product.title}</p>
          <div className="w-fit rounded-2xl bg-green-100 px-2 py-[1px] text-sm">
            {product.category}
          </div>
          <div>Rating: {product.rating} / 10</div>

          <Tabs
            defaultValue={`${size}`}
            onValueChange={(value) => {
              setSize(value);

              if (cartStatus) {
                dispatch(cartActions.setSize({ id: product.id, size: value }));
              }
            }}
          >
            <TabsList className="flex w-fit gap-1 bg-gray-100">
              <TabsTrigger
                value={`${product?.sizes[0]}`}
                className="w-16 bg-gray-100"
              >
                {product?.sizes[0]}
              </TabsTrigger>
              <TabsTrigger
                value={`${product?.sizes[1]}`}
                className="w-16 bg-gray-100"
              >
                {product?.sizes[1]}
              </TabsTrigger>
              <TabsTrigger
                value={`${product?.sizes[2]}`}
                className="w-16 bg-gray-100"
              >
                {product?.sizes[2]}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <EditQuantity
            quantityState={quantity}
            setQuantityState={setQuantity}
            productId={product?.id as string}
          />

          <p className="font-bold">
            {productPrice}
            KZT
          </p>
        </div>

        <p>Ingredients: {product.description}</p>

        <div className="flex flex-col gap-2 md:max-w-[300px]">
          <Button
            className="bg-blue-500 py-6 hover:bg-blue-700"
            onClick={() => {
              if (cartStatus) {
                navigate('/cart');
              } else {
                dispatch(
                  cartActions.add({
                    product: product as Product,
                    selectedSize: size,
                    quantity: quantity,
                  }),
                );
                navigate('/cart');
              }
            }}
          >
            Buy Now
          </Button>

          <Button
            variant="outline"
            className="flex gap-2 py-6"
            onClick={() => {
              if (cartStatus) {
                dispatch(cartActions.remove(product.id));
              } else {
                dispatch(
                  cartActions.add({
                    product: product as Product,
                    selectedSize: size,
                    quantity: quantity,
                  }),
                );
              }
            }}
          >
            {cartStatus ? (
              <>
                <ShoppingBag size="16px" />
                Remove from Bag
              </>
            ) : (
              <>
                <ShoppingBag size="16px" />
                Add to Bag
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/redux/Cart/cartSlice';

import { PurchaseProducts } from '@/types';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '../ui/button';
import { ShoppingBag, Trash2 } from 'lucide-react';

export function CartHover({
  cart,
}: {
  cart: {
    cartItems: PurchaseProducts;
  };
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartProductsNum = cart.cartItems.length;

  let subtotal = 0;

  if (cart.cartItems) {
    subtotal = cart.cartItems.reduce((acc, item): number => {
      if (item?.selectedSize === '25') {
        return acc + +item.product.price * item.quantity;
      } else if (item?.selectedSize === '30') {
        return acc + +item.product.price * 1.2 * item.quantity;
      } else if (item?.selectedSize === '35') {
        return acc + +item.product.price * 1.4 * item.quantity;
      }
      return 0;
    }, 0);
  }

  const tax = Math.floor(subtotal * 0.12 * 100) / 100;
  const total = subtotal + tax;

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          onClick={() => {
            navigate('/cart');
          }}
          className="flex items-center"
        >
          <ShoppingBag size="20px" color="white" className="m-2" />
          <div className="my-2 mr-2 font-bold text-white">
            {cartProductsNum}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="min-w-[400px] p-8">
        <div className="flex flex-col gap-6">
          <p className="text-lg font-bold">Shopping Bag</p>

          <div className="h-0.5 bg-gray-100" />

          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((product) => {
              if (product) {
                let productPrice = +product.product.price;

                switch (product.selectedSize) {
                  case '25':
                    productPrice = +product.product.price;
                    break;
                  case '30':
                    productPrice = +product.product.price * 1.2;
                    break;
                  case '35':
                    productPrice = +product.product.price * 1.4;
                    break;
                }

                return (
                  <div
                    key={product.product.id}
                    className="flex h-fit items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Link to={`../store/${product.product.id}`}>
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100">
                          <img
                            src={product.product.imageUrl}
                            alt={product.product.title}
                            className="w-10"
                          />
                        </div>
                      </Link>

                      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-9 lg:flex-col lg:items-start lg:gap-4 mlg:flex-row mlg:items-center mlg:gap-9">
                        <div className="flex min-w-20 flex-col gap-1">
                          <p className="text-md overflow-hidden font-bold">
                            {product.product.title}
                          </p>
                          <p className="text-sm text-blue-500 text-muted-foreground">
                            {product.selectedSize}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Qty: {product.quantity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div
                        onClick={() => {
                          dispatch(cartActions.remove(product.product.id));
                        }}
                        className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200"
                      >
                        <Trash2
                          width="12px"
                          height="12px"
                          className="text-rose-500"
                        />
                      </div>

                      <p className="text-lg font-bold">{productPrice}</p>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <p className="text-muted-foreground">Bag is empty.</p>
          )}

          <div className="h-0.5 bg-gray-100" />

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">{total} KZT</p>
          </div>

          <Button variant="outline" className="hover:border-none">
            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 text-gray-950 hover:text-gray-950"
            >
              <ShoppingBag size="20px" color="#030712" className="m-2" />
              <p className="font-bold">See in Bag</p>
            </Link>
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

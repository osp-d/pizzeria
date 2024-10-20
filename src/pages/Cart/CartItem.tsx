import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '@/redux/Cart/cartSlice';

import { PurchaseProduct } from '@/types';

import { EditQuantity } from '@/components/EditQuantity';
import { Trash2 } from 'lucide-react';

export function CartItem({ item }: { item: PurchaseProduct }) {
  const dispatch = useDispatch();
  const { product } = item;
  const [quantity, setQuantity] = useState(item.quantity);

  let productPrice = +product.price;

  switch (item.selectedSize) {
    case '25':
      productPrice = +product.price;
      break;
    case '30':
      productPrice = +product.price * 1.2;
      break;
    case '35':
      productPrice = +product.price * 1.4;
      break;
  }

  return (
    <div key={product.id} className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to={`../store/${product.id}`}>
          <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-gray-100">
            <img src={product.imageUrl} alt={product.title} className="w-24" />
          </div>
        </Link>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-9 lg:flex-col lg:items-start lg:gap-4 mlg:flex-row mlg:items-center mlg:gap-9">
          <div className="flex min-w-20 flex-col gap-1">
            <p className="text-lg font-bold">{product.title}</p>
            <p className="text-base text-blue-500 text-muted-foreground">
              {item.selectedSize}
            </p>
            <p className="text-base text-muted-foreground">Qty: {quantity}</p>
          </div>

          <EditQuantity
            quantityState={quantity}
            setQuantityState={setQuantity}
            productId={product.id}
          />
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div
          onClick={() => {
            dispatch(cartActions.remove(product.id));
          }}
          className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200"
        >
          <Trash2 width="12px" height="12px" className="text-rose-500" />
        </div>

        <p className="text-lg font-bold">{productPrice * quantity}</p>
      </div>
    </div>
  );
}

import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={product.id}
      className="aspect-nineToTen flex flex-col items-center justify-between rounded-md bg-gray-100 p-5"
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
        <ShoppingBag className="transition hover:scale-125" />
      </div>
    </div>
  );
}

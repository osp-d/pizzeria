import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPizzasQuery } from '@/services/pizzaApi';
import { ProductSkeleton } from './ProductSkeleton';
import { ProductContent } from './ProductContent';

import { RootState } from '@/redux/store';

import { ArrowLeft } from 'lucide-react';

export function ProductContainer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError, error } = useGetPizzasQuery();

  const cartStatus = useSelector(
    (state: RootState) => state.cart.cartItems,
  ).find((item) => item?.product.id === id);

  const favoriteStatus = useSelector(
    (state: RootState) => state.favorites.favoriteItems,
  ).find((item) => item?.id === id);

  let content: React.ReactNode;

  if (isLoading) {
    content = <ProductSkeleton />;
  } else if (isSuccess) {
    const product = data.find((item) => item.id === id);

    if (product) {
      content = (
        <ProductContent
          product={product}
          favoriteStatus={favoriteStatus}
          cartStatus={cartStatus}
        />
      );
    } else {
      content = <div className="text-xl font-bold">Product was not found</div>;
    }
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="w-fit rounded-md p-2 transition hover:bg-gray-100"
      >
        <ArrowLeft />
      </div>
      {content}
    </div>
  );
}

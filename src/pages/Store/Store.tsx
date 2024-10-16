import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { FilterBar } from './FilterBar';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types';
import { useGetPizzasQuery } from '@/services/pizzaApi';
import { StoreSkeleton } from './StoreSkeleton';

export function Store() {
  const { data, isLoading, isSuccess, isError, error } = useGetPizzasQuery();

  let products: Product[] = [];

  let content: React.ReactNode;

  if (isLoading) {
    content = <StoreSkeleton />;
  } else if (isSuccess) {
    products = data.map((item) => ({
      ...item,
      inCart: false,
      orderNum: 1,
      isFavorite: false,
    }));

    content = (
      <div>
        <FilterBar isDisabled={true} />

        <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 mlg:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        <Pagination className="my-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="text-gray-900" href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="text-gray-900" href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="text-gray-900" href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="text-gray-900" href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
}

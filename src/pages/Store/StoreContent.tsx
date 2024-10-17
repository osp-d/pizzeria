import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { FilterBar } from './FilterBar';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types';

import { filterProducts } from '@/utils/filterProducts';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { sortProducts } from '@/utils/sortProducts';

export function StoreContent({ data }: { data: Product[] }) {
  const { searchValue, category, sort } = useSelector(
    (state: RootState) => state.filter,
  );

  const filteredProducts = filterProducts(data, searchValue, category);
  const sortedProducts = sortProducts(filteredProducts, sort);
  const pageNumber = Math.ceil(filteredProducts.length / 12);
  const paginationItems: Array<React.ReactNode> = [];

  for (let i = 2; i <= pageNumber; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <PaginationLink className="text-gray-900" href="#">
          {i}
        </PaginationLink>
      </PaginationItem>,
    );
  }

  return (
    <div>
      <FilterBar isDisabled={false} />

      <p className="pt-4 font-bold">{`Products (${filteredProducts.length})`}</p>

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 mlg:grid-cols-3">
        {sortedProducts !== undefined
          ? sortedProducts.map((product) => (
              <ProductCard product={product as Product} key={product?.id} />
            ))
          : 'No products match the filter'}
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
          {paginationItems}
          <PaginationItem>
            <PaginationNext className="text-gray-900" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

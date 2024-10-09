import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import products from '@/assets/tempData.json';
import { FilterBar } from './FilterBar';
import { ProductCard } from '@/components/ProductCard';

export function Store() {
  return (
    <div>
      <FilterBar />

      <div className="grid grid-cols-3 gap-4 py-6">
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
}

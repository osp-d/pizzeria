import { filterProducts } from '@/utils/filterProducts';
import { sortProducts } from '@/utils/sortProducts';
import { Product } from '@/types';
import { RootState } from '@/redux/store';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FilterBar } from './FilterBar';

import { ProductCard } from '@/components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function StoreContent({ data }: { data: Product[] }) {
  const { searchValue, category, sort, favorites } = useSelector(
    (state: RootState) => state.filter,
  );
  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.favoriteItems,
  );

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 12;

  let selectedData = [...data];

  if (favorites) {
    selectedData = [...favoriteItems];
  }

  const filteredProducts = filterProducts(selectedData, searchValue, category);
  const sortedProducts = sortProducts(filteredProducts, sort);
  const pageNumber = Math.ceil(filteredProducts.length / 12);
  const currentProducts = sortedProducts.slice(itemOffset, endOffset);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 12) % sortedProducts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setItemOffset(0);
  }, [category, searchValue]);

  return (
    <div>
      <FilterBar isDisabled={false} />

      <p className="pt-4 font-bold">{`Products (${filteredProducts.length}) ${favorites ? '- Favorites' : ''}`}</p>

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 mlg:grid-cols-3">
        {currentProducts !== undefined
          ? currentProducts.map((product) => (
              <ProductCard product={product as Product} key={product?.id} />
            ))
          : 'No products match the filter'}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="flex gap-1">
            Next
            <ChevronRight width="16px" />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageNumber}
        previousLabel={
          <div className="flex gap-1">
            <ChevronLeft width="16px" /> Previous
          </div>
        }
        renderOnZeroPageCount={null}
        className="-auto my-6 flex w-full items-center justify-center gap-1"
        previousLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5 text-gray-900"
        pageLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-gray-900"
        activeLinkClassName="border border-input bg-background"
        nextLinkClassName="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 text-gray-900"
      />
    </div>
  );
}

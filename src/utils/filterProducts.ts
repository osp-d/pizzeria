import { Product } from '@/types';

export function filterProducts(
  products: Product[],
  searchValue: string,
  searchCategory: string,
) {
  let filteredProducts: Product[] = products;

  const searchQuery = searchValue.toLowerCase().replace(/\s+/g, '');

  if (searchQuery.length > 0) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery),
    );
  }

  if (searchCategory !== 'all') {
    filteredProducts = filteredProducts.filter((product) =>
      product?.category.includes(searchCategory),
    );
  }

  return filteredProducts;
}

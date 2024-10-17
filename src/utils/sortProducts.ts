import { Product } from '@/types';

export function sortProducts(products: Product[], sortOption: string) {
  const productsCopy = [...products];

  switch (sortOption) {
    case 'alphabet':
      return productsCopy.sort((a, b) => a.title.localeCompare(b.title));
    case 'desc-price':
      return productsCopy.sort((a, b) => +b.price - +a.price);
    case 'asc-price':
      return productsCopy.sort((a, b) => +a.price - +b.price);
    default:
      return products;
  }
}

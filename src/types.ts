export interface Product {
  id: string;
  imageUrl: string;
  title: string;
  sizes: Array<number>;
  price: string;
  category: Array<string>;
  description: string;
  rating: string;
}

export interface PurchaseProduct {
  product: Product;
  selectedSize: string;
  quantity: number;
}

import { Product } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6708b0a88e86a8d9e42fa80d.mockapi.io/api',
  }),
  endpoints: (builder) => ({
    getPizzas: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;

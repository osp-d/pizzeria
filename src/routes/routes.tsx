import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Home } from '@/pages/Home/Home';
import { StoreContainer } from '@/pages/Store/StoreContainer';
import { Cart } from '@/pages/Cart/Cart';
import { ProductContainer } from '@/pages/Product/ProductContainer';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/store',
        element: <StoreContainer />,
      },
      {
        path: '/store/:id',
        element: <ProductContainer />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

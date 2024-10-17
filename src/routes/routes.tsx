import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Home } from '@/pages/Home/Home';
import { StoreContainer } from '@/pages/Store/StoreContainer';
import { Cart } from '@/pages/Cart/Cart';
import { ProductView } from '@/pages/Product/ProductView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        element: <ProductView />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

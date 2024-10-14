import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Home } from '@/pages/Home/Home';
import { Store } from '@/pages/Store/Store';
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
        element: <Store />,
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

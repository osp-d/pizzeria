import { RootState } from '@/redux/store';
import { Heart, Menu, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import { useMedia } from 'react-use';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';

export function NavBar() {
  const cart = useSelector((state: RootState) => state.cart);
  const cartProductsNum = cart.cartItems.inCart.length;

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia('(max-width: 768px', false);

  return (
    <div className="my-6 flex justify-between">
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="mr-2 rounded-sm p-2">
            <Menu />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex max-w-72 flex-col items-start"
          >
            <SheetHeader className="text-lg font-bold">Menu</SheetHeader>
            <div className="h-[1px] w-full bg-gray-300" />
            <Link
              to="/"
              className="border-b-2 border-transparent pt-2 font-bold text-gray-900 transition hover:border-gray-900 hover:text-gray-900 active:border-none active:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/store"
              className="border-b-2 border-transparent pt-2 font-bold text-gray-900 transition hover:border-gray-900 hover:text-gray-900 active:border-none active:bg-gray-50"
            >
              Store
            </Link>
          </SheetContent>
        </Sheet>
      ) : (
        <div className="flex gap-2">
          <Link to="/" className="px-4 py-2 text-gray-900 hover:text-gray-500">
            Logo
          </Link>
          <Link
            to="/"
            className="border-b-2 border-transparent px-4 pt-2 font-bold text-gray-900 transition hover:border-gray-900 hover:text-gray-900 active:border-none active:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/store"
            className="border-b-2 border-transparent px-4 pt-2 font-bold text-gray-900 transition hover:border-gray-900 hover:text-gray-900 active:border-none active:bg-gray-50"
          >
            Store
          </Link>
        </div>
      )}

      <div className="flex gap-3">
        <Search />

        <div className="flex items-center gap-1 rounded-full bg-gray-900 px-2">
          <div className="flex items-center">
            <Heart size="20px" color="white" className="m-2" />
            <div className="my-2 mr-2 font-bold text-white">0</div>
          </div>
          <div className="h-6 w-[1px] rounded-full bg-gray-300" />
          <Link to="/cart" className="flex items-center">
            <ShoppingBag size="20px" color="white" className="m-2" />
            <div className="my-2 mr-2 font-bold text-white">
              {cartProductsNum}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

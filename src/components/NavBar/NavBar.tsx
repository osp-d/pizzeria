import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '@/redux/Filter/filterSlice';
import { useMedia } from 'react-use';
import { Search } from './Search';
import { CartHover } from './CartHover';

import { RootState } from '@/redux/store';

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { Heart, Menu } from 'lucide-react';

export function NavBar() {
  const cart = useSelector((state: RootState) => state.cart);

  const favorites = useSelector((state: RootState) => state.favorites);
  const favoriteProductsNum = favorites.favoriteItems.length;

  const favoritesIsOn = useSelector(
    (state: RootState) => state.filter.favorites,
  );

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia('(max-width: 768px', false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex items-center justify-between">
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
        <div className="flex gap-10">
          <Link
            to="/"
            className="p-0 font-sansLogo text-3xl font-bold text-gray-900 hover:text-gray-500"
          >
            Pizzeria.
          </Link>

          <div className="flex gap-2">
            <Link
              to="/"
              className="flex items-center border-b-2 border-transparent px-4 font-bold text-gray-900 transition hover:border-gray-900 hover:text-gray-900 active:border-none active:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/store"
              className="flex items-center border-b-2 border-transparent px-4 font-bold text-gray-900 transition hover:border-gray-900 hover:text-gray-900 active:border-none active:bg-gray-50"
            >
              Store
            </Link>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Search />

        <div className="flex items-center gap-1 rounded-full bg-gray-900 px-2">
          <div
            onClick={() => {
              if (location.pathname !== '/store') {
                dispatch(filterActions.setFavorites(true));
                navigate('/store');
              } else {
                if (favoritesIsOn) {
                  dispatch(filterActions.setFavorites(false));
                } else {
                  dispatch(filterActions.setFavorites(true));
                }
              }
            }}
          >
            {favoritesIsOn ? (
              <div className="flex items-center">
                <Heart size="20px" color="white" fill="white" className="m-2" />
                <div className="my-2 mr-2 font-bold text-white">
                  {favoriteProductsNum}
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <Heart size="20px" color="white" className="m-2" />
                <div className="my-2 mr-2 font-bold text-white">
                  {favoriteProductsNum}
                </div>
              </div>
            )}
          </div>

          <div className="h-6 w-[1px] rounded-full bg-gray-300" />

          <CartHover cart={cart} />
        </div>
      </div>
    </div>
  );
}

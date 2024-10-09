import { Heart, Search, ShoppingBag } from 'lucide-react';

export function NavBar() {
  return (
    <div className="my-6 flex justify-between">
      <div className="flex gap-2">
        <div className="px-4 py-2">Logo</div>
        <div className="border-b-2 border-transparent px-4 pt-2 font-bold transition hover:border-gray-900 active:border-none active:bg-gray-50">
          Home
        </div>
        <div className="border-b-2 border-transparent px-4 pt-2 font-bold transition hover:border-gray-900 active:border-none active:bg-gray-50">
          Store
        </div>
      </div>
      <div className="flex gap-3">
        <form className="flex items-center gap-1 rounded-full bg-gray-50 px-4">
          <Search size="20px" className="my-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-40 bg-gray-50 p-2 font-bold text-muted-foreground focus:outline-none"
          />
        </form>
        <div className="flex items-center gap-1 rounded-full bg-gray-700 px-2">
          <div className="flex items-center">
            <Heart size="20px" color="white" className="m-2" />
            <div className="my-2 mr-2 font-bold text-white">0</div>
          </div>
          <div className="h-6 w-[1px] rounded-full bg-gray-300" />
          <div className="flex items-center">
            <ShoppingBag size="20px" color="white" className="m-2" />
            <div className="my-2 mr-2 font-bold text-white">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

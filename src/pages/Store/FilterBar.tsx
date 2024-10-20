import { useState } from 'react';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '@/redux/Filter/filterSlice';
import { cn } from '@/lib/utils';

import { RootState } from '@/redux/store';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Filter } from 'lucide-react';

export function FilterBar({ isDisabled }: { isDisabled: boolean }) {
  const dispatch = useDispatch();

  const isMobile = useMedia('(max-width: 1024px', false);
  const [isOpen, setIsOpen] = useState(false);

  const initialCategory = useSelector(
    (state: RootState) => state.filter.category,
  );
  const [categoryState, setCategoryState] = useState(initialCategory);

  const initialSort = useSelector((state: RootState) => state.filter.sort);
  const [sortState, setSortState] = useState(initialSort);

  const handleCategoryChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if ('value' in event.target) {
      const selectedCategory = event.target.value;
      setCategoryState(selectedCategory);
      dispatch(filterActions.setCategory(selectedCategory));
    }
  };

  const handleSelectChange = (event: string) => {
    setSortState(event);
    dispatch(filterActions.setSort(event));
  };

  return (
    <div className="flex items-center justify-between">
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="rounded-sm p-2">
            <Filter />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex max-w-72 flex-col items-start"
          >
            <SheetHeader className="text-lg font-bold">
              Filter products
            </SheetHeader>
            <div className="h-[1px] w-full bg-gray-300" />
            <div className="flex flex-col gap-3">
              <p className="font-bold">Categories</p>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="radio"
                  value="all"
                  id="all"
                  checked={categoryState === 'all'}
                  onChange={handleCategoryChange}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="radio"
                  value="meat"
                  id="meat"
                  checked={categoryState === 'meat'}
                  onChange={handleCategoryChange}
                />
                <Label htmlFor="meat">Meat</Label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="radio"
                  value="vegetarian"
                  id="vegetarian"
                  checked={categoryState === 'vegetarian'}
                  onChange={handleCategoryChange}
                />
                <Label htmlFor="vegetarian">Vegetarian</Label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="radio"
                  value="seafood"
                  id="seafood"
                  checked={categoryState === 'seafood'}
                  onChange={handleCategoryChange}
                />
                <Label htmlFor="seafood">Seafood</Label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="radio"
                  value="spicy"
                  id="spicy"
                  checked={categoryState === 'spicy'}
                  onChange={handleCategoryChange}
                />
                <Label htmlFor="spicy">Spicy</Label>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <div className="flex gap-2">
          <Button
            className={cn(
              'border-ocol rounded-full px-7',
              categoryState === 'all' ? 'bg-gray-900' : 'bg-gray-500',
            )}
            disabled={isDisabled}
            value="all"
            onClick={handleCategoryChange}
          >
            All
          </Button>
          <Button
            className={cn(
              'border-ocol rounded-full px-7',
              categoryState === 'meat' ? 'bg-gray-900' : 'bg-gray-500',
            )}
            value="meat"
            disabled={isDisabled}
            onClick={handleCategoryChange}
          >
            Meat
          </Button>
          <Button
            className={cn(
              'border-ocol rounded-full px-7',
              categoryState === 'vegetarian' ? 'bg-gray-900' : 'bg-gray-500',
            )}
            value="vegetarian"
            disabled={isDisabled}
            onClick={handleCategoryChange}
          >
            Vegetarian
          </Button>
          <Button
            className={cn(
              'border-ocol rounded-full px-7',
              categoryState === 'seafood' ? 'bg-gray-900' : 'bg-gray-500',
            )}
            value="seafood"
            disabled={isDisabled}
            onClick={handleCategoryChange}
          >
            Seafood
          </Button>
          <Button
            className={cn(
              'border-ocol rounded-full px-7',
              categoryState === 'spicy' ? 'bg-gray-900' : 'bg-gray-500',
            )}
            value="spicy"
            disabled={isDisabled}
            onClick={handleCategoryChange}
          >
            Spicy
          </Button>
        </div>
      )}

      <Select
        disabled={isDisabled}
        value={sortState}
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popularity">Popularity</SelectItem>
          <SelectItem value="alphabet">Alphabet</SelectItem>
          <SelectItem value="desc-price">Price (high to low)</SelectItem>
          <SelectItem value="asc-price">Price (low to high)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '@/redux/store';
import { filterActions } from '@/redux/Filter/filterSlice';
import { cn } from '@/lib/utils';

export function FilterBar({ isDisabled }: { isDisabled: boolean }) {
  const dispatch = useDispatch();

  const initialCategory = useSelector(
    (state: RootState) => state.filter.category,
  );
  const [categoryState, setCategoryState] = useState(initialCategory);

  const initialSort = useSelector((state: RootState) => state.filter.sort);
  const [sortState, setSortState] = useState(initialSort);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryState(selectedCategory);
    dispatch(filterActions.setCategory(selectedCategory));
  };

  const handleSelectChange = (event: string) => {
    setSortState(event);
    dispatch(filterActions.setSort(event));
  };

  return (
    <div className="flex items-center justify-between">
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

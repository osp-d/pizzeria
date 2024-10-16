import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';

export function FilterBar({ isDisabled }: { isDisabled: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <Button className="rounded-full px-7">All</Button>
        <Button className="rounded-full px-7" disabled={isDisabled}>
          Meat
        </Button>
        <Button className="rounded-full px-7" disabled={isDisabled}>
          Vegetarian
        </Button>
        <Button className="rounded-full px-7" disabled={isDisabled}>
          Seafood
        </Button>
        <Button className="rounded-full px-7" disabled={isDisabled}>
          Spicy
        </Button>
      </div>
      <Select disabled={isDisabled}>
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';

export function FilterBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <Button className="rounded-full px-7">All</Button>
        <Button className="rounded-full px-7" disabled={true}>
          Meat
        </Button>
        <Button className="rounded-full px-7" disabled={true}>
          Vegetarian
        </Button>
        <Button className="rounded-full px-7" disabled={true}>
          Seafood
        </Button>
        <Button className="rounded-full px-7" disabled={true}>
          Spicy
        </Button>
      </div>
      <Select>
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

import { Skeleton } from '@/components/ui/skeleton';
import { FilterBar } from './FilterBar';

export function StoreSkeleton() {
  return (
    <div>
      <FilterBar isDisabled={true} />

      <p className="pt-4 font-bold">Products (0)</p>

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 mlg:grid-cols-3">
        <Skeleton className="aspect-nineToTen" />
        <Skeleton className="aspect-nineToTen" />
        <Skeleton className="aspect-nineToTen" />
        <Skeleton className="aspect-nineToTen" />
        <Skeleton className="aspect-nineToTen" />
        <Skeleton className="aspect-nineToTen" />
      </div>
    </div>
  );
}

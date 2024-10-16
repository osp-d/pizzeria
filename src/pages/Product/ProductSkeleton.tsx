import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingBag } from 'lucide-react';

export function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Skeleton className="aspect-square w-[400px] rounded-md md:max-w-md" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-5 w-12 rounded-2xl px-2 py-[1px]" />
          <Skeleton className="h-6" />
          <Skeleton className="h-8 w-[200px] p-1" />
          <Skeleton className="h-[29px] w-[98px]" />
          <Skeleton className="h-6 w-14" />
        </div>

        <Skeleton className="h-6" />

        <div className="flex flex-col gap-2 md:max-w-[300px]">
          <Button
            className="bg-blue-500 py-6 hover:bg-blue-700"
            disabled={true}
          >
            Buy Now
          </Button>

          <Button variant="outline" className="flex gap-2 py-6" disabled={true}>
            <ShoppingBag size="16px" />
            Add to Bag
          </Button>
        </div>
      </div>
    </div>
  );
}

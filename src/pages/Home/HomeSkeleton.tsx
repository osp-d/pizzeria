import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function HomeSkeleton() {
  return (
    <div className="h-4/5">
      <div className="m-auto flex max-w-3xl flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Welcome to pizzeria.</h1>
        <h2 className="text-center text-lg">
          Order pizza made according to our sophisticated recipes. Pizza from an
          authentic Italian bakery.
        </h2>

        <Button
          disabled={true}
          variant="outline"
          className="border-gray-200 font-bold hover:border-gray-500 hover:bg-gray-100"
        >
          Shop now
        </Button>

        <Skeleton className="h-96 w-96" />
      </div>
    </div>
  );
}

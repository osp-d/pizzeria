import { Button } from '@/components/ui/button';
import Carousel from './Carousel';

export function Home() {
  return (
    <div className="h-4/5">
      <div className="m-auto flex max-w-3xl flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Welcome to pizzeria.</h1>
        <h2 className="text-center text-lg">
          Order pizza made according to our sophisticated recipes. Pizza from an
          authentic Italian bakery.
        </h2>

        <Button
          variant="outline"
          className="border-gray-200 font-bold hover:border-gray-500 hover:bg-gray-100"
        >
          Shop now
        </Button>

        <div className="w-96">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

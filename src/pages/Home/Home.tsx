import { Button } from '@/components/ui/button';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import { useGetPizzasQuery } from '@/services/pizzaApi';
import { HomeSkeleton } from './HomeSkeleton';

export function Home() {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isError, error } = useGetPizzasQuery();

  let content: React.ReactNode;

  if (isLoading) {
    content = <HomeSkeleton />;
  } else if (isSuccess) {
    content = (
      <div className="h-4/5">
        <div className="m-auto flex max-w-3xl flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">Welcome to pizzeria.</h1>
          <h2 className="text-center text-lg">
            Order pizza made according to our sophisticated recipes. Pizza from
            an authentic Italian bakery.
          </h2>

          <Button
            onClick={() => {
              navigate('/store');
            }}
            variant="outline"
            className="border-gray-200 font-bold hover:border-gray-500 hover:bg-gray-100"
          >
            Shop now
          </Button>

          <div className="w-96">
            <Carousel data={data} />
          </div>
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
}

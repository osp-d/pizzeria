import { useGetPizzasQuery } from '@/services/pizzaApi';

import { StoreSkeleton } from './StoreSkeleton';
import { StoreContent } from './StoreContent';

export function StoreContainer() {
  const { data, isLoading, isSuccess, isError, error } = useGetPizzasQuery();

  let content: React.ReactNode;

  if (isLoading) {
    content = <StoreSkeleton />;
  } else if (isSuccess) {
    content = <StoreContent data={data} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <>{content}</>;
}

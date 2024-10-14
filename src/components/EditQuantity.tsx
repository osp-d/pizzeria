import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/redux/Cart/cartSlice';

import { Minus, Plus } from 'lucide-react';

export function EditQuantity({
  quantityState,
  setQuantityState,
  productId,
}: {
  quantityState: number;
  setQuantityState: React.Dispatch<React.SetStateAction<number>>;
  productId: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const decrementQuantity = () => {
    if (quantityState > 1) {
      if (productId && ref.current) {
        const newQuantity = +ref.current.innerText - 1;
        setQuantityState(newQuantity);
        dispatch(
          cartActions.setQuantity({
            id: productId,
            quantity: newQuantity,
          }),
        );
      } else if (ref.current) {
        setQuantityState(+ref.current.innerText - 1);
      }
    }
  };

  const incrementQuantity = () => {
    if (quantityState < 15) {
      if (productId && ref.current) {
        const newQuantity = +ref.current.innerText + 1;
        setQuantityState(newQuantity);
        dispatch(
          cartActions.setQuantity({
            id: productId,
            quantity: newQuantity,
          }),
        );
      } else if (ref.current) {
        setQuantityState(+ref.current.innerText + 1);
      }
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200"
        onClick={decrementQuantity}
      >
        <Minus width="12px" height="12px" />
      </div>
      <p ref={ref}>{quantityState}</p>
      <div
        className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200"
        onClick={incrementQuantity}
      >
        <Plus width="12px" height="12px" />
      </div>
    </div>
  );
}

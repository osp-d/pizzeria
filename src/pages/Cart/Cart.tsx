import data from '@/assets/tempData.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';

type Cards = {
  id: string;
  src: string;
  alt: string;
  title: string;
}[];

const cards: Cards = [];

for (let i = 0; i < 5; i++) {
  const slide = data[i];
  cards.push({
    id: slide.id,
    src: slide.imageUrl,
    alt: `slide ${slide.id}`,
    title: slide.title,
  });
}

export function Cart() {
  return (
    <div className="mb-10 flex flex-col gap-6">
      <div className="w-fit rounded-md p-2 transition hover:bg-gray-100">
        <ArrowLeft />
      </div>

      <p className="text-lg font-bold">Shopping Bag</p>

      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
        <div className="flex w-full max-w-screen-md flex-col gap-8">
          {cards.map((card) => (
            <div key={card.id} className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-gray-100">
                  <img src={card.src} alt={card.title} className="w-24" />
                </div>

                <div className="mlg:flex-row mlg:items-center mlg:gap-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-9 lg:flex-col lg:items-start lg:gap-4">
                  <div className="flex min-w-20 flex-col gap-1">
                    <p className="text-lg font-bold">{card.title}</p>
                    <p className="text-base text-blue-500 text-muted-foreground">
                      30cm
                    </p>
                    <p className="text-base text-muted-foreground">Qty: {1}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200">
                      <Minus width="12px" height="12px" />
                    </div>
                    {1}
                    <div className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200">
                      <Plus width="12px" height="12px" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex h-full items-center justify-center rounded-sm border-[1px] border-gray-300 p-2 transition hover:bg-gray-200">
                  <Trash2
                    width="12px"
                    height="12px"
                    className="text-rose-500"
                  />
                </div>

                <p className="text-lg font-bold">3000 KZT</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-fit w-full flex-col gap-6 rounded-md border-[1px] border-gray-300 p-10 lg:max-w-96">
          <p className="text-lg font-bold">Order summary</p>
          <p className="text-xl font-bold">16800 KZT</p>
          <div className="flex items-center justify-between">
            <p className="text-base">Subtotal ({3})</p>
            <p className="text-base">15000 KZT</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base">VAT (12%)</p>
            <p className="text-base">1800 KZT</p>
          </div>
          <div className="h-[1px] w-full bg-gray-200" />
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">16800 KZT</p>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-700">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

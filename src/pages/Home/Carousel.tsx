import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Carousel({ data }: { data: Product[] }) {
  const products = data;

  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(products[i]);
  }

  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex aspect-square min-w-0 flex-[0_0_100%] flex-col items-center justify-center gap-4 rounded-lg bg-gray-100"
              onClick={() => {
                navigate(`store/${slide.id}`);
              }}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                width="70%"
                className="-mr-2"
              />
              <p className="text-lg font-bold">{slide.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="default"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${
              index === selectedIndex ? 'bg-primary' : 'bg-primary/20'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

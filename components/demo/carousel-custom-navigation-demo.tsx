"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/registry/components/ui/carousel";

function CustomNavigation() {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <button
        onClick={() => setIndex(index - 1)}
        disabled={index === 0}
        className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:hover:bg-zinc-800"
      >
        Previous
      </button>
      <span className="text-sm text-zinc-500">
        {index + 1} / {itemsCount}
      </span>
      <button
        onClick={() => setIndex(index + 1)}
        disabled={index === itemsCount - 1}
        className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:hover:bg-zinc-800"
      >
        Next
      </button>
    </div>
  );
}

export default function CarouselCustomNavigationDemo() {
  return (
    <div className="relative w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">1</span>
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">2</span>
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">3</span>
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">4</span>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CustomNavigation />
      </Carousel>
    </div>
  );
}

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/registry/components/ui/carousel";

export default function CarouselSpacingDemo() {
  return (
    <div className="relative w-full px-4">
      <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">1</span>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">2</span>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">3</span>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">4</span>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">5</span>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">6</span>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">7</span>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation
          className="absolute -bottom-14 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}

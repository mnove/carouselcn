"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "@/registry/components/ui/carousel-motion";

export default function CarouselMotionLoopDemo() {
  return (
    <div className="relative w-full max-w-xs">
      <Carousel loop>
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
        <CarouselNavigation />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}

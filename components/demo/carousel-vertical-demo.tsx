"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "@/registry/components/ui/carousel";

export default function CarouselVerticalDemo() {
  return (
    <div className="relative h-[300px] w-full max-w-xs">
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem className="p-4">
            <div className="flex h-full items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">1</span>
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex h-full items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">2</span>
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex h-full items-center justify-center rounded-lg border bg-card">
              <span className="text-4xl font-semibold">3</span>
            </div>
          </CarouselItem>
          <CarouselItem className="p-4">
            <div className="flex h-full items-center justify-center rounded-lg border bg-card">
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

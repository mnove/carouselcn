"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/components/ui/carousel";
import { useState } from "react";

const ITEMS = [1, 2, 3, 4];

export default function CarouselCustomIndicatorDemo() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full max-w-xs py-8">
      <Carousel index={index} onIndexChange={setIndex}>
        <CarouselContent>
          {ITEMS.map((item) => (
            <CarouselItem key={item} className="p-4">
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-card">
                <span className="text-4xl font-semibold">{item}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full justify-center space-x-3 px-4">
        {ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            aria-label={`Go to slide ${item}`}
            onClick={() => setIndex(item - 1)}
            className="h-12 w-12 rounded-lg border bg-card transition-colors hover:bg-muted"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

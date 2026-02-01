"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
  useCarouselAutoplay,
} from "@/registry/components/ui/carousel-motion";
import { Pause, Play } from "lucide-react";

function AutoplayContent() {
  const { isPlaying, toggle } = useCarouselAutoplay({
    interval: 2000,
  });

  return (
    <div>
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
      <div className="absolute -bottom-12 flex w-full items-center justify-center gap-2">
        <CarouselIndicator className="static" />
        <button
          onClick={toggle}
          className="flex h-8 w-8 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function CarouselMotionAutoplayDemo() {
  return (
    <div className="relative w-full max-w-xs pb-16">
      <Carousel loop>
        <AutoplayContent />
      </Carousel>
    </div>
  );
}

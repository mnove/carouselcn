"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "@/registry/components/ui/carousel-motion";

export default function CarouselMotionSpringDemo() {
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(30);

  return (
    <div className="w-full max-w-xs space-y-6">
      <div className="relative">
        <Carousel>
          <CarouselContent
            transition={{
              type: "spring",
              stiffness,
              damping,
            }}
          >
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

      <div className="space-y-4 rounded-lg border bg-card p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="stiffness" className="text-sm font-medium">
              Stiffness
            </label>
            <span className="text-sm text-muted-foreground">{stiffness}</span>
          </div>
          <input
            id="stiffness"
            type="range"
            min="50"
            max="500"
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="damping" className="text-sm font-medium">
              Damping
            </label>
            <span className="text-sm text-muted-foreground">{damping}</span>
          </div>
          <input
            id="damping"
            type="range"
            min="5"
            max="50"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <p className="text-xs text-muted-foreground">
          Adjust the spring physics. Higher stiffness = faster animation. Higher
          damping = less bounce.
        </p>
      </div>
    </div>
  );
}

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  useCarousel,
} from "@/registry/components/ui/carousel";
import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    alt: "Forest path",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    alt: "Lake reflection",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    alt: "Green hills",
  },
];

function ThumbnailIndicator() {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div className="flex justify-center gap-2 pt-4">
      {images.slice(0, itemsCount).map((image, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`h-12 w-16 overflow-hidden rounded-md border-2 transition-all ${
            index === i
              ? "border-zinc-900 dark:border-zinc-100"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}

export default function ExampleImageGallery() {
  return (
    <div className="relative w-full max-w-xl">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <ThumbnailIndicator />
      </Carousel>
    </div>
  );
}

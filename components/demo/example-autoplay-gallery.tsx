"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  useCarousel,
  useCarouselAutoplay,
} from "@/registry/components/ui/carousel";
import { Pause, Play } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Mountain landscape with snow-capped peaks",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    alt: "Sunlit forest path through tall trees",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    alt: "Calm lake reflecting mountain scenery",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
    alt: "Rolling green hills at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    alt: "Misty valley with morning fog",
  },
];

function ThumbnailsWithAutoplay() {
  const { index, setIndex, itemsCount } = useCarousel();
  const { isPlaying, toggle } = useCarouselAutoplay({
    interval: 4000,
  });

  return (
    <div className="flex items-center justify-center gap-2 pt-4">
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
      <button
        onClick={toggle}
        className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4 ml-0.5" />
        )}
      </button>
    </div>
  );
}

function AutoplayGalleryContent() {
  return (
    <>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-4/3 overflow-hidden rounded-xl">
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
      <ThumbnailsWithAutoplay />
    </>
  );
}

export default function ExampleAutoplayGallery() {
  return (
    <div className="relative w-full max-w-xl">
      <Carousel loop>
        <AutoplayGalleryContent />
      </Carousel>
    </div>
  );
}

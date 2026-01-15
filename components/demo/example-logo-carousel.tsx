"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/registry/components/ui/carousel";

const logos = [
  { src: "/demos/logos/logoipsum-391.svg", alt: "Company 1" },
  { src: "/demos/logos/logoipsum-395.svg", alt: "Company 2" },
  { src: "/demos/logos/logoipsum-402.svg", alt: "Company 3" },
  { src: "/demos/logos/logoipsum-410.svg", alt: "Company 4" },
  { src: "/demos/logos/logoipsum-412.svg", alt: "Company 5" },
  { src: "/demos/logos/logoipsum-414.svg", alt: "Company 6" },
  { src: "/demos/logos/logoipsum-416.svg", alt: "Company 7" },
  { src: "/demos/logos/logoipsum-418.svg", alt: "Company 8" },
];

export default function ExampleLogoCarousel() {
  return (
    <div className="relative w-full max-w-2xl px-8">
      <Carousel loop>
        <CarouselContent className="-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="basis-1/4 pl-4">
              <div className="flex h-24 items-center justify-center rounded-lg border bg-card p-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
      </Carousel>
    </div>
  );
}

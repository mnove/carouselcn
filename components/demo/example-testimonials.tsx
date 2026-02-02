"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/registry/components/ui/carousel";

const testimonials = [
  {
    quote:
      "This carousel component is incredibly smooth and easy to customize. It's exactly what we needed for our landing page.",
    author: "Sarah Chen",
    role: "Product Designer",
    company: "TechCorp",
  },
  {
    quote:
      "The best carousel library I've used. Lightweight, accessible, and the API is intuitive. Highly recommend!",
    author: "Marcus Johnson",
    role: "Frontend Developer",
    company: "StartupXYZ",
  },
  {
    quote:
      "Finally, a carousel that works perfectly on mobile. The touch gestures feel native and responsive.",
    author: "Emily Rodriguez",
    role: "Mobile Lead",
    company: "AppWorks",
  },
];

export default function ExampleTestimonials() {
  return (
    <div className="relative w-full max-w-lg">
      <Carousel className="pb-12">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="p-4">
              <div className="flex flex-col gap-4 rounded-xl border bg-card p-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-sm font-medium dark:bg-zinc-700">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute -bottom-2 left-1/2 top-auto w-auto -translate-x-1/2 justify-center gap-2"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}

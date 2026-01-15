"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/registry/components/ui/carousel";

const products = [
  {
    name: "Wireless Headphones",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Sale",
  },
  {
    name: "Smart Watch Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    name: "Portable Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    badge: "New",
  },
  {
    name: "Camera Lens Kit",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=400&h=400&fit=crop",
  },
  {
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
  },
];

export default function ExampleProductCards() {
  return (
    <div className="relative w-full max-w-3xl px-8">
      <Carousel>
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-4">
              <div className="group relative flex flex-col rounded-xl border bg-card">
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-zinc-900 px-2 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                    {product.badge}
                  </span>
                )}
                <div className="aspect-square overflow-hidden rounded-t-xl bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <h3 className="font-medium leading-tight">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-zinc-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
      </Carousel>
    </div>
  );
}

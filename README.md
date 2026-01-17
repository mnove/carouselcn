# carouselcn

Simple and easy carousels for React. Copy-paste ready carousel components for your apps, like shadcn.

## Features

- Lightweight CSS-based transitions (no animation library required)
- Drag/swipe support for touch and mouse
- Loop navigation
- Controlled and uncontrolled modes
- Customizable indicators and navigation
- Accessible with ARIA labels
- Dark mode support

## Installation

Copy the carousel component into your project:

```bash
npx shadcn@latest add https://carouselcn.dev/r/carousel.json
```

Or manually copy from `registry/components/ui/carousel.tsx`.

## Usage

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "@/components/ui/carousel";

export function Demo() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselNavigation />
      <CarouselIndicator />
    </Carousel>
  );
}
```

## Props

See Docs for available props and API.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to see the documentation site.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on adding features, demos, and examples.

## License

MIT

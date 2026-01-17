# Contributing to carouselcn

Thanks for your interest in contributing! This guide explains how to add new features, demos, and examples to the project.

## Project Structure

```
carouselcn/
├── registry/
│   └── components/ui/
│       └── carousel.tsx        # Main carousel component
├── components/
│   └── demo/                   # Demo components for docs
├── content/docs/
│   ├── components/             # Component documentation
│   └── examples/               # Example documentation
└── registry/
    └── __index__.tsx           # Demo registry
```

## Adding a New Feature

Features are added directly to the main carousel component.

### 1. Edit the Component

Add your feature to `registry/components/ui/carousel.tsx`. Follow the existing patterns:

- **New prop**: Add to the appropriate component's props type and implementation
- **New hook**: Export a new hook like `useCarouselAutoplay`
- **New sub-component**: Create and export a new component like `CarouselIndicator`

### 2. Update Documentation

Add your feature to `content/docs/components/carousel.mdx`:

- Add an example in the "Examples" section
- Add props/API documentation in the "API Reference" section

## Adding a Demo

Demos are interactive examples shown in the documentation.

### 1. Create the Demo Component

Create a new file in `components/demo/`:

```tsx
// components/demo/carousel-myfeature-demo.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // ... other imports
} from "@/registry/components/ui/carousel";

export default function CarouselMyFeatureDemo() {
  return (
    <div className="relative w-full max-w-xs">
      <Carousel>
        {/* Your demo implementation */}
      </Carousel>
    </div>
  );
}
```

### 2. Register the Demo

Add your demo to `registry/__index__.tsx`:

```tsx
"carousel-myfeature-demo": {
  component: React.lazy(
    () => import("@/components/demo/carousel-myfeature-demo"),
  ),
  src: "components/demo/carousel-myfeature-demo.tsx",
},
```

### 3. Add to Documentation

Reference the demo in `content/docs/components/carousel.mdx`:

```mdx
### My Feature

Description of the feature.

<ComponentPreview name="carousel-myfeature-demo" />
```

## Adding an Example

Examples are real-world use cases with their own documentation page.

### 1. Create the Example Component

Create a new file in `components/demo/`:

```tsx
// components/demo/example-myexample.tsx
"use client";

import { /* imports */ } from "@/registry/components/ui/carousel";

export default function ExampleMyExample() {
  return (
    // Your example implementation
  );
}
```

### 2. Register the Example

Add to `registry/__index__.tsx`:

```tsx
"example-myexample": {
  component: React.lazy(
    () => import("@/components/demo/example-myexample"),
  ),
  src: "components/demo/example-myexample.tsx",
},
```

### 3. Create Documentation Page

Create `content/docs/examples/myexample.mdx`:

```mdx
---
title: My Example
description: Description of this example use case.
---

<ComponentPreview name="example-myexample" />

## Use Case

When to use this pattern...

## Features

- Feature 1
- Feature 2

## Implementation

\`\`\`tsx
// Code example
\`\`\`

## Tips

- Tip 1
- Tip 2
```

### 4. Add to Navigation

Update `content/docs/examples/meta.json`:

```json
{
  "title": "Examples",
  "pages": [
    "logo-carousel",
    "testimonials",
    "image-gallery",
    "myexample",
    "product-cards"
  ]
}
```

## Development Workflow

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build to check for errors
pnpm build
```

## Code Style

- Use TypeScript
- Follow existing component patterns
- Use Tailwind CSS for styling
- Export types for props
- Add ARIA labels for accessibility

## Pull Request Guidelines

1. Create a branch for your feature
2. Make your changes following the patterns above
3. Test locally with `pnpm dev` and `pnpm build`
4. Submit a PR with a clear description of your changes

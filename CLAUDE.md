# carouselcn

Lightweight, copy-paste ready carousel components for React. Similar to shadcn/ui - components are meant to be copied into your project, not installed as a package.

## Tech Stack

- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui patterns, Class Variance Authority
- **Animation**: Motion.js (optional, for spring-based animations)
- **Documentation**: Fumadocs with MDX
- **Quality**: ESLint, Prettier, Lefthook (git hooks), Commitlint, Knip

## Project Structure

```
app/                    # Next.js app directory (routes, layouts)
registry/components/ui/ # Copy-paste carousel components
  carousel.tsx          # CSS-based carousel
  carousel-motion.tsx   # Motion.js variant
components/demo/        # Demo components for documentation
content/docs/           # MDX documentation
lib/                    # Utilities (cn, source config)
config/                 # Site configuration
```

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm types:check      # TypeScript validation
pnpm lint             # ESLint
pnpm knip             # Check unused exports
pnpm registry:build   # Build component registry
```

## Code Conventions

### Component Patterns

- Compound components (Carousel, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator)
- Context-based state via `useCarousel()` hook
- Supports controlled (`index`, `onIndexChange`) and uncontrolled modes
- All components marked with `"use client"` directive

### Styling

- Use `cn()` utility from `lib/utils.ts` for className merging
- Tailwind-first with full dark mode support (`dark:` variants)
- Components accept `className` props for customization

### File Naming

- Components: `carousel-[variant].tsx`
- Demos: `carousel-[feature]-demo.tsx`
- Examples: `example-[use-case].tsx`

### Type Exports

Export prop types alongside components:

```typescript
export type CarouselProps = {
  /* ... */
};
```

### Commit Messages

Conventional Commits format:

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation
- `refactor:` code refactoring

Example: `feat(carousel): add loop support`

## Key APIs

### Carousel Props

- `orientation`: "horizontal" | "vertical"
- `loop`: boolean - enable infinite loop
- `disableDrag`: boolean - disable swipe/drag
- `index` / `onIndexChange`: controlled mode

### Hooks

- `useCarousel()`: access carousel context
- `useCarouselAutoplay()`: autoplay functionality

## Path Aliases

- `@/*` → project root
- `fumadocs-mdx:collections/*` → generated docs

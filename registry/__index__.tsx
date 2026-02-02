import React from "react";

export const components: Record<
  string,
  {
    component: React.LazyExoticComponent<React.ComponentType<unknown>>;
    src: string;
  }
> = {
  "carousel-demo": {
    component: React.lazy(() => import("@/components/demo/carousel-demo")),
    src: "components/demo/carousel-demo.tsx",
  },
  "carousel-custom-indicator-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-custom-indicator-demo"),
    ),
    src: "components/demo/carousel-custom-indicator-demo.tsx",
  },
  "carousel-loop-demo": {
    component: React.lazy(() => import("@/components/demo/carousel-loop-demo")),
    src: "components/demo/carousel-loop-demo.tsx",
  },
  "carousel-vertical-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-vertical-demo"),
    ),
    src: "components/demo/carousel-vertical-demo.tsx",
  },
  "carousel-spacing-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-spacing-demo"),
    ),
    src: "components/demo/carousel-spacing-demo.tsx",
  },
  "carousel-navigation-position-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-navigation-position-demo"),
    ),
    src: "components/demo/carousel-navigation-position-demo.tsx",
  },
  "carousel-custom-navigation-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-custom-navigation-demo"),
    ),
    src: "components/demo/carousel-custom-navigation-demo.tsx",
  },
  "carousel-autoplay-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-autoplay-demo"),
    ),
    src: "components/demo/carousel-autoplay-demo.tsx",
  },
  "example-logo-carousel": {
    component: React.lazy(
      () => import("@/components/demo/example-logo-carousel"),
    ),
    src: "components/demo/example-logo-carousel.tsx",
  },
  "example-testimonials": {
    component: React.lazy(
      () => import("@/components/demo/example-testimonials"),
    ),
    src: "components/demo/example-testimonials.tsx",
  },
  "example-image-gallery": {
    component: React.lazy(
      () => import("@/components/demo/example-image-gallery"),
    ),
    src: "components/demo/example-image-gallery.tsx",
  },
  "example-product-cards": {
    component: React.lazy(
      () => import("@/components/demo/example-product-cards"),
    ),
    src: "components/demo/example-product-cards.tsx",
  },
  "example-autoplay-gallery": {
    component: React.lazy(
      () => import("@/components/demo/example-autoplay-gallery"),
    ),
    src: "components/demo/example-autoplay-gallery.tsx",
  },
  "example-blog-cards": {
    component: React.lazy(() => import("@/components/demo/example-blog-cards")),
    src: "components/demo/example-blog-cards.tsx",
  },
  "example-team-profiles": {
    component: React.lazy(
      () => import("@/components/demo/example-team-profiles"),
    ),
    src: "components/demo/example-team-profiles.tsx",
  },
  "example-stats-cards": {
    component: React.lazy(
      () => import("@/components/demo/example-stats-cards"),
    ),
    src: "components/demo/example-stats-cards.tsx",
  },
  "carousel-motion-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-demo"),
    ),
    src: "components/demo/carousel-motion-demo.tsx",
  },
  "carousel-motion-loop-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-loop-demo"),
    ),
    src: "components/demo/carousel-motion-loop-demo.tsx",
  },
  "carousel-motion-vertical-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-vertical-demo"),
    ),
    src: "components/demo/carousel-motion-vertical-demo.tsx",
  },
  "carousel-motion-spacing-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-spacing-demo"),
    ),
    src: "components/demo/carousel-motion-spacing-demo.tsx",
  },
  "carousel-motion-autoplay-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-autoplay-demo"),
    ),
    src: "components/demo/carousel-motion-autoplay-demo.tsx",
  },
  "carousel-motion-spring-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-spring-demo"),
    ),
    src: "components/demo/carousel-motion-spring-demo.tsx",
  },
  "carousel-motion-custom-indicator-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-motion-custom-indicator-demo"),
    ),
    src: "components/demo/carousel-motion-custom-indicator-demo.tsx",
  },
};

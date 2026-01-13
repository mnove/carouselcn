import React from "react";

export const components: Record<
  string,
  {
    component: React.LazyExoticComponent<React.ComponentType<unknown>>;
    src: string;
  }
> = {
  "test-demo": {
    component: React.lazy(() => import("@/components/demo/test-demo")),
    src: "components/demo/test-demo.tsx",
  },
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
  "carousel-spacing-demo": {
    component: React.lazy(
      () => import("@/components/demo/carousel-spacing-demo"),
    ),
    src: "components/demo/carousel-spacing-demo.tsx",
  },
};

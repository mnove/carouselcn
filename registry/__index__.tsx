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
};

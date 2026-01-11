export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : `http://localhost:3000`,
  githubUrl: "https://github.com/mnove/carouselcn",
};

/**
 * Site configuration
 */
export const siteConfig = {
  url: config.appUrl,
  name: "carouselcn",
  title: "components for building carousels with shadcn/ui",
  description:
    "carouselcn is a collection of shadcn/ui components and templates to build beautiful, accessible, and customizable carousel UIs with React and Tailwind CSS.",
};

export const siteConfig = {
  name: "carouselcn",
  creator: "@mnove",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://carouselcn.marcellonovelli.com",
  appUrl:
    process.env.NODE_ENV === "production"
      ? `https://carouselcn.marcellonovelli.com`
      : `http://localhost:3000`,
  ogImage: "https://carouselcn.marcellonovelli.com/opengraph-image.png",
  description:
    "carouselcn is a collection of copy-paste components and templates to build beautiful, accessible, and customizable carousel UIs with React and Tailwind CSS.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "carousel",
    "shadcn/ui",
  ],
  links: {
    portfolio: "https://marcellonovelli.com",
    github: "https://github.com/mnove/carouselcn",
  },
  analyticsTrackingId: "8106fac3-714a-451f-8ef9-7a7a66e2bee2",
};

export type SiteConfig = typeof siteConfig;

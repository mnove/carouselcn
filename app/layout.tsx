import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | carouselcn",
    default: "carouselcn",
  },
  description: "Copy-paste carousel components for React.",
  keywords: [
    "nextjs",
    "next",
    "carousel",
    "carousel component",
    "carouselcn",
    "typescript",
    "react",
    "react carousel",
  ],
  metadataBase: new URL("https://carouselcn.marcellonovelli.com"),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

import { siteConfig } from "@/config/site";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.creator }],
};

export default function Layout({ children }: LayoutProps<"/">) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
      data-website-id={siteConfig.analyticsTrackingId}
    >
      {!isDev ? (
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id={siteConfig.analyticsTrackingId}
        />
      ) : null}
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

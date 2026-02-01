import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-7xl mx-auto px-4 py-8 flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {currentYear} {siteConfig.name}. Built by{" "}
          <Link
            href={siteConfig.links.portfolio}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            {siteConfig.creator}
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={siteConfig.links.github}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}

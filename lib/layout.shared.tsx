import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GalleryThumbnails } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <GalleryThumbnails size={18} />
          <span className="font-bold">carouselcn</span>
        </div>
      ),
    },
    githubUrl: "https://github.com/mnove/carouselcn",
  };
}

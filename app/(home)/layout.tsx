import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { SiteFooter } from "@/components/site-footer";
import { Spotlight } from "@/components/spotlight";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <Spotlight />
      <HomeLayout {...baseOptions()} className="relative z-10 flex-1 pb-12">
        {children}
      </HomeLayout>
      <SiteFooter />
    </div>
  );
}

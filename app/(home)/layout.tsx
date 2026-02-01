import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { SiteFooter } from "@/components/site-footer";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeLayout {...baseOptions()} className="flex-1 pb-12">
        {children}
      </HomeLayout>
      <SiteFooter />
    </div>
  );
}

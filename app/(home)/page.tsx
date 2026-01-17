import Link from "next/link";
import CarouselDemo from "@/components/demo/carousel-demo";
import CarouselCustomIndicatorDemo from "@/components/demo/carousel-custom-indicator-demo";
import CarouselLoopDemo from "@/components/demo/carousel-loop-demo";
import CarouselVerticalDemo from "@/components/demo/carousel-vertical-demo";
import CarouselSpacingDemo from "@/components/demo/carousel-spacing-demo";
import CarouselAutoplayDemo from "@/components/demo/carousel-autoplay-demo";
import { Button } from "@/components/ui/button";

const examples = [
  {
    title: "Basic",
    description: "Simple carousel with navigation and indicators",
    component: CarouselDemo,
  },
  {
    title: "Custom Indicator",
    description: "Controlled state with custom indicators",
    component: CarouselCustomIndicatorDemo,
  },
  {
    title: "Loop",
    description: "Enable looping for infinite scrolling",
    component: CarouselLoopDemo,
  },
  {
    title: "Vertical",
    description: "Vertical sliding orientation",
    component: CarouselVerticalDemo,
  },
  {
    title: "Sizes and Spacing",
    description: "Multiple items with custom spacing",
    component: CarouselSpacingDemo,
  },
  {
    title: "Autoplay",
    description: "Auto-advance with play/pause controls",
    component: CarouselAutoplayDemo,
  },
];

export default function HomePage() {
  return (
    <main className="container max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          carouselcn
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Copy-paste carousel components for React.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="https://github.com/marcellonovelli/carouselcn">
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {examples.map((example) => {
            const Component = example.component;
            return (
              <div
                key={example.title}
                className="border border-border/40 rounded-xl p-6 lg:p-8"
              >
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {example.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {example.description}
                </p>
                <div className="flex justify-center">
                  <Component />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

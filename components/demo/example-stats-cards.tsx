"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/registry/components/ui/carousel";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Activity,
  Target,
} from "lucide-react";

const stats = [
  {
    label: "Total Users",
    value: "2.4M",
    trend: { direction: "up", value: "+12.5%" },
    icon: Users,
  },
  {
    label: "Monthly Revenue",
    value: "$847K",
    trend: { direction: "up", value: "+18.2%" },
    icon: DollarSign,
  },
  {
    label: "Active Sessions",
    value: "12.8K",
    trend: { direction: "down", value: "-3.1%" },
    icon: Activity,
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    trend: { direction: "up", value: "+0.8%" },
    icon: Target,
  },
  {
    label: "New Signups",
    value: "1,429",
    trend: { direction: "up", value: "+23.4%" },
    icon: TrendingUp,
  },
  {
    label: "Bounce Rate",
    value: "42.3%",
    trend: { direction: "down", value: "-5.2%" },
    icon: TrendingDown,
  },
  {
    label: "Avg. Session",
    value: "4m 32s",
    trend: { direction: "up", value: "+1m 15s" },
    icon: Activity,
  },
  {
    label: "Customer LTV",
    value: "$1,284",
    trend: { direction: "up", value: "+$142" },
    icon: DollarSign,
  },
];

export default function ExampleStatsCards() {
  return (
    <div className="relative w-full max-w-5xl">
      <Carousel className="px-8">
        <CarouselContent className="-ml-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const TrendIcon =
              stat.trend.direction === "up" ? TrendingUp : TrendingDown;
            const trendColor =
              stat.trend.direction === "up"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400";

            return (
              <CarouselItem key={index} className="basis-1/4 pl-4">
                <div className="flex flex-col rounded-xl border bg-card p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                      <IconComponent className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}
                    >
                      <TrendIcon className="h-4 w-4" />
                      <span>{stat.trend.value}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNavigation
          className="absolute left-0 right-0 top-1/2 w-auto -translate-y-1/2 justify-between px-2"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}

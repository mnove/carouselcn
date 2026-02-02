"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/registry/components/ui/carousel";

const blogPosts = [
  {
    title: "Getting Started with Modern Web Development",
    excerpt:
      "Learn the fundamentals of modern web development, including React, TypeScript, and best practices for building scalable applications.",
    category: "Tutorial",
    date: "Mar 15, 2024",
    author: "Sarah Chen",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
  },
  {
    title: "The Future of JavaScript Frameworks",
    excerpt:
      "Exploring the latest trends in JavaScript frameworks and what they mean for developers in 2024 and beyond.",
    category: "Analysis",
    date: "Mar 12, 2024",
    author: "Alex Morgan",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
  },
  {
    title: "Building Accessible User Interfaces",
    excerpt:
      "A comprehensive guide to creating inclusive and accessible web applications that work for everyone.",
    category: "Guide",
    date: "Mar 10, 2024",
    author: "Jordan Lee",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=450&fit=crop",
  },
  {
    title: "Optimizing React Performance",
    excerpt:
      "Practical tips and techniques for improving the performance of your React applications and delivering better user experiences.",
    category: "Performance",
    date: "Mar 8, 2024",
    author: "Taylor Kim",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
  },
  {
    title: "Understanding CSS Grid and Flexbox",
    excerpt:
      "Master modern CSS layout techniques with this in-depth comparison of Grid and Flexbox, including real-world examples.",
    category: "CSS",
    date: "Mar 5, 2024",
    author: "Riley Johnson",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop",
  },
];

export default function ExampleBlogCards() {
  return (
    <div className="relative w-full max-w-5xl px-8">
      <Carousel>
        <CarouselContent className="-ml-4">
          {blogPosts.map((post, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-4">
              <article className="group relative flex flex-col rounded-xl border bg-card overflow-hidden h-full">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                  {post.category}
                </span>
                <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="font-semibold leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
      </Carousel>
    </div>
  );
}

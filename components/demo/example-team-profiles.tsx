"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/registry/components/ui/carousel";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in tech. Passionate about building products that make a difference.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    bio: "Full-stack architect and open-source advocate. Loves solving complex technical challenges.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating delightful and accessible user experiences.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "Engineering leader who believes in empowering teams to build world-class software.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aisha Patel",
    role: "Head of Product",
    bio: "Product strategist with a data-driven approach to building features users love.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "VP of Marketing",
    bio: "Growth expert specializing in brand strategy and community building.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
];

export default function ExampleTeamProfiles() {
  return (
    <div className="relative w-full max-w-5xl">
      <Carousel className="px-8">
        <CarouselContent className="-ml-4">
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-4">
              <div className="flex flex-col items-center text-center rounded-xl border bg-card p-6 h-full">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {member.bio}
                </p>
                <div className="flex gap-3 mt-4 pt-4 border-t w-full justify-center">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation
          className="absolute left-0 right-0 top-1/2 w-auto -translate-y-1/2 justify-between px-2"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}

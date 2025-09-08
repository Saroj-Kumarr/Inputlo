"use client";

import { cn } from "@/lib/utils";
import TestimonialsCarousel from "./TestimonialSectionBottom";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
};

const DEFAULTS: Testimonial[] = [
  {
    quote:
      "This platform saved us hours every week. Super intuitive and the results are beautiful!",
    name: "Sarah Johnson",
    role: "Marketing Lead, NovaCorp",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "I love how smooth everything feels. Our customers noticed the difference instantly.",
    name: "Arjun Mehta",
    role: "Founder, Finverse",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    quote:
      "The customization options are unmatched. We’ve made it completely our own.",
    name: "Emily Chen",
    role: "Product Manager, Horizon Labs",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    quote:
      "Reliability and design finally in one place. I don’t worry about stability anymore.",
    name: "Carlos Mendes",
    role: "CTO, Vertex",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    quote:
      "We doubled our conversions within a month. The analytics gave us everything we needed.",
    name: "Priya Sharma",
    role: "Head of Growth, Elevate",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    quote:
      "From support to features, everything just works seamlessly. Best decision we made this year.",
    name: "James Lee",
    role: "Operations, BrightPath",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
  {
    quote:
      "Clean UI and strong integrations. We onboarded the whole team in less than a day.",
    name: "Olivia Martin",
    role: "Design Lead, Flux",
    avatar: "https://i.pravatar.cc/100?img=30",
  },
  {
    quote:
      "Finally a tool that adapts to us, not the other way around. Highly recommend!",
    name: "David Kim",
    role: "CEO, Zenith",
    avatar: "https://i.pravatar.cc/100?img=40",
  },
];

export function TestimonialsSection({
  heading = "We're in good form — just ask our customers",
  subheading,
  testimonials = DEFAULTS,
  className,
}: {
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
  className?: string;
}) {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className={cn("w-full bg-[#F6C957]", className)}
    >
      <div className="py-16 md:py-20">
        <header className="mx-auto px-5 md:px-0 max-w-3xl text-center">
          <h2
            id="testimonials-heading"
            className="text-pretty text-3xl font-medium text-slate-900 md:text-4xl"
          >
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-3 text-base leading-relaxed text-slate-900/80">
              {subheading}
            </p>
          ) : null}
        </header>

        <div className="mt-10 md:mt-12">
          <TestimonialsCarousel className="" testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

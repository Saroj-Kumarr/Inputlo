"use client";

import { cn } from "@/lib/utils";
import TestimonialsCarousel from "./TestimonialCarousel";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  avatarAlt?: string;
  avatarSrc?: string;
};

const DEFAULTS: Testimonial[] = [
  {
    quote:
      "Paperform lets us move fast while keeping our brand consistent. Embedding forms feels native and polished.",
    name: "Garbíñe Hoyo Martínez",
    role: "ReasonWhy",
  },
  {
    quote:
      "Forms now look like part of our site—not an add‑on. The customization is spot on and easy to maintain.",
    name: "Kassy Pajarillo",
    role: "kassypajarillo.com",
  },
  {
    quote:
      "We shipped a professional-looking store theme quickly and improved conversions while keeping control.",
    name: "Dennis Karle",
    role: "Blütenträume",
  },
  {
    quote:
      "The editor is a joy—our team ships forms in minutes and iterates without waiting on engineering.",
    name: "Ariana Patel",
    role: "Growth Lead, Finyx",
  },
  {
    quote:
      "Clean UI, reliable integrations, and strong security. Exactly what we needed for our launch.",
    name: "Marcus Nguyen",
    role: "PM, Northwind Labs",
  },
  {
    quote:
      "We reduced drop‑off by 27% with better UX and logic. The analytics made optimization obvious.",
    name: "Zoë Alvarez",
    role: "Head of Marketing, Lumen",
  },
  {
    quote:
      "It just works. From validations to payments, we replaced three tools with one stack.",
    name: "Daniel Reed",
    role: "Founder, Fairline",
  },
  {
    quote:
      "Roles, drafts, and approvals keep everything tidy and compliant for our ops team.",
    name: "Sofia Martins",
    role: "Operations, Umbra",
  },
  {
    quote:
      "Support is stellar—fast responses and thoughtful docs helped us scale confidently.",
    name: "Rafael Costa",
    role: "CTO, Aurelia",
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
          <TestimonialsCarousel
            className="" // carousel is now layout-only; section holds spacing/background
            testimonials={testimonials.map(
              ({ quote, name, role, avatarSrc }) => ({
                quote,
                name,
                role: role || "",
                avatar: avatarSrc,
              })
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

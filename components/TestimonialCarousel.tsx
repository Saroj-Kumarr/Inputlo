"use client";

import type React from "react";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Paperform seamlessly matches my existing pages. Our forms feel native, on-brand, and frictionless.",
    name: "Kassy Pajarillo",
    role: "kassypajarillo.com",
  },
  {
    quote:
      "We built new products fast without extra dev time. The whole interview flow was launched in days.",
    name: "Garbíñe Hoyo Martínez",
    role: "ReasonWhy",
  },
  {
    quote:
      "Conversion rates rose after theming our store. Beautiful and professional while staying fast.",
    name: "Dennis Karle",
    role: "Blütenträume",
  },
  // More dummy data...
  {
    quote:
      "The editor is a joy. Our team ships forms in minutes and iterates without waiting on engineering.",
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
      "Our ops team loves it—roles, drafts, and approvals keep everything tidy and compliant.",
    name: "Sofia Martins",
    role: "Operations, Umbra",
  },
  {
    quote:
      "Support is stellar. Fast responses and thoughtful docs helped us scale confidently.",
    name: "Rafael Costa",
    role: "CTO, Aurelia",
  },
];

// Unsplash avatar generator remains unchanged
const getUnsplashAvatar = (name: string, index: number): string => {
  const avatarIds = [
    "1494790108755-2616b612b786",
    "1507003211169-0a1dd7093c63",
    "1438761681033-6461ffad8d80",
    "1472099645785-5658abf4ff4e",
    "1544005313-94ddf0286df2",
    "1506794778202-cad84cf45f1d",
    "1580489944761-15a19d654956",
    "1519244703995-f4e0f30006d5",
    "1534528741775-53994a69daeb",
    "1500648767791-00dcc994a43e",
    "1573496359142-b8d87734a5a2",
    "1560250097-0b93528c311a",
    "1573497019940-1c28c88b4f3e",
    "1542909168-82c3e7fdca5c",
    "1531123897727-8fea7ca06ffa",
  ];

  const selectedId = avatarIds[index % avatarIds.length];
  return `https://images.unsplash.com/photo-${selectedId}?w=400&h=400&fit=crop&crop=face&auto=format&q=80`;
};

export function TestimonialsCarousel({
  testimonials = DEFAULT_TESTIMONIALS,
  className,
  options,
  useVarietyAvatars = false,
}: {
  testimonials?: Testimonial[];
  className?: string;
  options?: {
    loop?: boolean;
    align?: "start" | "center" | "end";
  };
  useVarietyAvatars?: boolean;
}) {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", ...options },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  interface EmblaApi {
    selectedScrollSnap(): number;
    scrollSnapList(): number[];
    on(event: string, callback: (api: EmblaApi) => void): void;
    scrollPrev(): void;
    scrollNext(): void;
    scrollTo(idx: number): void;
  }

  const onSelect = useCallback((api: EmblaApi) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (idx: number) => emblaApi?.scrollTo(idx),
    [emblaApi]
  );

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  }

  return (
    <div
      className={cn("relative w-full md:px-4", className)}
      aria-label="Testimonials carousel"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="md:-ml-4 flex touch-pan-y">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="pl-4 my-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
            >
              {/* Responsive slides: full width on mobile, half on md, third on lg */}
              <div className="h-full w-full min-w-80 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-slate-900/5 bg-white p-8 shadow-sm ring-1 ring-slate-900/10 md:p-10"
                >
                  <p className="mx-auto max-w-2xl text-pretty text-center text-base leading-relaxed text-slate-900">
                    {`"${t.quote}"`}
                  </p>

                  <div className="mt-8 flex flex-col items-center">
                    <img
                      src={
                        t.avatar ||
                        (useVarietyAvatars
                          ? getUnsplashAvatar(t.name, i)
                          : getUnsplashAvatar(t.name, i))
                      }
                      alt={`${t.name} avatar`}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-slate-900/10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80";
                      }}
                    />
                    <div className="mt-4 text-center">
                      <div className="text-sm font-medium text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-600">{t.role}</div>
                    </div>
                  </div>
                </motion.article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-1 md:flex">
        <div className="pointer-events-auto">
          <Button
            variant="secondary"
            size="icon"
            aria-label="Previous testimonials"
            onClick={scrollPrev}
            className="h-10 w-10 rounded-full bg-white/90 text-slate-900 shadow ring-1 ring-slate-900/10 hover:bg-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="pointer-events-auto">
          <Button
            variant="secondary"
            size="icon"
            aria-label="Next testimonials"
            onClick={scrollNext}
            className="h-10 w-10 rounded-full bg-white/90 text-slate-900 shadow ring-1 ring-slate-900/10 hover:bg-white"
          >
            <span className="sr-only">Next</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => scrollTo(idx)}
            className={cn(
              "h-2.5 w-2.5 rounded-full ring-1 ring-slate-900/10 transition",
              idx === selectedIndex
                ? "bg-slate-900"
                : "bg-white/80 hover:bg-white"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
];

// Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 160, damping: 20 },
  },
};

/**
 * Colors used (4 total to follow the design rules):
 * - Primary: #F6C957 (section background)
 * - Neutral 1: #0f172a (text-slate-900)
 * - Neutral 2: #ffffff (cards)
 * - Neutral 3: rgba(15,23,42,0.10) (borders/shadows)
 */
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
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-pretty text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-3 text-base leading-relaxed text-slate-900/80">
              {subheading}
            </p>
          ) : null}
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={idx}
              variants={item}
              className="group rounded-2xl border border-[rgba(15,23,42,0.10)] bg-white p-6 shadow-sm transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-md"
            >
              <figure className="flex h-full flex-col items-center text-center">
                <div
                  className="mb-4 text-5xl leading-none text-slate-900/20"
                  aria-hidden="true"
                >
                  {"“"}
                </div>

                <blockquote className="text-pretty text-base leading-relaxed text-slate-900">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-6 flex w-full flex-col items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-[rgba(15,23,42,0.10)] bg-white">
                    <img
                      src={
                        t.avatarSrc ??
                        "/placeholder.svg?height=96&width=96&query=person%20avatar"
                      }
                      alt={t.avatarAlt ?? `${t.name} avatar`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-slate-900">
                      {t.name}
                    </span>
                    {t.role ? (
                      <span className="text-xs text-slate-900/70">
                        {t.role}
                      </span>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

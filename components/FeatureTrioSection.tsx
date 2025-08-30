"use client";

import type React from "react";

import type { ReactNode } from "react";
import { Flower2, Calculator, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: ReactNode;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: Feature & { className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col items-center text-center rounded-2xl bg-white p-8 md:p-10",
        "ring-1 ring-slate-100 shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md focus-within:-translate-y-1",
        className
      )}
    >
      {/* Accent badge */}
      <div className="mb-6">
        <div
          className="relative grid h-16 w-16 place-items-center rounded-xl ring-1 ring-slate-200 bg-[#F6C957]/15"
          aria-hidden="true"
        >
          <Icon className="h-8 w-8 text-slate-900" />
          <span
            className="pointer-events-none absolute -bottom-1 right-2 inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: "#F6C957" }}
          />
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
}

const FEATURES: Feature[] = [
  {
    icon: Flower2,
    title: "Designed to stand out",
    description:
      "Build beautiful, on‑brand experiences that feel uniquely yours. More intuitive, more customizable, more capable.",
  },
  {
    icon: Calculator,
    title: "Science meets sorcery",
    description:
      "Powerful calculations and logic do the heavy lifting—transform text, compute rates and discounts, and react in real time.",
  },
  {
    icon: MousePointerClick,
    title: "Easy peasy",
    description:
      "No clunky menus. Create and edit like a document—fast, friendly, and 10× more fun to use.",
  },
];

export default function FeatureTrioSection() {
  return (
    <section
      aria-labelledby="feature-trio-title"
      className="bg-stone-50 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="feature-trio-title"
            className="text-balance text-3xl md:text-4xl font-medium tracking-tight text-slate-900"
          >
            Stunningly smart, uniquely yours.
          </h2>
        </header>

        {/* Divider */}
        <div
          className="mx-auto mt-10 h-px w-24 rounded-full"
          style={{ backgroundColor: "#F6C957" }}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:mt-16 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

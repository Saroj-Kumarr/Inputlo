"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Drag & Drop Builder",
    desc: "Easily design responsive forms without coding using our intuitive drag-and-drop interface.",
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&q=80&auto=format&fit=crop", // person using laptop with design interface
  },
  {
    title: "Conditional Logic",
    desc: "Show or hide fields, skip steps, and personalize forms dynamically based on user input.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop", // flowchart/decision tree visualization
  },
  {
    title: "Payment Integration",
    desc: "Collect payments directly in your forms with Stripe, PayPal, and more — secure and seamless.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop", // credit card and mobile payment
  },

  {
    title: "Built-in Templates",
    desc: "Kickstart with 100+ customizable templates for surveys, lead capture, onboarding, and more.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop", // website templates/layouts on screen
  },
];

export function WhyFormsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          What makes our forms{" "}
          <span className="text-[#F6C957]">convert so well</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* Left side: feature list */}
          <div className="flex flex-col space-y-4">
            {features.map((f, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={cn(
                  "rounded-lg px-5 py-4 text-left transition-colors",
                  active === idx
                    ? "bg-white/10 border-l-2 border-[#F6C957]"
                    : "hover:bg-white/5"
                )}
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                {active === idx && (
                  <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                )}
              </button>
            ))}
          </div>

          {/* Right side: dynamic preview */}
          <div className="relative">
            <div className="rounded-xl bg-white/5 relative overflow-hidden h-80 ring-1 ring-white/10 shadow-xl p-4">
              <Image
                key={features[active].img}
                src={features[active].img}
                alt={features[active].title}
                width={600}
                height={400}
                className="rounded-md object-cover transition-opacity duration-300 w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm text-slate-400 text-center">
              {features[active].title} in action
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

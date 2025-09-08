"use client";

import type React from "react";

import { motion } from "framer-motion";
import { FileText, Layers, CreditCard } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

type Stat = {
  label: string;
  value: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function useCountUp(to: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);

  useEffect(() => {
    function animate(ts: number) {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(to * eased));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      }
    }
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      start.current = null;
    };
  }, [to, duration]);

  return val;
}

function StatCard({
  value,
  label,
  Icon,
}: {
  value: number;
  label: string;
  Icon: Stat["icon"];
}) {
  return (
    <motion.li
      className="rounded-lg border bg-background p-6 shadow-sm"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-foreground/80">
          <Icon className="h-5 w-5 text-foreground" aria-hidden />
        </span>
        <div>
          <div className="text-2xl font-semibold tabular-nums">
            {<AnimatedCounter end={+value} duration={2000} />}
          </div>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </motion.li>
  );
}

export function StatsCta({ className }: { className?: string }) {
  const stats: Stat[] = [
    { label: "submissions", value: 80500, icon: FileText },
    { label: "forms", value: 6500, icon: Layers },
    { label: "payments processed", value: 250650, icon: CreditCard },
  ];

  return (
    <section
      className={cn(
        "relative isolate md:py-8 pb-10  overflow-hidden bg-muted/30",
        className
      )}
      aria-labelledby="stats-cta-title"
    >
      {/* Vector background: layered geometric polygons (theme-based colors) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-[420px] w-[880px] text-muted"
        viewBox="0 0 880 420"
        fill="none"
      >
        <polygon
          points="200,0 880,0 880,420 0,420"
          className="fill-current"
          opacity="0.6"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-0 h-[260px] w-[560px] text-primary/10"
        viewBox="0 0 560 260"
        fill="none"
      >
        <polygon points="140,0 560,0 560,260 0,260" className="fill-current" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        {/* Stats */}
        <motion.ul
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              label={s.label}
              Icon={s.icon}
            />
          ))}
        </motion.ul>

        {/* CTA */}
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto] relative top-20 md:top-10">
          <div className="">
            <h2
              id="stats-cta-title"
              className="text-pretty text-2xl font-semibold leading-8"
            >
              Discover the power of Paperform for yourself.
            </h2>
            <p className="mt-2 max-w-prose text-muted-foreground">
              Try our tools with a focused, distraction-free experience. No
              credit card required.
            </p>
          </div>
          <motion.div
            className="justify-self-start md:justify-self-end"
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Button asChild>
              <Link href="#get-started">Start your 7‑day trial</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

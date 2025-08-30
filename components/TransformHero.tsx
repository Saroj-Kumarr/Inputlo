"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function TransformHero({ className }: Props) {
  return (
    <section
      aria-labelledby="transform-title"
      className={cn(
        "relative isolate overflow-hidden",
        "px-6 py-16 md:px-10 md:py-24",
        className
      )}
    >
      {/* Decorative vector background (kept subtle, accessible-hidden) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
      >
        {/* Accent amber sweep */}
        <motion.path
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          d="M0,0 L860,0 C720,120 520,270 470,360 C420,460 270,530 0,570 Z"
          className="fill-amber-300/60"
        />
        {/* Cream cap that creates the top-right curve */}
        <motion.path
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          d="M1440,0 L1440,260 C1220,300 980,330 740,340 C620,345 490,330 440,300 C405,278 620,110 800,0 Z"
          className="fill-background"
        />
        {/* Primary navy wave */}
        <motion.path
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          d="M1440,720 L960,720 C880,540 800,380 700,320 C585,247 1140,225 1440,240 Z"
          className="fill-slate-900"
        />
        {/* Soft blue corner accent */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.25 }}
          d="M1440,720 L1440,540 L1264,360 L1100,720 Z"
          className="fill-sky-200"
        />
      </svg>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Copy block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h2
            id="transform-title"
            className="text-pretty font-sans text-4xl font-medium leading-tight tracking-tight"
          >
            Transform your business with effortless forms
          </h2>
          <p className="mt-8 text-balance leading-relaxed text-muted-foreground ">
            Skip the busywork. Collect data, take payments, and automate
            workflows—all with a clean, elegant experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#get-started"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-3",
                "bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors"
              )}
            >
              Get your 7‑day trial
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#learn-more"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm md:text-base hover:bg-muted/60"
            >
              Learn more
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span
                className="inline-block size-2 rounded-full bg-amber-400"
                aria-hidden="true"
              />
              No credit card needed
            </li>
            <li className="flex items-center gap-2">
              <span
                className="inline-block size-2 rounded-full bg-amber-400"
                aria-hidden="true"
              />
              Cancel anytime
            </li>
          </ul>
        </motion.div>

        {/* Simple preview card with subtle float */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <div className="h-8 w-28 rounded bg-teal-300/60" />
              <div className="h-8 w-20 rounded bg-amber-300/60" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="h-24 rounded-lg bg-purple-300/60" />
              <div className="h-24 rounded-lg bg-blue-300/60" />
              <div className="col-span-2 h-10 rounded-lg bg-cyan-300/60" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

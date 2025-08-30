"use client";

import { motion, type Variants } from "framer-motion";
import {
  CalendarDays,
  CreditCard,
  FileText,
  Ligature as Signature,
} from "lucide-react";
import type React from "react";

type Item = {
  title: string;
  description: string;
  replaces: string;
  mediaSrc: string;
  icon: React.ElementType;
  mediaLeft?: boolean;
};

const items: Item[] = [
  {
    title: "Forms & Surveys",
    description:
      "Flexible online forms that are easy to create and even easier to fill out. Capture leads, accept payments, share surveys — and so much more.",
    replaces: "Replaces: Google Forms, Typeform, Jotform",
    mediaSrc:
      "http://img.paperform.co/fetch/f_auto/https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/webform-nocode.png",
    icon: FileText,
    mediaLeft: false,
  },
  {
    title: "Scheduling and Booking Management",
    description:
      "Automate your schedule. Connect your calendar and let people find the perfect time. Focus on your meetings, not on planning them.",
    replaces: "Replaces: Calendly, Doodle, TidyCal",
    mediaSrc:
      "https://img.paperform.co/fetch/f_auto/https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/appointments.jpg",
    icon: CalendarDays,
    mediaLeft: true,
  },
  {
    title: "Papersign",
    description:
      "Simplify document signing with our eSignature product so you can spend less time in email chains and more time on the important stuff.",
    replaces: "Replaces: DocuSign, HelloSign, Acrobat Sign",
    mediaSrc:
      "https://img.paperform.co/fetch/f_auto/https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/editor-3-.gif",
    icon: Signature,
    mediaLeft: false,
  },
  {
    title: "Payments",
    description:
      "Start selling online in minutes — services, subscriptions, or physical goods. Launch a custom storefront fast and securely.",
    replaces: "Integrates: Stripe, Square, PayPal",
    mediaSrc:
      "https://img.paperform.co/fetch/f_auto/https://d3gw2uv1ch7vdq.cloudfront.net/pageimg/checkout.jpg",
    icon: CreditCard,
    mediaLeft: true,
  },
];

const fade: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function EndlessPossibilities() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 text-balance">
            Endless possibilities
          </h2>
          <p className="mt-3 text-slate-600">
            Solutions that empower you to get back to life.
          </p>
        </motion.div>

        {/* Rows */}
        <div className="space-y-20 md:space-y-28">
          {items.map((item, i) => {
            const Icon = item.icon;

            const Text = (
              <motion.div
                key={`t-${i}`}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="order-2 md:order-none"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F6C957]/30 ring-1 ring-[#F6C957] px-3 py-1 mb-4">
                  <Icon className="h-4 w-4 text-slate-900" aria-hidden />
                  <span className="text-[11px] font-medium text-slate-900">
                    Possibility
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-3 text-sm italic text-slate-600">
                  {item.replaces}
                </p>
              </motion.div>
            );

            const Media = (
              <motion.div
                key={`m-${i}`}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                {/* Accent panel behind media */}
                <div
                  aria-hidden
                  className="absolute -inset-4 md:-inset-6 rounded-2xl bg-[#F6C957] opacity-90 shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
                />
                <img
                  src={item.mediaSrc || "/placeholder.svg"}
                  alt={`${item.title} screenshot`}
                  className="relative w-full max-h-96 rounded-2xl ring-1 ring-slate-200 shadow-lg"
                />
              </motion.div>
            );

            return (
              <div
                key={i}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {item.mediaLeft ? (
                  <>
                    {Media}
                    {Text}
                  </>
                ) : (
                  <>
                    {Text}
                    {Media}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EndlessPossibilities;

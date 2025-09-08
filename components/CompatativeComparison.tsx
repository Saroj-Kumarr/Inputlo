"use client";

import React from "react";

const THEME = "#F6C957";

type Row = {
  feature: string;
  inputlo: string;
  typeform: string;
  tally: string;
  fillout: string;
  why: string;
};

const defaultRows: Row[] = [
  {
    feature: "Ultra-Fast, Lightweight Embeds",
    inputlo: "Inline DOM (no iframe), <300ms load, Lighthouse ≥90",
    typeform: "iFrame-based, slower load",
    tally: "iFrame, decent speed",
    fillout: "iFrame embed, moderate load",
    why: "Forms load faster than any competitor, reducing drop-offs.",
  },
  {
    feature: "Generous Free Tier",
    inputlo: "Unlimited forms, ~10k responses/month",
    typeform: "Free = 10 responses/month cap",
    tally: "Free unlimited, but capped features",
    fillout: "Free 100 responses/month",
    why: "Combines Tally's generosity + enterprise transparency → no hidden costs.",
  },
  {
    feature: "Partial Save & Resume",
    inputlo: "Autosave + Magic Link + mid-form webhook",
    typeform: "Not included",
    tally: "Not available",
    fillout: "Limited save/resume on paid",
    why: "Lets users return later & triggers mid-form events — game-changer.",
  },
  {
    feature: "Built-in Pixels (Meta, GA4, TikTok)",
    inputlo: "Available on free plan + server-side events",
    typeform: "Only paid tier",
    tally: "Not available",
    fillout: "Not available",
    why: "No one else offers pixels + server events free → marketers love it.",
  },
  {
    feature: "Mid-form Webhook Triggers",
    inputlo: "Trigger after key fields (e.g., email)",
    typeform: "Not supported",
    tally: "Not supported",
    fillout: "Not supported",
    why: "Captures leads before drop-off → Inputlo is funnel-optimized.",
  },
  {
    feature: "Conditional Logic",
    inputlo: "Basic skip logic on free plan",
    typeform: "Available (paid)",
    tally: "Available",
    fillout: "Available",
    why: "On par, but Inputlo combines it with speed + transparency.",
  },
  {
    feature: "Responsive Themes",
    inputlo: "3–5 styled themes + 'Powered by Inputlo' badge (free)",
    typeform: "Custom branding (paid)",
    tally: "Simple themes",
    fillout: "Basic themes",
    why: "Looks pro even for free users.",
  },
  {
    feature: "Analytics",
    inputlo: "Submission counts, completion rate, avg completion time (free)",
    typeform: "Paid analytics",
    tally: "Minimal stats",
    fillout: "Limited",
    why: "Analytics included in free plan, unlike competitors.",
  },
];

export default function CompetitiveComparison({
  rows = defaultRows,
  className = "",
}: {
  rows?: Row[];
  className?: string;
}) {
  return (
    <section
      className={`w-full py-16 ${className}`}
      aria-labelledby="comp-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h3 id="comp-heading" className="text-4xl mb-2 font-semibold">
            Inputlo MVP 1 vs Market Leaders
          </h3>
          <p className="text-pretty text-slate-600 text-center">
            A quick comparison showing how Inputlo outperforms existing form
            builders.
          </p>
        </div>

        {/* DESKTOP: table (md+) */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow border border-gray-200">
          <table className="min-w-full text-sm text-center">
            <thead>
              <tr className="bg-white">
                <th className="px-4 py-4 font-semibold text-gray-700">
                  Feature
                </th>
                <th
                  className="px-4 py-4 font-semibold"
                  style={{ color: THEME }}
                >
                  Inputlo MVP 1
                </th>
                <th className="px-4 py-4 font-semibold text-gray-700">
                  Typeform
                </th>
                <th className="px-4 py-4 font-semibold text-gray-700">Tally</th>
                <th className="px-4 py-4 font-semibold text-gray-700">
                  Fillout
                </th>
                <th className="px-4 py-4 font-semibold text-gray-700">
                  Why Inputlo Wins
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => {
                const zebra =
                  idx % 2 === 0 ? "bg-white" : "bg-[rgba(246,201,87,0.10)]"; // 10% theme tint
                return (
                  <tr key={idx} className={`${zebra}`}>
                    <td className="px-4 py-4 font-medium text-gray-800">
                      {r.feature}
                    </td>
                    <td className="px-4 py-4 text-gray-900">{r.inputlo}</td>
                    <td className="px-4 py-4 text-gray-700">{r.typeform}</td>
                    <td className="px-4 py-4 text-gray-700">{r.tally}</td>
                    <td className="px-4 py-4 text-gray-700">{r.fillout}</td>
                    <td className="px-4 py-4 text-gray-800 font-medium">
                      {r.why}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* MOBILE: stacked cards (mobile-first) */}
        <div className="md:hidden space-y-4">
          {rows.map((r, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4"
              aria-labelledby={`feature-mobile-${idx}`}
            >
              <header className="flex items-start justify-between gap-3">
                <h4
                  id={`feature-mobile-${idx}`}
                  className="text-sm font-semibold text-gray-800"
                >
                  {r.feature}
                </h4>
                <span
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{ background: "rgba(246,201,87,0.12)", color: THEME }}
                >
                  Inputlo
                </span>
              </header>

              <div className="mt-3 grid grid-cols-1 gap-2">
                {/* competitor rows */}
                <div className="flex items-start justify-between">
                  <div className="text-xs text-gray-600">Inputlo</div>
                  <div className="text-xs text-gray-800 text-right max-w-[60%]">
                    {r.inputlo}
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div className="text-xs text-gray-600">Typeform</div>
                  <div className="text-xs text-gray-700 text-right max-w-[60%]">
                    {r.typeform}
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div className="text-xs text-gray-600">Tally</div>
                  <div className="text-xs text-gray-700 text-right max-w-[60%]">
                    {r.tally}
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div className="text-xs text-gray-600">Fillout</div>
                  <div className="text-xs text-gray-700 text-right max-w-[60%]">
                    {r.fillout}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="text-xs font-medium text-gray-800">
                    Why Inputlo Wins
                  </div>
                  <div className="mt-1 text-xs text-gray-600">{r.why}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl">
            Built for speed, transparency, and conversions — Inputlo is
            optimized for real-world marketing funnels.
          </p>
          <div className="flex gap-3">
            <button
              className="rounded-md px-5 py-2 text-sm font-semibold shadow"
              style={{ background: THEME, color: "#000" }}
            >
              Try Inputlo — it&apos;s free
            </button>
            <button className="rounded-md border px-5 py-2 text-sm text-gray-700">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

type PlanKey = "basic" | "standard" | "pro";

type Feature = {
  id: string;
  label: string;
  availability: Partial<Record<PlanKey, boolean>>;
};

const THEME = "#F6C957"; // your theme color

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingComparison() {
  // Feature list
  const allFeatures: string[] = [
    "Drag & Drop Form Builder",
    "Ready-made Templates",
    "Embed on Websites",
    "Custom Branding & Themes",
    "File Uploads",
    "Conditional Logic & Branching",
    "Multi-page Forms & Progress Save",
    "Form Analytics & Conversion Tracking",
    "Team Collaboration & Roles",
    "Custom Domains & White Label",
    "API Access & Export",
    "Priority Support",
    "SSO / SAML (Enterprise)",
    "Advanced Security & Compliance",
    "Custom Workflows",
    "Unlimited Responses",
    "Data Export & Backup",
  ];

  // Availability logic: Basic last 10 ❌, Standard last 5 ❌, Pro all ✅
  const features: Feature[] = allFeatures.map((label, idx) => {
    const total = allFeatures.length;
    const basicAvailable = idx < total - 10; // last 10 are false
    const standardAvailable = idx < total - 5; // last 5 are false
    const proAvailable = true;

    return {
      id: `f-${idx}`,
      label,
      availability: {
        basic: basicAvailable,
        standard: standardAvailable,
        pro: proAvailable,
      },
    };
  });

  const plans = {
    basic: { name: "Basic", price: "Free" },
    standard: { name: "Standard", price: "$12 / mo" },
    pro: { name: "Pro", price: "$29 / mo" },
  } as const;

  return (
    <section
      aria-labelledby="pricing-comparison-heading"
      className="w-full pb-20 bg-white"
      style={{ "--theme": THEME } as React.CSSProperties}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="pricing-comparison-heading"
          className="text-4xl font-semibold text-center mb-8"
        >
          Pricing Comparison
        </h2>

        <p className="text-pretty text-slate-600 text-center">
          Choose the plan that fits your needs — start free and upgrade anytime.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block rounded-lg overflow-hidden shadow-sm border mt-8">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-white border-b">
                <th className="text-left px-6 py-5 w-2/5 text-sm font-bold text-gray-700">
                  Features
                </th>

                {/* Basic */}
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">
                  <div className="flex flex-col items-center">
                    <span
                      className="text-base font-bold"
                      style={{ color: THEME }}
                    >
                      {plans.basic.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {plans.basic.price}
                    </span>
                  </div>
                </th>

                {/* Standard */}
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">
                  <div className="flex flex-col items-center">
                    <span
                      className="text-base font-bold"
                      style={{ color: THEME }}
                    >
                      {plans.standard.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {plans.standard.price}
                    </span>
                  </div>
                </th>

                {/* Pro - highlighted */}
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="flex flex-col items-center px-3 py-1 rounded-md"
                      style={{ background: "rgba(246,201,87,0.08)" }}
                    >
                      <span
                        className="text-base font-bold"
                        style={{ color: THEME }}
                      >
                        {plans.pro.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {plans.pro.price}
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((f, idx) => {
                // zebra using theme tint at ~10% opacity
                const zebraBg =
                  idx % 2 === 0 ? "bg-white" : "bg-[rgba(246,201,87,0.10)]";
                return (
                  <tr key={f.id} className={`${zebraBg}`}>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {f.label}
                    </td>

                    {/* Basic */}
                    <td className="px-6 py-4 text-center">
                      {f.availability.basic ? (
                        <span
                          className="inline-flex items-center justify-center"
                          style={{ color: "#63CD7A" }}
                        >
                          <CheckIcon className="w-5 h-5" />
                          <span className="sr-only">Included</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center text-gray-600">
                          <CrossIcon className="w-5 h-5" />
                          <span className="sr-only">Not included</span>
                        </span>
                      )}
                    </td>

                    {/* Standard */}
                    <td className="px-6 py-4 text-center">
                      {f.availability.standard ? (
                        <span
                          className="inline-flex items-center justify-center"
                          style={{ color: "#63CD7A" }}
                        >
                          <CheckIcon className="w-5 h-5" />
                          <span className="sr-only">Included</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center text-gray-600">
                          <CrossIcon className="w-5 h-5" />
                          <span className="sr-only">Not included</span>
                        </span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="px-6 py-4 text-center">
                      {f.availability.pro ? (
                        <span
                          className="inline-flex items-center justify-center"
                          style={{ color: "#63CD7A" }}
                        >
                          <CheckIcon className="w-5 h-5" />
                          <span className="sr-only">Included</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center text-gray-600">
                          <CrossIcon className="w-5 h-5" />
                          <span className="sr-only">Not included</span>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked plan cards */}
        <div className="md:hidden space-y-4 mt-6">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className="rounded-lg border bg-white shadow-sm overflow-hidden"
            >
              <div className="px-4 py-4 flex items-center justify-between border-b">
                <div>
                  <div className="text-lg font-bold" style={{ color: THEME }}>
                    {plan.name}
                  </div>
                  <div className="text-xs text-gray-500">{plan.price}</div>
                </div>
                {key === "pro" && (
                  <div
                    className="text-xs rounded-full px-2 py-1 font-semibold"
                    style={{ background: THEME, color: "#000" }}
                  >
                    Most Popular
                  </div>
                )}
              </div>

              <ul className="px-4 py-3 space-y-2">
                {features.map((f, idx) => {
                  const ok = f.availability[key as PlanKey];
                  const zebra =
                    idx % 2 === 0 ? "" : "bg-[rgba(246,201,87,0.06)]";
                  return (
                    <li
                      key={f.id}
                      className={`flex items-center justify-between text-sm text-gray-800 px-2 py-2 rounded ${zebra}`}
                    >
                      <div>{f.label}</div>
                      <div
                        style={{ color: ok ? THEME : undefined }}
                        className={ok ? "font-semibold" : "text-gray-400"}
                      >
                        {ok ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <CrossIcon className="w-5 h-5" />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Basic plan is free — try all essential features without paying.
            Upgrade to Pro for advanced & enterprise capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}

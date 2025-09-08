"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const THEME = "#F6C957";

const FAQS = [
  {
    q: "How do I create my first form?",
    a: "Click 'Create Form' from your dashboard, choose from our templates or start from scratch. Use our drag-and-drop builder to add fields, customize styling, and configure settings. Preview and publish when ready.",
  },
  {
    q: "Can I customize the appearance of my forms?",
    a: "Yes — customize colors, fonts, backgrounds, and layouts to match your brand. Use our theme editor or apply custom CSS. You can also add your logo and create branded thank you pages.",
  },
  {
    q: "How do I collect and manage form responses?",
    a: "All responses are automatically saved to your dashboard. Export data to CSV/Excel, set up email notifications, or integrate with tools like Google Sheets, Zapier, or your CRM for automated workflows.",
  },
  {
    q: "Do you offer team collaboration features?",
    a: "Yes — invite team members with different permission levels, share forms across workspaces, collaborate on form building, and manage responses together with role-based access controls.",
  },
  {
    q: "What integrations are available?",
    a: "Connect with 100+ apps including Google Workspace, Microsoft 365, Slack, Mailchimp, HubSpot, Zapier, and payment processors like Stripe and PayPal for seamless workflow automation.",
  },
  {
    q: "Is my data secure and compliant?",
    a: "Absolutely — we use enterprise-grade encryption, are GDPR and CCPA compliant, offer data residency options, and provide audit logs. All forms are secured with SSL and optional password protection.",
  },
];

export default function FAQSectionEqual() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<number[]>([]);
  const headersRef = useRef<Array<HTMLButtonElement | null>>([]);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const pathname = usePathname();

  // Calculate all heights upfront to prevent glitching
  useEffect(() => {
    const measuredHeights = contentRefs.current.map((ref) => {
      if (ref) {
        const originalDisplay = ref.style.display;
        const originalHeight = ref.style.height;
        const originalVisibility = ref.style.visibility;

        // Temporarily make visible to measure
        ref.style.display = "block";
        ref.style.height = "auto";
        ref.style.visibility = "hidden";

        const height = ref.scrollHeight;

        // Restore original styles
        ref.style.display = originalDisplay;
        ref.style.height = originalHeight;
        ref.style.visibility = originalVisibility;

        return height;
      }
      return 0;
    });
    setHeights(measuredHeights);
  }, []);

  // keyboard navigation (Up/Down/Escape)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const focusEl = document.activeElement;
      const idx = headersRef.current.findIndex((el) => el === focusEl);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next =
          idx === -1 ? 0 : Math.min(headersRef.current.length - 1, idx + 1);
        headersRef.current[next]?.focus();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev =
          idx === -1 ? headersRef.current.length - 1 : Math.max(0, idx - 1);
        headersRef.current[prev]?.focus();
      }
      if (e.key === "Escape") {
        setOpenIndex(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      aria-labelledby="faq-heading"
      className={`relative py-16 bg-[#F9FAFB]`}
      style={
        { ["--theme"]: THEME } as React.CSSProperties & Record<string, string>
      }
    >
      <style>{`
        .theme-outline {
          background: linear-gradient(90deg, transparent, ${THEME} 30%, ${THEME} 60%, transparent);
          background-size: 300% 300%;
          transition: opacity 200ms ease;
        }
        
        .faq-container {
          contain: layout style paint;
          transform: translateZ(0);
        }
        
        .faq-content {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .no-select {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        {/* heading */}
        <div className="text-center mb-8">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111827]"
          >
            Frequently asked questions{" "}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto">
            Everything you need to know about creating, customizing, and
            managing your forms.
          </p>
        </div>

        {/* Centered FAQ container */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="space-y-4 faq-container">
              {FAQS.map((f, idx) => {
                const isOpen = openIndex === idx;
                const targetHeight = heights[idx] || 0;

                return (
                  <div
                    key={f.q}
                    className="relative group cs m-1 my-3  rounded-xl"
                  >
                    {/* faint animated outline behind each item */}
                    <div
                      className="theme-outline pointer-events-none"
                      style={{ opacity: 0.12, zIndex: -1 }}
                    />

                    <div
                      className="rounded-2xl bg-white shadow-sm border border-transparent faq-container"
                      style={{
                        boxShadow: "0 6px 20px rgba(10,10,10,0.04)",
                      }}
                    >
                      <button
                        ref={(el) => {
                          headersRef.current[idx] = el;
                        }}
                        id={`faq-${idx}-header`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${idx}-panel`}
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 transition-colors duration-150 hover:bg-gray-50/50"
                      >
                        <div className="flex items-start gap-4">
                          {/* icon circle - updated with form-related icon */}
                          <div
                            className="rounded-lg shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-150"
                            style={{
                              background: `color-mix(in srgb, ${THEME} 10%, white)`,
                              color: THEME,
                              border: "1px solid rgba(0,0,0,0.04)",
                              transform: isOpen ? "scale(1.05)" : "scale(1)",
                            }}
                            aria-hidden
                          >
                            {/* form/document icon */}
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="no-select"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14,2 14,8 20,8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10,9 9,9 8,9" />
                            </svg>
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900 no-select">
                              {f.q}
                            </div>
                            <div className="mt-1 hidden md:block text-xs text-gray-500 no-select">
                              Click to read the answer
                            </div>
                          </div>
                        </div>

                        {/* animated + / - toggle (rotates when open) */}
                        <div className="flex items-center ml-2">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.04)] transition-all duration-150 hover:bg-[rgba(0,0,0,0.08)]"
                            style={{
                              transform: `rotate(${isOpen ? 45 : 0}deg)`,
                            }}
                            aria-hidden
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="no-select"
                            >
                              <path d="M12 6v12M6 12h12" />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {/* Content with precise height control */}
                      <div
                        id={`faq-${idx}-panel`}
                        role="region"
                        aria-labelledby={`faq-${idx}-header`}
                        className="overflow-hidden transition-all duration-200 ease-out faq-content"
                        style={{
                          height: isOpen ? `${targetHeight}px` : "0px",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div
                          ref={(el) => {
                            contentRefs.current[idx] = el;
                          }}
                          className="px-5 pb-5 text-[10px] md:text-sm text-gray-600"
                        >
                          <div className="pt-2 -mt-2">{f.a}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

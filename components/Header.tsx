"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/* -----------------------
   Your Original Logo
   ----------------------- */
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 mr-6" aria-label="Home">
      <div className="logo6">
        <div className="dots-icon">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="text-2xl font-semibold tracking-wider text-slate-900">
          InputLo
        </div>
      </div>
    </Link>
  );
}

/* -----------------------
   Hover Dropdown (desktop)
   ----------------------- */
function NavDropdown({
  label,
  items,
  features,
}: {
  label: string;
  items: { label: string; href: string }[];
  features: { title: string; desc: string }[];
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-slate-800 hover:text-slate-900 focus:outline-none"
      >
        <span>{label}</span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>

      {/* Panel */}
      <div
        aria-hidden={!open}
        className={cn(
          "pointer-events-none transition-all duration-150 ease-in-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2"
        )}
      >
        <div
          ref={panelRef}
          className="absolute left-0 top-full mt-3 w-[820px] min-w-[720px] rounded-lg bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-6 p-6">
            {/* Left: feature list */}
            <div className="space-y-6 pr-4 border-r border-slate-100">
              <h3 className="text-sm font-semibold text-slate-600">
                Form Builder Features
              </h3>

              <div className="space-y-4">
                {features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-sm shrink-0"
                      style={{ background: "#F6C957" }}
                      aria-hidden="true"
                    >
                      {/* small generic icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect x="3" y="3" width="4" height="4" rx="1.2" />
                        <rect x="10" y="3" width="4" height="4" rx="1.2" />
                        <rect x="17" y="3" width="4" height="4" rx="1.2" />
                        <rect x="3" y="10" width="4" height="4" rx="1.2" />
                        <rect x="10" y="10" width="4" height="4" rx="1.2" />
                        <rect x="17" y="10" width="4" height="4" rx="1.2" />
                      </svg>
                    </div>

                    <div>
                      <Link
                        href="#"
                        className="text-sm font-semibold text-slate-900 hover:underline"
                      >
                        {f.title}
                      </Link>
                      <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: links + case study card */}
            <div className="pl-4">
              <div className="flex flex-col gap-4 h-full">
                <div className="space-y-2">
                  {items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="block text-sm text-slate-800 hover:text-slate-900"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="text-lg font-extrabold text-slate-900">
                          +245%
                        </div>
                        <div className="mt-1 text-sm font-semibold text-slate-800">
                          Increase in Welcome Flow Revenue
                        </div>
                        <p className="mt-2 text-xs text-slate-600">
                          How a merchant increased welcome-flow revenue by +245%
                          using our forms.
                        </p>

                        <div className="mt-3">
                          <Link
                            href="#"
                            className="inline-block rounded-full px-3 py-2 text-xs font-medium"
                            style={{ background: "#F6C957", color: "#0b1220" }}
                          >
                            Read Full Post
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -----------------------
   Desktop nav
   ----------------------- */
function DesktopNav() {
  const productFeatures = [
    {
      title: "Drag & Drop Builder",
      desc: "Build beautiful, responsive forms in seconds with our visual editor — no code needed.",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="4" height="4" rx="1.2" />
          <rect x="10" y="3" width="4" height="4" rx="1.2" />
          <rect x="17" y="3" width="4" height="4" rx="1.2" />
          <rect x="3" y="10" width="4" height="4" rx="1.2" />
          <rect x="10" y="10" width="4" height="4" rx="1.2" />
          <rect x="17" y="10" width="4" height="4" rx="1.2" />
        </svg>
      ),
    },
    {
      title: "Conditional Logic",
      desc: "Show personalised follow-ups and skip irrelevant questions with smart logic paths.",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 12h8" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 4v8" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="18" cy="18" r="3" />
        </svg>
      ),
    },
    {
      title: "Payments & Integrations",
      desc: "Accept payments (Stripe, PayPal) and connect with Zapier, Slack, Google Sheets and more.",
      Icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7h18" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="3" y="10" width="18" height="8" rx="2" />
        </svg>
      ),
    },
  ];

  // right column icons (small inline integrations / features)
  const rightIcons = [
    {
      name: "Stripe",
      svg: () => (
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden>
          <rect width="34" height="20" rx="3" />
        </svg>
      ),
    },
    {
      name: "Zapier",
      svg: () => (
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="8" />
        </svg>
      ),
    },
    {
      name: "Slack",
      svg: () => (
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden>
          <rect x="6" y="3" width="6" height="14" rx="1" />
        </svg>
      ),
    },
    {
      name: "Google Sheets",
      svg: () => (
        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden>
          <rect x="3" y="3" width="28" height="14" rx="1" />
        </svg>
      ),
    },
  ];

  return (
    <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
      <NavDropdown
        label="Product"
        items={[
          { label: "Templates", href: "/templates" },
          { label: "Success Stories", href: "/success-stories" },
          { label: "Pricing", href: "/pricing" },
        ]}
        features={productFeatures.map((f) => ({
          title: f.title,
          desc: f.desc,
        }))} // keep existing NavDropdown API
      />

      <Link
        href="/templates"
        className="rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900"
      >
        Templates
      </Link>

      <Link
        href="/resources"
        className="rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900"
      >
        Resources
      </Link>

      <Link
        href="/pricing"
        className="rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900"
      >
        Pricing
      </Link>

      {/* New: a compact "feature preview" dropdown trigger (desktop only) */}
      <div className="relative group">
        <button
          className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900 focus:outline-none"
          aria-haspopup="true"
        >
          Features
          <ChevronDown className="h-4 w-4" />
        </button>

        <div className="absolute right-0 mt-3 w-[520px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150">
          <div className="rounded-lg bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 gap-6 p-5">
              {/* Left: feature list with icons */}
              <div className="space-y-4">
                {productFeatures.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-md shrink-0"
                      style={{ background: "#F6C957" }}
                      aria-hidden="true"
                    >
                      {/* render icon */}
                      {f.Icon ? <f.Icon /> : null}
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {f.title}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: icons grid + illustrative image */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-4 gap-2 items-center">
                  {rightIcons.map((it) => (
                    <div
                      key={it.name}
                      title={it.name}
                      className="flex h-9 w-11 items-center justify-center rounded-md bg-slate-50 border border-slate-100"
                    >
                      {it.svg()}
                    </div>
                  ))}
                </div>

                <div className="mt-1 rounded-md overflow-hidden bg-slate-100 border border-slate-100">
                  {/* placeholder — replace with illustrative image showing form builder UI */}
                  <img
                    src="/images/form-builder-right.png"
                    alt="Form builder preview"
                    className="w-full h-28 object-cover"
                  />
                </div>

                <div>
                  <Link
                    href="/features"
                    className="inline-block rounded-full px-3 py-2 text-xs font-medium"
                    style={{ background: "#F6C957", color: "#0b1220" }}
                  >
                    See all features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* -----------------------
   Mobile navigation (sheet)
   ----------------------- */
function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-7 w-7" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center">
              <Logo />
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-2">
          {/* mobile links same as before */}
          <span className="px-2 text-xs uppercase tracking-wide text-slate-500">
            Products
          </span>
          {[
            { label: "Form Builder", href: "/products/form-builder" },
            { label: "Payments", href: "/products/payments" },
            { label: "Automation", href: "/products/automation" },
          ].map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}

          <span className="mt-4 px-2 text-xs uppercase tracking-wide text-slate-500">
            Solutions
          </span>
          {[
            { label: "SMBs", href: "/solutions/smb" },
            { label: "Agencies", href: "/solutions/agencies" },
            { label: "Education", href: "/solutions/education" },
          ].map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}

          <span className="mt-4 px-2 text-xs uppercase tracking-wide text-slate-500">
            Integrations
          </span>
          {[
            { label: "Zapier", href: "/integrations/zapier" },
            { label: "Slack", href: "/integrations/slack" },
            { label: "Google Sheets", href: "/integrations/google-sheets" },
          ].map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}

          <div className="mt-6 flex items-center gap-2">
            <Button
              variant="outline"
              className="h-9 rounded-full border-slate-300 px-4 text-slate-800 bg-transparent"
              asChild
            >
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                aria-label="Sign in"
              >
                Sign in
              </Link>
            </Button>
            <Button
              className="h-9 rounded-full bg-[#F6C957] px-4 text-slate-900 hover:bg-[#F6C957]/90"
              asChild
            >
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                aria-label="Try InputLo Free"
              >
                Try InputLo Free
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* -----------------------
   Header (main export)
   ----------------------- */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 md:px-24 w-full py-3 md:py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <DesktopNav />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="h-10 rounded-full border-slate-300 px-5 text-slate-800 bg-transparent"
            asChild
          >
            <Link href="/signin" aria-label="Sign in">
              Sign in
            </Link>
          </Button>

          <Button
            className="h-10 rounded-full bg-[#F6C957] px-5 text-slate-900 hover:bg-[#F6C957]/90"
            asChild
          >
            <Link href="/signup" aria-label="Try InputLo Free">
              Try InputLo Free
            </Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

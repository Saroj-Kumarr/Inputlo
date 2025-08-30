"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BsLaptopFill } from "react-icons/bs";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 mr-6" aria-label="Home">
      <BsLaptopFill className="h-6 w-6" />
      <span className="text-2xl font-semibold tracking-wider text-slate-900">
        InputLo
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900 focus:outline-none">
        <span>{label}</span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-56">
        <DropdownMenuLabel className="text-slate-500">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((it) => (
          <DropdownMenuItem key={it.href} asChild>
            <Link href={it.href} className="w-full">
              {it.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
      <NavDropdown
        label="Products"
        items={[
          { label: "Form Builder", href: "/products/form-builder" },
          { label: "Payments", href: "/products/payments" },
          { label: "Automation", href: "/products/automation" },
        ]}
      />
      <NavDropdown
        label="Solutions"
        items={[
          { label: "SMBs", href: "/solutions/smb" },
          { label: "Agencies", href: "/solutions/agencies" },
          { label: "Education", href: "/solutions/education" },
        ]}
      />
      <NavDropdown
        label="Integrations"
        items={[
          { label: "Zapier", href: "/integrations/zapier" },
          { label: "Slack", href: "/integrations/slack" },
          { label: "Google Sheets", href: "/integrations/google-sheets" },
        ]}
      />
      <Link
        href="/templates"
        className="rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900"
      >
        Templates
      </Link>
      <NavDropdown
        label="Resources"
        items={[
          { label: "Blog", href: "/resources/blog" },
          { label: "Guides", href: "/resources/guides" },
          { label: "Help Center", href: "/resources/help" },
        ]}
      />
      <Link
        href="/pricing"
        className="rounded-md px-3 py-1.5 text-sm text-slate-800 hover:text-slate-900"
      >
        Pricing
      </Link>
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader className="text-left">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-1">
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

          <div className="mt-4 grid grid-cols-1 gap-1">
            <Link
              href="/templates"
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/resources"
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
          </div>

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
              className="h-9 rounded-full bg-amber-500 px-4 text-slate-900 hover:bg-amber-500/90"
              asChild
            >
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                aria-label="Try Paperform Free"
              >
                Try Paperform Free
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-4 md:px-24 w-full py-3 md:py-4">
        <div className="flex items-center gap-3">
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
            <Link href="/signup" aria-label="Try Paperform Free">
              Try Paperform Free
            </Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { BsLaptopFill } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="border-t bg-[#F6C957]/10 ">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        {/* Brand + Newsletter */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 mr-6"
              aria-label="Home"
            >
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
            <p className="text-muted-foreground">
              Powerful forms and workflows with a delightful experience. Build,
              share, and automate in minutes.
            </p>
          </div>

          <form
            onSubmit={() => {}}
            className="w-full max-w-md rounded-lg border bg-background p-3 shadow-sm md:flex md:items-center md:gap-3"
            aria-label="Newsletter subscription"
          >
            <div className="flex-1">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <Input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <Button type="submit" className="mt-3 w-full md:mt-0 md:w-auto">
              Subscribe
            </Button>
          </form>
        </div>

        <Separator className="my-8" />

        {/* Link columns */}
        <nav
          aria-label="Footer links"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5"
        >
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide">Use Cases</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  E‑commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  HR & Hiring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide">Compare</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Form Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Typeform Alternative
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Jotform Alternative
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  DocuSign Alternative
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InputLo. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-primary">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Security
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Accessibility
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              aria-label="Twitter"
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter size={20} />
            </Link>
            <Link
              aria-label="LinkedIn"
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              aria-label="Facebook"
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Facebook size={20} />
            </Link>
            <Link
              aria-label="GitHub"
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroWithVideo({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="hero-title"
      className={cn(
        "mx-auto w-full max-w-7xl px-4 md:px-6 py-12 md:py-20",
        className
      )}
    >
      <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-12">
        {/* Media panel (60–70% ref + subtle enhancement: ring + softer shadow) */}
        <div className="md:w-1/2">
          <div className="relative overflow-hidden rounded-3xl bg-slate-200 ring-1 ring-black/5 shadow-lg shadow-slate-200/60">
            <video
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-poster.png"
              aria-label="Product demo"
            >
              <source
                src="https://d3gw2uv1ch7vdq.cloudfront.net/img/what-s-paperform_.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Copy + CTA */}
        <div className="md:w-1/2">
          <p className="text-sm font-medium text-slate-600">
            Easiest AI form builder & online form creator
          </p>

          <h1
            id="hero-title"
            className="mt-3 text-balance text-4xl font-medium leading-tight text-slate-900 "
          >
            Create powerful forms, fast.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
            Paperform takes the headache out of creating and maintaining
            automated forms, eSignatures, surveys, bookings, payments and more,
            so you can get back to life.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button
              asChild
              className="rounded-full bg-[#F6C957] px-6 py-6 text-base font-medium text-slate-900 hover:bg-[#F6C957]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70"
            >
              <Link href="#get-started">Get Started – it&apos;s free</Link>
            </Button>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            Full access free trial for 7 days, no credit card needed.
          </p>
        </div>
      </div>
    </section>
  );
}

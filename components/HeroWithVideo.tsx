import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroWithVideo({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="hero-title"
      className={cn(
        "mx-auto w-full max-w-5xl px-4 md:px-6 py-16 text-center",
        className
      )}
    >
      {/* Text Section */}
      <div className="max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900"
        >
          The next generation of <span className="text-[#F6C957]">popups</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600">
          Achieve 15%+ opt-in rates with a smarter popup, designed perfectly for
          your brand — built specifically for Shopify.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="rounded-full bg-[#F6C957] px-8 py-6 text-lg font-medium text-slate-900 hover:bg-[#F6C957]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70"
          >
            <Link href="#get-started">Get Started – it&apos;s free</Link>
          </Button>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Full access free trial for 7 days, no credit card needed.
        </p>
      </div>

      {/* Video Section */}
      <div className="mt-12 relative mx-auto max-w-3xl">
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
    </section>
  );
}

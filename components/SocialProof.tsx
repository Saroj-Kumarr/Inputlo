import Link from "next/link";
import { Star } from "lucide-react";

// Small helper to render fractional star fills (0.0 - 5.0)
function StarRating({ value = 5 }: { value?: number }) {
  const items = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rating ${value} out of 5`}
    >
      {items.map((i) => {
        const fillPercent = Math.max(0, Math.min(1, value - (i - 1))) * 100; // 0 to 100
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            {/* base star */}
            <Star className="absolute inset-0 h-4 w-4 text-slate-300" />
            {/* filled star */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

type RatingItem = {
  name: string;
  score: number;
  // Use placeholder logos to keep assets light and consistent
  logoAlt?: string;
};

const RATINGS: RatingItem[] = [
  { name: "Capterra", score: 4.8, logoAlt: "Capterra logo" },
  { name: "Trustpilot", score: 4.7, logoAlt: "Trustpilot logo" },
  { name: "Product Hunt", score: 5, logoAlt: "Product Hunt logo" },
];

export function SocialProofCta() {
  return (
    <section aria-labelledby="social-proof" className="w-full">
      {/* Top meta copy */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12 lg:py-14 text-center">
        <p className="text-sm text-slate-600">
          Loved by 10K+ business owners and creators. Trusted by millions of
          respondents.
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Average rating of{" "}
          <span className="font-medium text-slate-900">
            4.8 out of 5 from 298 reviews
          </span>{" "}
          across Capterra, Trustpilot, G2 and Product Hunt
        </p>

        {/* Logos + ratings */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {RATINGS.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2">
              {/* Using clean text logos to keep it elegant and lightweight */}
              <div className="text-lg font-medium text-slate-900">
                {item.name}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-slate-900">
                  {item.score}
                </span>
                <StarRating value={item.score} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark CTA band */}
      <div className="w-full bg-[#F6C957]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24 text-center">
          <h2
            id="social-proof"
            className="text-pretty text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl"
          >
            Over 731,916 forms built… and counting.
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-balance text-base leading-relaxed text-slate-800 sm:text-lg">
            Our community loves Paperform and we’re sure you will too. So we’re
            giving you 7 days unlimited access free.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-slate-900 shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              Start creating for free now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProofCta;

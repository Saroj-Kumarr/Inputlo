"use client";

import React from "react";

type TestimonialIn = {
  quote?: string;
  name?: string;
  role?: string;
  avatar?: string | undefined | null;
};

type Props = {
  testimonials?: TestimonialIn[]; // guard if not provided
  className?: string;
  durationTop?: number; // seconds
  durationBottom?: number; // seconds
};

export default function TestimonialsCarousel({
  testimonials = [],
  className = "",
  durationTop = 28,
  durationBottom = 36,
}: Props) {
  // split into two roughly equal rows
  const half = Math.ceil((testimonials?.length || 0) / 2);
  const top = testimonials?.slice(0, half) ?? [];
  const bottom = testimonials?.slice(half) ?? [];

  // Ensure we always have arrays (never undefined)
  const safeTop: TestimonialIn[] =
    top.length > 0
      ? top
      : bottom.length > 0
      ? bottom.slice(0, Math.ceil(bottom.length / 2))
      : [];

  const safeBottom: TestimonialIn[] =
    bottom.length > 0
      ? bottom
      : top.length > 0
      ? top.slice(Math.ceil(top.length / 2))
      : [];

  return (
    <div className={`w-full ${className}`}>
      <style>{`
        .marquee {
          overflow: hidden;
          position: relative;
          --gap: 1.25rem;
        }
        .marquee-track {
          display: flex;
          align-items: stretch;
          gap: var(--gap);
          will-change: transform;
        }
        @keyframes marquee-left {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%,0,0); }
          100% { transform: translate3d(0,0,0); }
        }
        .animate-left { animation: marquee-left linear infinite; }
        .animate-right { animation: marquee-right linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .animate-left, .animate-right { animation: none !important; }
        }

        /* Card sizing + look */
        .testimonial-card {
          min-width: 260px;
          max-width: 360px;
          padding: 1.125rem;
          border-radius: 0.75rem;
          background: white;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          box-shadow: 0 8px 22px rgba(12,15,25,0.06);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .testimonial-card:hover { transform: translateY(-6px); box-shadow: 0 14px 36px rgba(12,15,25,0.09); }

        .testimonial-quote { font-size: 0.95rem; line-height: 1.45; color: #0f172a; }
        .testimonial-meta { display:flex; align-items:center; gap:0.75rem; margin-top: 0.25rem; }
        .avatar {
          width:44px; height:44px; border-radius:9999px; object-fit:cover; flex-shrink:0;
          background: #f1f5f9; display:flex; align-items:center; justify-content:center; color:#475569; font-weight:600;
        }
        .meta-text { font-size:0.93rem; color:#0f172a; }
        .meta-sub { font-size:0.8rem; color:#475569; }
      `}</style>

      {/* Top row moves left */}
      <div className="marquee">
        <div
          className="marquee-track animate-left"
          style={{ animationDuration: `${durationTop}s` }}
          role="list"
          aria-label="Customer testimonials scrolling left"
        >
          {[...safeTop, ...safeTop].map((t, i) => {
            const keyName = t?.name ? `${t.name}-${i}` : `top-${i}`;
            return (
              <article
                className="testimonial-card h-48 my-3"
                key={keyName}
                role="listitem"
                aria-label={`${t?.name ?? "Customer"}, ${
                  t?.role ?? "testimonial"
                }`}
              >
                <p className="testimonial-quote">“{t?.quote ?? ""}”</p>

                <div className="testimonial-meta">
                  {t?.avatar ? (
                    <img
                      className="avatar"
                      src={t.avatar}
                      alt={`${t?.name ?? "avatar"}`}
                    />
                  ) : (
                    <div className="avatar" aria-hidden>
                      {(t?.name ?? "")
                        .split(" ")
                        .map((n) => (n ? n[0] : ""))
                        .slice(0, 2)
                        .join("") || "—"}
                    </div>
                  )}

                  <div>
                    <div className="meta-text">{t?.name ?? "Anonymous"}</div>
                    {t?.role ? <div className="meta-sub">{t.role}</div> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom row moves right */}
      <div className="marquee">
        <div
          className="marquee-track animate-right"
          style={{ animationDuration: `${durationBottom}s` }}
          role="list"
          aria-label="Customer testimonials scrolling right"
        >
          {[...safeBottom, ...safeBottom].map((t, i) => {
            const keyName = t?.name ? `${t.name}-${i}` : `bottom-${i}`;
            return (
              <article
                className="testimonial-card h-48 my-3"
                key={keyName}
                role="listitem"
                aria-label={`${t?.name ?? "Customer"}, ${
                  t?.role ?? "testimonial"
                }`}
              >
                <p className="testimonial-quote">“{t?.quote ?? ""}”</p>

                <div className="testimonial-meta">
                  {t?.avatar ? (
                    <img
                      className="avatar"
                      src={t.avatar}
                      alt={`${t?.name ?? "avatar"}`}
                    />
                  ) : (
                    <div className="avatar" aria-hidden>
                      {(t?.name ?? "")
                        .split(" ")
                        .map((n) => (n ? n[0] : ""))
                        .slice(0, 2)
                        .join("") || "—"}
                    </div>
                  )}

                  <div>
                    <div className="meta-text">{t?.name ?? "Anonymous"}</div>
                    {t?.role ? <div className="meta-sub">{t.role}</div> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

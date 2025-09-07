"use client";

import React from "react";

const logos = [
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fgoogle.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Famazon.png&w=256&q=75",
  "https://search4expert.com/images/logos/meta.svg",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fnetflix.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fmicrosoft.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fapple.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fflipkart.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2FSpotify.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fuber.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fairbnb.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fadobe.webp&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fairtel.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fcleartrip.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fcurefit.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fdeloitte.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fdream11.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fgoldmansaches.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fhitachi.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fibm.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fjpmogan.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fmercedes.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fola.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fpayu.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fpaytm.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fsalesforce.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fsamsung.png&w=256&q=75",
  "https://search4expert.com/images/logos/swiggy.svg",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Ftwitter.png&w=256&q=75",
  "https://search4expert.com/_next/image?url=%2Fimages%2Flogos%2Fzomato.png&w=256&q=75",
];

export default function LogosMarquee() {
  const half = Math.ceil(logos.length / 2);
  const topLogos = logos.slice(0, half);
  const bottomLogos = logos.slice(half);

  const durationTop = 28;
  const durationBottom = 36;

  const altFromUrl = (url: string, idx: number) => {
    try {
      const u = new URL(url);
      const p = u.pathname.split("/").pop() || "";
      return p.split(".")[0].replace(/[_-]/g, " ") || `logo ${idx + 1}`;
    } catch {
      return `logo ${idx + 1}`;
    }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <style>{`
          .marquee {
            overflow: hidden;
            position: relative;
            --gap: 2.5rem;
          }
          .marquee-track {
            display: flex;
            align-items: center;
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
          .logo-item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            min-width: 120px;
            max-width: 180px;
            opacity: 0.95;
            transition: transform 200ms ease, opacity 200ms ease;
          }
          .logo-item img {
            max-width: 100%;
            max-height: 52px;
            object-fit: contain;
            display: block;
          }
          .logo-item:hover { transform: scale(1.06); opacity: 1; }
        `}</style>

        {/* Top row (left) */}
        <div className="marquee mb-6">
          <div
            className="marquee-track animate-left"
            style={{ animationDuration: `${durationTop}s` }}
          >
            {[...topLogos, ...topLogos].map((src, i) => (
              <div className="logo-item" key={`top-${i}`}>
                <img src={src} alt={altFromUrl(src, i)} draggable={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row (right) */}
        <div className="marquee">
          <div
            className="marquee-track animate-right"
            style={{ animationDuration: `${durationBottom}s` }}
          >
            {[...bottomLogos, ...bottomLogos].map((src, i) => (
              <div className="logo-item" key={`bottom-${i}`}>
                <img src={src} alt={altFromUrl(src, i)} draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

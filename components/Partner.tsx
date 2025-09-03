"use client";

import React from "react";

const LogoMarquee = () => {
  const companies = [
    { name: "Slack", logo: "💬" },
    { name: "Stripe", logo: "💳" },
    { name: "Webflow", logo: "🌊" },
    { name: "Zapier", logo: "⚡" },
    { name: "Klaviyo", logo: "📧" },
    { name: "Notion", logo: "📝" },
    { name: "Figma", logo: "🎨" },
    { name: "GitHub", logo: "🐙" },
    { name: "Spotify", logo: "🎵" },
    { name: "Discord", logo: "🎮" },
    { name: "Twilio", logo: "📱" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Dropbox", logo: "📦" },
    { name: "Airbnb", logo: "🏠" },
    { name: "Netflix", logo: "🎬" },
    { name: "Uber", logo: "🚗" },
  ];

  // Split companies into two rows
  const row1 = companies.slice(0, 8);
  const row2 = companies.slice(8, 16);

  return (
    <div className="">
      <div className="py-8">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First Row - Moving Right */}
          <div className="flex animate-marquee-right mb-4">
            {[...row1, ...row1, ...row1].map((company, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center justify-center min-w-[300px] h-20 mx-6 cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </span>
                  <span className="text-black text-3xl font-bold group-hover:opacity-70 transition-opacity duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex animate-marquee-left">
            {[...row2, ...row2, ...row2].map((company, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center justify-center min-w-[300px] h-20 mx-6 cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </span>
                  <span className="text-black text-3xl font-bold group-hover:opacity-70 transition-opacity duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;

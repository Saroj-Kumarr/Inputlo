"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
const images: string[] = Array.from({ length: 11 }, (_, i) => `/${i + 1}.svg`);

export default function TrustedBy() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrame: number;
    let offset = 0;

    const scroll = () => {
      // Increasing the offset moves the content to the right (Left-to-Right scroll)
      offset += 1; // You can change this value to control speed (e.g., offset += 0.5 for slower)

      // When the first set of logos has scrolled completely out of view, reset the offset.
      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }

      track.style.transform = `translateX(${offset}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrame = requestAnimationFrame(scroll);

    // Clean up the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-white px-4 py-8 md:py-16 flex flex-col justify-center items-center">
      <div className="overflow-hidden w-full flex justify-center">
        <div
          ref={trackRef}
          className="flex gap-12"
          style={{
            minWidth: "200%",
            willChange: "transform",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 flex items-center">
              <Image
                src={src}
                alt={`Logo ${(i % 11) + 1}`}
                width={120}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

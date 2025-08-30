"use client";

import { cn } from "@/lib/utils";
import { Rocket, Cog, Shield, Zap, Wand2, PenLine } from "lucide-react";
import { useMemo } from "react";

type LeftVisualProps = {
  className?: string;
};

export default function LeftVisual({ className }: LeftVisualProps) {
  const icons = useMemo(
    () => [
      {
        Comp: Rocket,
        color: "text-cyan-400",
        radius: 120,
        dur: 16,
        dir: "normal" as const,
        label: "Launch",
      },
      {
        Comp: Cog,
        color: "text-amber-400",
        radius: 92,
        dur: 12,
        dir: "reverse" as const,
        label: "Automate",
      },
      {
        Comp: Zap,
        color: "text-cyan-400",
        radius: 150,
        dur: 22,
        dir: "normal" as const,
        label: "Fast",
      },
      {
        Comp: Shield,
        color: "text-white/90",
        radius: 66,
        dur: 10,
        dir: "reverse" as const,
        label: "Secure",
      },
      {
        Comp: Wand2,
        color: "text-cyan-400",
        radius: 178,
        dur: 28,
        dir: "normal" as const,
        label: "Magic",
      },
      {
        Comp: PenLine,
        color: "text-white/90",
        radius: 135,
        dur: 18,
        dir: "reverse" as const,
        label: "Create",
      },
    ],
    []
  );

  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-md select-none",
        "mx-auto",
        className
      )}
      aria-hidden="true"
    >
      {/* Concentric rings */}
      <div className="absolute inset-0 rounded-full border border-white/20" />
      <div className="absolute inset-6 rounded-full border border-white/15" />
      <div className="absolute inset-12 rounded-full border border-white/10" />

      {/* Core glyph: white rounded square + inner dark circle */}
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[28%] bg-white" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900" />

      {/* Directional diamonds */}
      <Diamond className="absolute left-1/2 top-6 -translate-x-1/2 text-white" />
      <Diamond className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-white" />
      <Diamond className="absolute bottom-6 left-1/2 -translate-x-1/2 rotate-180 text-white" />
      <Diamond className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-white" />

      {/* Orbiting icons */}
      {icons.map(({ Comp, color, radius, dur, dir, label }, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 motion-reduce:animate-none"
          style={{
            animation: "lv-spin linear infinite",
            animationDuration: `${dur}s`,
            animationDirection: dir,
            transformOrigin: "center",
          }}
        >
          <Comp
            aria-label={label}
            className={cn("size-6 md:size-7 drop-shadow", color)}
            style={{
              // place icon at top; parent rotation creates the orbit
              transform: `translate(-50%, calc(-50% - ${radius}px))`,
            }}
          />
        </div>
      ))}

      {/* Soft ring and pulsing core */}
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
      <div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/90 motion-reduce:animate-none"
        style={{ animation: "lv-pulse 3s ease-in-out infinite" }}
      />

      {/* Scoped keyframes */}
      <style jsx>{`
        @keyframes lv-spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes lv-pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

function Diamond({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-10 w-10 rotate-45 rounded-[6px] bg-white shadow-sm motion-reduce:animate-none",
        className
      )}
      style={{ animation: "lv-diamond 4s ease-in-out infinite" }}
    >
      <style jsx>{`
        @keyframes lv-diamond {
          0%,
          100% {
            transform: rotate(45deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotate(45deg) scale(1.08);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}

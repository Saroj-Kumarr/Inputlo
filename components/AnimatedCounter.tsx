"use client";

import React, { useEffect, useRef, useState } from "react";

type EasingFn = (t: number) => number;

type AnimatedCounterProps = {
  /** Target number to count to */
  end: number;
  /** Starting number (default 0) */
  start?: number;
  /** Duration in milliseconds (default 1500) */
  duration?: number;
  /** Number of decimal places to show (default 0) */
  decimals?: number;
  /** Thousands separator char (default ',') or '' to disable */
  separator?: string;
  /** Optional prefix (e.g. "$") */
  prefix?: string;
  /** Optional suffix (e.g. "+", " users") */
  suffix?: string;
  /** If true, animation restarts whenever `end` changes (default true) */
  rerunOnChange?: boolean;
  /** Custom easing function (defaults to easeOutCubic) */
  easing?: EasingFn;
  /** className applied to the wrapper element */
  className?: string;
  /** whether to use aria-live polite for screen readers (default true) */
  ariaLive?: boolean;
};

/** Default easing: easeOutCubic */
const easeOutCubic: EasingFn = (t) => 1 - Math.pow(1 - t, 3);

/** Format number with decimals and optional thousands separator */
function formatNumber(value: number, decimals: number, separator: string) {
  const fixed = value.toFixed(decimals);
  if (!separator) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decPart ? `${withSep}.${decPart}` : withSep;
}

/**
 * AnimatedCounter
 *
 * Simple, dependency-free counter animation. Use by passing `end` and other optional props.
 *
 * Example:
 * <AnimatedCounter end={12345} duration={2000} prefix="$" suffix="+" decimals={0} />
 */
export default function AnimatedCounter({
  end,
  start = 0,
  duration = 1500,
  decimals = 0,
  separator = ",",
  prefix = "",
  suffix = "",
  rerunOnChange = true,
  easing = easeOutCubic,
  className = "",
  ariaLive = true,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState<string>(
    () => prefix + formatNumber(start, decimals, separator) + suffix
  );
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const fromRef = useRef<number>(start);
  const toRef = useRef<number>(end);
  const prevEndRef = useRef<number | null>(null);

  useEffect(() => {
    // If we shouldn't rerun and end hasn't changed, do nothing
    if (!rerunOnChange && prevEndRef.current === end) {
      return;
    }
    prevEndRef.current = end;

    // Setup animation
    const from = fromRef.current ?? start;
    const to = end;
    fromRef.current = from;
    toRef.current = to;
    startTimeRef.current = null;

    // Cancel any previous frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // If duration is 0 or start === end, jump to final value
    if (duration <= 0 || from === to) {
      setDisplay(prefix + formatNumber(to, decimals, separator) + suffix);
      return;
    }

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = easing(t);
      const current = from + (to - from) * eased;
      setDisplay(prefix + formatNumber(current, decimals, separator) + suffix);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // Ensure final exact value
        setDisplay(prefix + formatNumber(to, decimals, separator) + suffix);
        rafRef.current = null;
        startTimeRef.current = null;
        fromRef.current = to; // next animation will continue from here
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      startTimeRef.current = null;
    };
    // Intentionally include only `end` and rerunOnChange so callers can change other props without restarting.
    // If you want to restart on other prop changes, add them to this dependency array.
  }, [
    end,
    rerunOnChange,
    duration,
    decimals,
    prefix,
    suffix,
    separator,
    easing,
    start,
  ]);

  return (
    <div
      className={className}
      aria-live={ariaLive ? "polite" : undefined}
      aria-atomic="true"
    >
      {display}
    </div>
  );
}

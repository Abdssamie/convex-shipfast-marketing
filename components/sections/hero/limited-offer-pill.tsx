"use client";

import { useEffect, useMemo, useState } from "react";

const CYCLE_MS = 5 * 24 * 60 * 60 * 1000;
const CYCLE_ANCHOR_UTC_MS = Date.UTC(2026, 0, 1, 0, 0, 0);

function getCycleRemainingMs(nowMs: number): number {
  const elapsed = (nowMs - CYCLE_ANCHOR_UTC_MS) % CYCLE_MS;
  const normalizedElapsed = elapsed >= 0 ? elapsed : elapsed + CYCLE_MS;
  return CYCLE_MS - normalizedElapsed;
}

function getTimeParts(remainingMs: number) {
  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

interface LimitedOfferPillProps {
  currentPrice: number;
  originalPrice: number;
}

export function LimitedOfferPill({
  currentPrice,
  originalPrice,
}: LimitedOfferPillProps) {
  const [remainingMs, setRemainingMs] = useState(() =>
    getCycleRemainingMs(Date.now()),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingMs(getCycleRemainingMs(Date.now()));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const discountPercentage = useMemo(() => {
    if (originalPrice <= 0 || currentPrice >= originalPrice) {
      return 0;
    }

    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  }, [currentPrice, originalPrice]);
  const time = useMemo(() => getTimeParts(remainingMs), [remainingMs]);

  return (
    <div className="animate-appear bg-background/80 border-border/60 text-muted-foreground inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-sm font-medium shadow-sm backdrop-blur sm:px-6 sm:py-2.5 sm:text-base">
      <span className="size-2 rounded-full bg-emerald-500" />
      <span className="line-through">${originalPrice}</span>
      <span className="text-foreground font-semibold">${currentPrice}</span>
      <span>one-time</span>
      <span className="opacity-60">•</span>
      <span>{discountPercentage}% off</span>
      <span className="opacity-60">•</span>
      <span className="inline-flex items-center gap-2">
        <TimeUnit value={pad2(time.days)} label="d" />
        <TimeUnit value={pad2(time.hours)} label="h" />
        <TimeUnit value={pad2(time.minutes)} label="m" />
        <TimeUnit value={pad2(time.seconds)} label="s" />
        <span>left</span>
      </span>
    </div>
  );
}

function TimerNumber({ value }: { value: string }) {
  return (
    <span className="text-foreground inline-block min-w-[1.3em] text-center font-semibold tabular-nums">
      {value}
    </span>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-0">
      <TimerNumber value={value} />
      <span className="text-muted-foreground text-[0.9em]">{label}</span>
    </span>
  );
}

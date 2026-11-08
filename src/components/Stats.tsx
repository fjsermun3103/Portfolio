"use client";

import { useEffect, useRef } from "react";
import { stats, type Stat } from "@/data/portfolio";

const DURATION = 1200;

function StatValue({ value, suffix = "" }: Pick<Stat, "value" | "suffix">) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof value !== "number") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // El HTML del servidor ya trae el valor final; solo animamos con JS activo.
    el.textContent = `0${suffix}`;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(eased * value)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = `${value}${suffix}`;
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className="stat__value">
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <ul className="stats" aria-label="Datos destacados">
      {stats.map((s) => (
        <li key={s.label} className={`stat stat--${s.color}`}>
          <span className="stat__kicker">{s.kicker}</span>
          <StatValue value={s.value} suffix={s.suffix} />
          <span className="stat__label">{s.label}</span>
          <span className="stat__detail">{s.detail}</span>
        </li>
      ))}
    </ul>
  );
}

"use client";
import { useMemo } from "react";

export default function Particles({ count = 26 }) {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 6 + 3;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 6;
      const duration = 6 + Math.random() * 6;
      const color = ["var(--magenta)", "var(--cyan)", "var(--orange)"][i % 3];
      return { id: i, size, top, left, delay, duration, color };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full blur-sm opacity-70 will-change-transform"
          style={{
            width: d.size,
            height: d.size,
            top: `${d.top}%`,
            left: `${d.left}%`,
            background: d.color,
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.35))",
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}



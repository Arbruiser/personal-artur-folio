import { useEffect, useRef, useState } from "react";

export function CursorAccent() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;
    setEnabled(true);

    let tx = -100, ty = -100, x = -100, y = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(interactive);
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      const el = dotRef.current;
      if (el) el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
      style={{
        width: hovering ? 32 : 8,
        height: hovering ? 32 : 8,
        background: hovering ? "transparent" : "var(--destructive)",
        border: hovering ? "1.5px solid var(--destructive)" : "none",
        opacity: hovering ? 0.55 : 0.85,
        transition: "width 0.18s ease, height 0.18s ease, background 0.18s ease, opacity 0.18s ease",
        mixBlendMode: "screen",
      }}
    />
  );
}
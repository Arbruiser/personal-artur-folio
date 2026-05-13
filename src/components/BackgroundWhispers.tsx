import { useEffect, useState } from "react";

const PHRASES = [
  "vLLM is king",
  "God bless Qwen",
  "Why do I cost as much as 1 GPU",
  "You can outsource thinking, but you can't outsource understanding",
  "Protect Karpathy",
  "CSC",
  "Mmm... Terminal",
];

type Whisper = {
  id: number;
  text: string;
  top: number;
  left: number;
  size: number;
  rotate: number;
  duration: number;
  maxWidth: number;
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function BackgroundWhispers() {
  const [whispers, setWhispers] = useState<Whisper[]>([]);

  useEffect(() => {
    let nextId = 1;
    const timeouts = new Set<number>();
    const root = document.documentElement;
    const previousBodyPosition = document.body.style.position;
    const previousBodyZIndex = document.body.style.zIndex;
    const previousRootPosition = root.style.position;
    const previousRootZIndex = root.style.zIndex;

    document.body.style.position = "relative";
    document.body.style.zIndex = "0";
    root.style.position = "relative";
    root.style.zIndex = "0";

    const spawn = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const text = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      // size: 8px to ~26px (current was ~16, so 2x smaller -> 8, a bit bigger -> 26)
      const size = rand(8, 26);
      const pageWidth = Math.min(768, viewportWidth - 48);
      const contentLeft = (viewportWidth - pageWidth) / 2;
      const contentRight = contentLeft + pageWidth;
      const margin = 24;
      const textGuard = 28;
      const gutters = [
        { start: margin, end: contentLeft - textGuard },
        { start: contentRight + textGuard, end: viewportWidth - margin },
      ].filter((g) => g.end - g.start >= 128);

      if (gutters.length === 0) return;

      const gutter = gutters[Math.floor(Math.random() * gutters.length)];
      // approximate width budget so it fits inside the side gutters and avoids the main text column
      const approxWidth = Math.min(text.length * size * 0.62, gutter.end - gutter.start);
      const maxWidth = Math.max(96, Math.min(approxWidth + 8, gutter.end - gutter.start));
      const top = rand(32, Math.max(32, viewportHeight - 96));
      const left = rand(gutter.start, Math.max(gutter.start, gutter.end - maxWidth));
      const rotate = rand(-60, 60);
      // Old visible window ~7200ms; 5x less -> ~1440ms
      const duration = rand(2800, 3800);
      const id = nextId++;
      const w: Whisper = { id, text, top, left, size, rotate, duration, maxWidth };

      setWhispers((prev) => [...prev, w]);

      const removeId = window.setTimeout(() => {
        setWhispers((prev) => prev.filter((x) => x.id !== id));
        timeouts.delete(removeId);
      }, duration + 100);
      timeouts.add(removeId);

      // Old spawn ~every 2s; 10x less often -> ~every 20s
      const nextDelay = rand(4000, 9000);
      const nextId2 = window.setTimeout(spawn, nextDelay);
      timeouts.add(nextId2);
    };

    const initial = window.setTimeout(spawn, 600);
    timeouts.add(initial);

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
      timeouts.clear();
      document.body.style.position = previousBodyPosition;
      document.body.style.zIndex = previousBodyZIndex;
      root.style.position = previousRootPosition;
      root.style.zIndex = previousRootZIndex;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ position: "fixed", zIndex: -1 }}
    >
      {whispers.map((w) => (
        <span
          key={w.id}
          className="fixed hidden select-none whitespace-normal text-balance font-mono leading-tight xl:block"
          style={{
            position: "fixed",
            top: `${w.top}px`,
            left: `${w.left}px`,
            maxWidth: `${w.maxWidth}px`,
            fontSize: w.size,
            color: "var(--destructive)",
            textShadow: "0 0 20px color-mix(in srgb, var(--destructive) 85%, transparent)",
            transform: `rotate(${w.rotate}deg)`,
            transformOrigin: "center",
            animation: `whisper-fade ${w.duration}ms ease-in-out forwards`,
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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

    const spawn = () => {
      const text = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      // size: 8px to ~26px (current was ~16, so 2x smaller -> 8, a bit bigger -> 26)
      const size = rand(8, 26);
      // approximate width budget so it fits on screen
      const approxWidth = Math.min(text.length * size * 0.62, window.innerWidth * 0.6);
      const maxWidth = Math.min(approxWidth + 8, window.innerWidth - 32);
      const top = rand(6, 88);
      const left = rand(2, Math.max(2, ((window.innerWidth - maxWidth - 16) / window.innerWidth) * 100));
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
    };
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {whispers.map((w) => (
        <span
          key={w.id}
          className="absolute hidden select-none whitespace-normal text-balance font-mono leading-tight md:block"
          style={{
            top: `${w.top}vh`,
            left: `${w.left}vw`,
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
    </div>,
    document.body,
  );
}

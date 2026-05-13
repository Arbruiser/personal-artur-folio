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
  duration: number;
};

export function BackgroundWhispers() {
  const [whispers, setWhispers] = useState<Whisper[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let counter = 0;
    const timeouts = new Set<number>();

    const spawn = () => {
      const text = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      const size = 16 + Math.random() * 16;
      const approxWidth = Math.min(text.length * size * 0.62, window.innerWidth - 40);
      const left = Math.random() * Math.max(1, window.innerWidth - approxWidth - 20) + 10;
      const top = Math.random() * Math.max(1, window.innerHeight - 60) + 20;
      const duration = 4500 + Math.random() * 2500;
      const id = ++counter;
      setWhispers((w) => [...w, { id, text, top, left, size, duration }]);
      const removeId = window.setTimeout(() => {
        setWhispers((w) => w.filter((x) => x.id !== id));
        timeouts.delete(removeId);
      }, duration);
      timeouts.add(removeId);

      const nextId = window.setTimeout(() => {
        timeouts.delete(nextId);
        spawn();
      }, 1200 + Math.random() * 1600);
      timeouts.add(nextId);
    };

    const startId = window.setTimeout(spawn, 400);
    timeouts.add(startId);
    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
      timeouts.clear();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {whispers.map((w) => (
        <span
          key={w.id}
          className="absolute font-mono whitespace-nowrap select-none"
          style={{
            top: w.top,
            left: w.left,
            fontSize: w.size,
            color: "var(--destructive)",
            animation: `whisper-fade ${w.duration}ms ease-in-out forwards`,
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}

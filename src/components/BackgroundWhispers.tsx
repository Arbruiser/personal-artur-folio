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
    let timeoutId: number;

    const spawn = () => {
      const text = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      const size = 14 + Math.random() * 18;
      // approximate width to keep within viewport
      const approxWidth = Math.min(text.length * size * 0.6, window.innerWidth - 40);
      const left = Math.random() * (window.innerWidth - approxWidth - 20) + 10;
      const top = Math.random() * (window.innerHeight - 60) + 20;
      const duration = 5000 + Math.random() * 3000;
      const id = ++counter;
      setWhispers((w) => [...w, { id, text, top, left, size, duration }]);
      window.setTimeout(() => {
        setWhispers((w) => w.filter((x) => x.id !== id));
      }, duration);

      timeoutId = window.setTimeout(spawn, 1800 + Math.random() * 2200);
    };

    timeoutId = window.setTimeout(spawn, 1500);
    return () => window.clearTimeout(timeoutId);
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

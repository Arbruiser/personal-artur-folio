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
  delay: number;
};

const SIDE_SLOTS = [
  { top: 14, left: 4 },
  { top: 32, left: 79 },
  { top: 56, left: 5 },
  { top: 73, left: 75 },
  { top: 88, left: 11 },
];

const MOBILE_SLOTS = [
  { top: 9, left: 5 },
  { top: 28, left: 54 },
  { top: 67, left: 6 },
];

export function BackgroundWhispers() {
  const [whispers, setWhispers] = useState<Whisper[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const buildWhispers = () => {
      const slots = window.innerWidth < 760 ? MOBILE_SLOTS : SIDE_SLOTS;
      setWhispers(
        slots.map((slot, index) => ({
          id: index,
          text: PHRASES[index % PHRASES.length],
          top: slot.top,
          left: slot.left,
          size: window.innerWidth < 760 ? 13 : 16 + (index % 2) * 3,
          delay: index * -1600,
        })),
      );
    };

    buildWhispers();
    window.addEventListener("resize", buildWhispers);
    return () => window.removeEventListener("resize", buildWhispers);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {whispers.map((w) => (
        <span
          key={w.id}
          className="absolute max-w-[18rem] select-none whitespace-normal text-balance font-mono leading-tight md:whitespace-nowrap"
          style={{
            top: `${w.top}vh`,
            left: `${w.left}vw`,
            fontSize: w.size,
            color: "var(--destructive)",
            textShadow: "0 0 18px color-mix(in srgb, var(--destructive) 70%, transparent)",
            animation: `whisper-fade 7200ms ease-in-out ${w.delay}ms infinite`,
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}

const PHRASES = [
  "vLLM is king",
  "God bless Qwen",
  "Why do I cost as much as 1 GPU",
  "You can outsource thinking, but you can't outsource understanding",
  "Protect Karpathy",
  "CSC",
  "Mmm... Terminal",
];

const WHISPERS = PHRASES.map((text, index) => ({
  text,
  top: [12, 24, 41, 58, 72, 84, 34][index],
  side: index % 2 === 0 ? "left" : "right",
  offset: [24, 28, 40, 32, 58, 48, 72][index],
  size: [18, 16, 15, 14, 18, 20, 16][index],
  delay: index * -1100,
}));

export function BackgroundWhispers() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {WHISPERS.map((w) => (
        <span
          key={w.text}
          className="absolute hidden max-w-[15rem] select-none whitespace-normal text-balance font-mono leading-tight md:block"
          style={{
            top: `${w.top}vh`,
            [w.side]: w.offset,
            fontSize: w.size,
            color: "var(--destructive)",
            textShadow: "0 0 20px color-mix(in srgb, var(--destructive) 85%, transparent)",
            animation: `whisper-fade 7200ms ease-in-out ${w.delay}ms infinite`,
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}

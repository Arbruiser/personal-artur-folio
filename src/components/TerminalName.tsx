import { useEffect, useState } from "react";

const NAME = "Artúr Vojt-Antal";

export function TerminalName() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [showWhoami, setShowWhoami] = useState(reduced);
  const [typed, setTyped] = useState(reduced ? NAME : "");
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const t1 = window.setTimeout(() => setShowWhoami(true), 350);
    const t2 = window.setTimeout(() => {
      let i = 0;
      const interval = window.setInterval(() => {
        i += 1;
        setTyped(NAME.slice(0, i));
        if (i >= NAME.length) {
          window.clearInterval(interval);
          window.setTimeout(() => setDone(true), 2000);
        }
      }, 55);
    }, 900);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduced]);

  return (
    <div>
      <p className="mb-3 rounded-md border border-border bg-card/60 px-3 py-2 font-mono text-xs text-foreground/90 shadow-sm">
        <span className="text-accent">~/portfolio</span>{" "}
        <span className="text-destructive">$</span> whoami
      </p>
      <h1 className="min-h-[2.4em] text-4xl font-semibold leading-[1.05] md:min-h-[2.2em] md:text-6xl">
        {showWhoami ? (
          <>
            {typed}
            {!done && <span className="caret" aria-hidden="true" />}
          </>
        ) : (
          <span className="opacity-0">{NAME}</span>
        )}
      </h1>
      <p className="mt-4 font-mono text-xs text-muted-foreground">
        <span className="text-destructive">$</span>{" "}
        AI Specialist · LUMI Supercomputer
      </p>
    </div>
  );
}
import { useState, type ReactNode } from "react";

type Stage = "idle" | "query" | "retrieve" | "chunks" | "generate" | "answer" | "done";

const PRESETS: { q: string; chunks: string[]; a: string }[] = [
  {
    q: "What is a syllable nucleus?",
    chunks: [
      "…the nucleus is the obligatory core of the syllable, typically a vowel or a syllabic consonant…",
      "…sonority peaks within a syllable identify the nuclear position in most analyses…",
    ],
    a: "The nucleus is the obligatory core of a syllable — usually a vowel (or a syllabic consonant) that carries the syllable's sonority peak.",
  },
  {
    q: "Define a natural class in phonology.",
    chunks: [
      "…a natural class is a set of segments sharing a feature specification that patterns together in phonological rules…",
      "…e.g. [+nasal] groups /m, n, ŋ/ which behave alike under assimilation…",
    ],
    a: "A natural class is a set of segments that share one or more distinctive features and consistently pattern together in phonological processes.",
  },
  {
    q: "What is final devoicing?",
    chunks: [
      "…final devoicing neutralises the voicing contrast in obstruents at the end of a syllable or word…",
      "…attested in German, Russian, Polish, Dutch and many other languages…",
    ],
    a: "Final devoicing is a process where voiced obstruents lose their voicing in syllable- or word-final position, neutralising the voicing contrast.",
  },
];

export function RagDemo() {
  const [active, setActive] = useState(0);
  const [stage, setStage] = useState<Stage>("idle");
  const [typed, setTyped] = useState("");

  const run = (idx: number) => {
    setActive(idx);
    setStage("query");
    setTyped("");
    const ans = PRESETS[idx].a;
    setTimeout(() => setStage("retrieve"), 500);
    setTimeout(() => setStage("chunks"), 1100);
    setTimeout(() => setStage("generate"), 1900);
    setTimeout(() => {
      setStage("answer");
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        setTyped(ans.slice(0, i));
        if (i >= ans.length) {
          window.clearInterval(id);
          setStage("done");
        }
      }, 18);
    }, 2400);
  };

  const reached = (s: Stage) => {
    const order: Stage[] = ["idle", "query", "retrieve", "chunks", "generate", "answer", "done"];
    return order.indexOf(stage) >= order.indexOf(s);
  };

  const stages: { key: Stage; label: ReactNode }[] = [
    { key: "query", label: "query" },
    { key: "retrieve", label: "retriever" },
    { key: "chunks", label: "top-k chunks" },
    { key: "generate", label: <span className="normal-case">GPT-4o</span> },
    { key: "answer", label: "answer" },
  ];

  return (
    <div className="rounded-lg border border-border bg-card/40 p-5 md:p-6">
      {/* Pipeline */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-wider md:text-xs">
        {stages.map((s, i) => (
          <span key={s.key} className="flex items-center gap-2">
            <span
              className={`rounded border px-2 py-1 transition-all duration-300 ${
                reached(s.key)
                  ? "border-destructive bg-destructive/10 text-foreground shadow-[0_0_12px_rgba(236,0,140,0.25)]"
                  : "border-border text-muted-foreground"
              }`}
            >
              [ {s.label} ]
            </span>
            {i < stages.length - 1 && (
              <span
                className={`transition-colors duration-300 ${
                  reached(stages[i + 1].key) ? "text-destructive" : "text-muted-foreground/50"
                }`}
              >
                ──►
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Prompts */}
      <div className="mt-5 flex flex-wrap gap-2">
        {PRESETS.map((p, i) => (
          <button
            key={p.q}
            onClick={() => run(i)}
            className={`rounded border px-3 py-1.5 text-left font-mono text-xs transition-colors ${
              active === i && stage !== "idle"
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            $ ask "{p.q}"
          </button>
        ))}
      </div>

      {/* Output panels */}
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-border bg-background/40 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            retrieved chunks
          </p>
          <div className="mt-2 space-y-2">
            {reached("chunks") ? (
              PRESETS[active].chunks.map((c, i) => (
                <p
                  key={i}
                  className="rounded border border-accent/30 bg-accent/5 p-2 font-mono text-[11px] leading-relaxed text-foreground/85"
                  style={{ animation: "fadeUp 0.4s ease-out both", animationDelay: `${i * 80}ms` }}
                >
                  {c}
                </p>
              ))
            ) : (
              <p className="font-mono text-xs text-muted-foreground/60">— waiting —</p>
            )}
          </div>
        </div>
        <div className="rounded border border-border bg-background/40 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            answer
          </p>
          <p className="mt-2 min-h-[4rem] font-mono text-[11px] leading-relaxed text-foreground">
            {reached("answer") ? typed : <span className="text-muted-foreground/60">— waiting —</span>}
            {stage === "answer" && <span className="caret" aria-hidden="true" />}
          </p>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-border pt-4 text-xs">
        <p className="font-mono text-muted-foreground">
          <span className="text-destructive">+16–56%</span> over non-RAG baseline
        </p>
        <a
          href="https://helda.helsinki.fi/items/d71a36a2-50fe-46e8-8b35-110b416cd33f"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          read thesis →
        </a>
      </div>

      <style>{`@keyframes fadeUp { from { opacity:0; transform: translateY(6px);} to {opacity:1; transform:none;} }`}</style>
    </div>
  );
}
import portrait from "@/assets/portrait.png";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";
import { TerminalName } from "./TerminalName";
import { MagneticLink } from "./MagneticLink";
import { RagDemo } from "./RagDemo";
import { useReveal } from "@/hooks/useReveal";

const skills = {
  "AI & Machine Learning": [
    "Large Language Models", "Retrieval-Augmented Generation", "LLM performance evaluation",
    "Information Retrieval", "Machine Translation", "PyTorch & Neural Networks", "Coding agents"
  ],
  "HPC & Software Engineering": [
    "Python", "Git · Linux Command Line", "running things on AMD GPUs"
  ],
  "Linguistics & Communication": [
    "Theoretical Linguistics", "Computational Linguistics", "Technical Writing", "Mentoring"
  ]
};

const lumiWork = [
  {
    title: "LUMI SSH Tunnel Coding Agent",
    blurb: "Built tooling that connects a local coding agent to an LLM running on LUMI via an SSH tunnel: your machine runs the agent while the model lives on the supercomputer.",
    href: "https://github.com/Arbruiser/LUMI-ssh-tunnel-coding-agent",
    extraLink: {
      label: "Companion blog: Connecting opencode to LUMI",
      href: "https://lumi-supercomputer.eu/connecting-opencode-to-lumi/",
    },
  },
  {
    title: "LUMI AI Guide: 10-LLM-inference",
    blurb: "Authored Chapter 10 for the official LUMI AI Guide: a practical walkthrough of vLLM inference on LUMI.",
    href: "https://github.com/Lumi-supercomputer/LUMI-AI-Guide",
  },
  {
    title: "LUMI AI Factory Onboarding",
    blurb: "Wrote a practical survival guide for industry teams (startups, SMEs, and enterprises) stepping onto LUMI for the first time. Covers SSH, the command line, CPUs vs. GPUs and storage tiers, Apptainer containers, Git, and Slurm, with no prior HPC experience assumed.",
    href: "https://github.com/Arbruiser/LUMI_AIF_Onboarding",
    extraLink: {
      label: "Onboarding website",
      href: "https://arbruiser.github.io/LUMI_AIF_Onboarding/",
    },
  },
  {
    title: "The Pragmatic Guide to LLMs",
    blurb: "Authored a pragmatic guide and deep-dive into LLM performance: how data moves between disk, VRAM and GPU cores, how KV-cache and context length actually cost you, and how to reason about prefill vs. decode throughput when serving LLMs.",
    href: "https://arbruiser.github.io/The-Pragmatic-Guide-to-LLMs/",
  },
  {
    title: "LUMI to Cloud Migration Guide (WIP)",
    blurb: "Drafted a comprehensive guide for migrating AI workloads from the LUMI supercomputer to cloud providers, detailing best practices and technical workflows.",
    href: "https://lumi-ai-factory.github.io/LUMI_to_Cloud/",
  },
  {
    title: "LUMI AIF Template",
    blurb: "Designed a page template for learning materials: experts only need to edit a Markdown file and host it on GitHub to get a ready-to-share website in LUMI AI Factory colours. Vibe-coded with Lovable.",
    href: "https://github.com/Arbruiser/LUMI_AIF_template",
  },
];

const projects = [
  {
    title: "Retrieval-Augmented Generation in Phonology",
    blurb: "Built a RAG QA system in the specialised domain of phonology with LlamaIndex and OpenAI models, plus a custom benchmark dataset. Significantly outperforms non-RAG baselines.",
    tag: "MA Thesis",
    href: "https://helda.helsinki.fi/items/d71a36a2-50fe-46e8-8b35-110b416cd33f",
  },
  {
    title: "Kielipankki FCS Endpoint: European Search",
    blurb: <>Refactored and shipped a Clarin Federated Content Search endpoint in Java for Kielipankki during my internship on the Kielipankki team at CSC, so Finnish language corpora are now queryable from the European federated search at <MagneticLink href="https://contentsearch.clarin.eu/" target="_blank" rel="noreferrer" className="items-center gap-1 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">contentsearch.clarin.eu</MagneticLink>, despite a complex existing codebase and no prior Java experience.</>,
    tag: "CSC internship",
    href: "https://github.com/CSCfi/Kielipankki-fcs-endpoint-ansible",
  },
  {
    title: "Medical-Domain Search Engine",
    blurb: "Led a team building a search engine over medical text — preprocessing, TF-IDF, Hugging Face medical NER, plotting and frontend integration.",
    tag: "Course project",
  },
  {
    title: "Russian → English Neural Machine Translation",
    blurb: "Trained a state-of-the-art NMT system from Russian to English for the Machine Translation course at the University of Helsinki.",
    tag: "Course project",
  },
  {
    title: "Cross-lingual Embedding Clustering",
    blurb: "Used a state-of-the-art LLM and an NMT model to produce and cluster multilingual embeddings, comparing semantic structure across languages.",
    tag: "Course project",
  },
  {
    title: "Annotated News Corpus: Biden vs Trump",
    blurb: "Coordinated a team that designed an annotation schema for references and evaluative language toward Biden and Trump in news articles.",
    tag: "Course project",
  },
];

const education = [
  { years: "2023 - 2025", school: "University of Helsinki", degree: "MA, Linguistic Diversity & Digital Humanities (Language Technology)", note: "100% tuition fee waiver · GPA 4.3 / 5.0" },
  { years: "2022 - 2023", school: "Eötvös Loránd University", degree: "MA, English Studies (Theoretical Linguistics)", note: "Stipendium Hungaricum · GPA 4.57 / 5.0" },
  { years: "2019 - 2022", school: "Eötvös Loránd University", degree: "BA, Pedagogy (Organising & Developing Education)", note: "Stipendium Hungaricum · GPA 4.8 / 5.0" },
  { years: "2016 - 2018", school: "Odessa National University", degree: "BA, Philology (Germanic Languages & Literatures)", note: "Full Ukrainian government scholarship · GPA 91 / 100" },
];

const languages = [
  { name: "Ukrainian 🇺🇦", level: "Native" },
  { name: "English 🇬🇧", level: "C2 (near-native)" },
  { name: "Hungarian 🇭🇺", level: "B2 (upper-intermediate)" },
];

const events = [
  {
    when: "Oct 2026",
    title: "Workshop: Agents on LUMI",
    venue: "Nordic AI Factory Summit · Stockholm",
    body: "Hands-on workshop on running coding and research agents against LLMs hosted on the LUMI supercomputer.",
    tag: "workshop",
  },
  {
    when: "Sep 2026",
    title: "Hackathon: An agent for HPC clusters",
    venue: "LRZ · Munich",
    body: "Built an agent that inspects an HPC system — hardware, modules, environment — and conditionally optimises code for whatever it finds it is running on.",
    tag: "hackathon",
  },
  {
    when: "Jun 2026",
    title: "Talk: Aitta, the LUMI AI Factory inference platform",
    venue: "TPC Satellite Event 2026 · LRZ, Munich",
    body: "Presented Aitta, the inference platform developed by the LUMI AI Factory, and how it serves models on European HPC infrastructure.",
    tag: "presentation",
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <TerminalName />
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              I bridge the gap between heavy compute and the humans who use it.
              I work across the full LLM stack at the LUMI AI Factory, from
              fine-tuning and evaluation to inference at scale on one of Europe's
              fastest supercomputers.
            </p>
          </div>
          <img
            src={portrait}
            alt="Portrait of Artúr Vojt-Antal"
            className="h-32 w-32 rounded-full object-cover shadow-md ring-1 ring-border md:h-40 md:w-40"
          />
        </header>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <MagneticLink href="https://www.linkedin.com/in/artur-voit-antal-862b5b247/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </MagneticLink>
          <MagneticLink href="https://github.com/Arbruiser" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Github className="h-4 w-4" /> GitHub
          </MagneticLink>
        </div>

        <Section title="About" cmd="cat about.md">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm an AI Specialist focused on helping users maximise the
              potential of LLMs on the LUMI supercomputer. My academic
              foundation in NLP and theoretical linguistics gave me a rigorous
              analytical mindset, and my day-to-day work builds on that by
              focusing on practical integration. I work across the AI stack,
              understanding it well enough to bridge the technical gaps between
              fine-tuning, evaluation, inference and the hardware it's running on. Whether I'm building out a new
              tool or integrating existing ones, I use LLMs heavily to boost my
              productivity, ensuring the output is always thoughtful and far
              from "AI slop". But I don't just build systems; I ensure people
              actually understand how to use them.
            </p>
            <p>
              Drawing on my background in pedagogy, I also bring a human-centric
              approach to AI. I'm just as comfortable turning complex
              architectures into accessible learning materials, running hands-on
              workshops, or diving into philosophical discussions about the nature
              of language models.
            </p>
            <p>
              I enjoy working at these intersections, moving between deep
              technical integration and high-level communication. I'm at my
              best when connecting the worlds of engineering and education,
              turning fragmented workflows into reliable, end-to-end pipelines.
              Ultimately, I'm only really satisfied when a project is delivered
              with the precision and craftsmanship that sets it apart.
            </p>
          </div>
        </Section>

        <Section title="Experience" cmd="ls -la experience/">
          <div className="space-y-8">
            <Entry
              years="Feb 2026 — present"
              title="Junior Machine Learning Specialist · CSC — IT Center for Science"
              body="At the LUMI AI Factory — working across the full LLM lifecycle: fine-tuning, evaluation, LLM-as-a-judge, technical writing, user-guide creation, mentoring, and hands-on support to help industry teams get production value out of LUMI."
            />
            <Entry
              years="Sep — Nov 2025"
              title="Intern · CSC — IT Center for Science"
              body="Set up Federated Content Search for local corpora — refactored a Java Clarin FCS endpoint so the European search engine can query corpora hosted at CSC. Shipped despite a complex codebase and no prior Java experience."
            />
          </div>
        </Section>

        <Section title="Talks, workshops & hackathons" cmd="cat events.log">
          <ul className="space-y-6">
            {events.map((e) => (
              <li key={e.title} className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
                <span className="text-sm text-muted-foreground">{e.when}</span>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-serif text-base font-medium">{e.title}</p>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{e.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.venue}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Open-source work at LUMI AI Factory" cmd="git log --oneline lumi/">
          <ul className="space-y-6">
            {lumiWork.map((p) => (
              <li key={p.href} className="group border-l-2 border-border pl-5 transition-colors hover:border-primary">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg font-medium">
                    <MagneticLink href={p.href} target="_blank" rel="noreferrer" className="items-center gap-1.5 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                      {p.title}
                      <ArrowUpRight className="h-4 w-4 opacity-80" />
                    </MagneticLink>
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">→ repo.git</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                {p.extraLink && (
                  <p className="mt-2 text-sm">
                    <MagneticLink href={p.extraLink.href} target="_blank" rel="noreferrer" className="items-center gap-1 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                      {p.extraLink.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                    </MagneticLink>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Thesis · Phonological RAG" cmd="./run_demo.sh">
          <RagDemo />
        </Section>

        <Section title="Earlier projects" cmd="ls projects/">
          <ul className="space-y-6">
            {projects.map((p) => (
              <li key={p.title} className="group border-l-2 border-border pl-5 transition-colors hover:border-primary">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg font-medium">
                    {p.href ? (
                      <MagneticLink href={p.href} target="_blank" rel="noreferrer" className="items-center gap-1.5 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                        {p.title}
                        <ArrowUpRight className="h-4 w-4 opacity-80" />
                      </MagneticLink>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills & interests" cmd="cat skills.json">
          <div className="flex flex-col gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 font-mono text-sm font-semibold text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground">
                      [ {s} ]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education" cmd="cat education.log">
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.school + e.years} className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
                <span className="text-sm text-muted-foreground">{e.years}</span>
                <div>
                  <p className="font-serif text-base font-medium">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.degree}</p>
                  <p className="mt-1 text-xs text-muted-foreground/80">{e.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Languages" cmd="locale -a">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {languages.map((l) => (
              <li key={l.name} className="rounded-md border border-border bg-card p-3">
                <p className="font-serif text-sm font-medium">{l.name}</p>
                <p className="text-xs text-muted-foreground">{l.level}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Get in touch" cmd="ssh artur@lumi">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm always open to discussing LLM workflows, supercomputing, and
            potential collaborations with the LUMI AI Factory (the team I
            work in at CSC). Let's connect on LinkedIn.
          </p>
          <MagneticLink
            href="https://www.linkedin.com/in/artur-voit-antal-862b5b247/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
        </Section>

        <footer className="mt-20 border-t border-dashed border-border pt-6 font-mono text-xs text-muted-foreground">
          <span className="text-destructive">&gt;</span> © {new Date().getFullYear()} Artúr Vojt-Antal
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children, cmd }: { title: string; children: ReactNode; cmd?: string }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal mt-16">
      {cmd && (
        <p className="mb-3 rounded-md border border-border bg-card/60 px-3 py-2 font-mono text-xs text-foreground/90 shadow-sm">
          <span className="text-accent">~/portfolio</span>{" "}
          <span className="text-destructive">$</span> {cmd}
          <span className="caret" aria-hidden="true" />
        </p>
      )}
      <h2 className="mb-6 font-serif text-2xl font-semibold md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Entry({ years, title, body }: { years: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
      <span className="text-sm text-muted-foreground">{years}</span>
      <div>
        <p className="font-serif text-base font-medium">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
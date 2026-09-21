import portrait from "@/assets/portrait.png";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";
import { TerminalName } from "./TerminalName";
import { MagneticLink } from "./MagneticLink";
import { RagDemo } from "./RagDemo";
import { useReveal } from "@/hooks/useReveal";
import { education, events, experience, languages, lumiWork, projects, skills } from "@/content/portfolio";

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
              I'm a Junior Machine Learning Specialist focused on helping users
              maximise the potential of LLMs on the LUMI supercomputer. My academic
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
          <ul className="space-y-8">
            {experience.map((e) => (
              <li key={e.title}>
                <Entry {...e} />
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

        <Section title="Talks, workshops & hackathons" cmd="cat events.log">
          <ul className="space-y-6">
            {events.map((e) => (
              <li key={e.title}>
                <Entry {...e} />
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
              <li key={e.title + e.when}>
                <Entry {...e} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Languages" cmd="locale -a">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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

/** Dated row shared by Experience, Talks and Education: date on the left, details on the right. */
function Entry({ when, over, title, subtitle, body, note }: { when: string; over?: string; title: string; subtitle?: string; body?: string; note?: string }) {
  const upcoming = over !== undefined && new Date(over) > new Date();
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr]">
      <span className="text-sm text-muted-foreground">
        {when}
        {upcoming && (
          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-accent md:ml-0 md:mt-0.5 md:block">
            upcoming
          </span>
        )}
      </span>
      <div>
        <h3 className="font-serif text-base font-medium">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        {body && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>}
        {note && <p className="mt-1 text-xs text-muted-foreground/80">{note}</p>}
      </div>
    </div>
  );
}

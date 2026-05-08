import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  "Python", "Retrieval-Augmented Generation", "Large Language Models",
  "Information Retrieval", "Machine Learning", "PyTorch & Neural Networks",
  "Machine Translation", "High-Performance Computing", "Theoretical Linguistics",
  "Git & Linux",
];

const projects = [
  {
    title: "Thesis: Retrieval-Augmented Generation in Phonology",
    blurb: "Built a RAG QA system in the specialised domain of phonology with LlamaIndex and OpenAI models, plus a custom benchmark dataset. Significantly outperforms non-RAG baselines.",
    tag: "MA Thesis",
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
    title: "Annotated News Corpus — Biden vs Trump",
    blurb: "Coordinated a team that designed an annotation schema for references and evaluative language toward Biden and Trump in news articles.",
    tag: "Course project",
  },
];

const education = [
  { years: "2023 — 2025", school: "University of Helsinki", degree: "MA, Linguistic Diversity & Digital Humanities — Language Technology", note: "100% tuition fee waiver · GPA 4.3 / 5.0" },
  { years: "2022 — 2023", school: "Eötvös Loránd University", degree: "MA, English Studies — Theoretical Linguistics", note: "Stipendium Hungaricum · GPA 4.57 / 5.0" },
  { years: "2019 — 2022", school: "Eötvös Loránd University", degree: "BA, Pedagogy — Organising & Developing Education", note: "Stipendium Hungaricum · GPA 4.8 / 5.0" },
  { years: "2016 — 2018", school: "Odessa National University", degree: "BA, Philology — Germanic Languages & Literatures", note: "Full Ukrainian government scholarship · GPA 91 / 100" },
];

const languages = [
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "English", level: "C2 — near-native" },
  { name: "Hungarian", level: "B2 — upper-intermediate" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Hero */}
        <header className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              NLP · Language Technology
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              Artúr<br />Vojt-Antal
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              I build language technology — Retrieval-Augmented Generation,
              LLM-powered search, and machine translation — with a foundation in
              theoretical linguistics and the humanities.
            </p>
          </div>
          <img
            src={portrait}
            alt="Portrait of Artúr Vojt-Antal"
            className="h-32 w-32 rounded-full object-cover shadow-md ring-1 ring-border md:h-40 md:w-40"
          />
        </header>

        {/* Contact row */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a href="mailto:voitarthur@gmail.com" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Mail className="h-4 w-4" /> voitarthur@gmail.com
          </a>
          <a href="tel:+380965385800" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Phone className="h-4 w-4" /> +380 96 538 5800
          </a>
          <a href="https://www.linkedin.com/in/artur-voit-antal-862b5b247/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>

        {/* About */}
        <Section title="About">
          <p className="text-base leading-relaxed text-muted-foreground">
            Described by my professors as endlessly curious, resourceful and
            driven, I bring a versatile background in NLP, theoretical
            linguistics and the humanities. I enjoy difficult, unfamiliar
            problems — most recently refactoring a Java Clarin FCS endpoint at
            CSC despite no prior Java experience.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Entry
            years="Sep — Nov 2025"
            title="Intern, CSC — IT Center for Science"
            body="Refactored Java code for a Clarin FCS endpoint, enabling the European search engine to query corpora hosted at CSC. Shipped despite a complex codebase and zero prior Java experience."
          />
        </Section>

        {/* Projects */}
        <Section title="Selected projects">
          <ul className="space-y-6">
            {projects.map((p) => (
              <li key={p.title} className="group border-l-2 border-border pl-5 transition-colors hover:border-primary">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg font-medium">{p.title}</h3>
                  <span className="shrink-0 text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section title="Skills & interests">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground">
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
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

        {/* Languages */}
        <Section title="Languages">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {languages.map((l) => (
              <li key={l.name} className="rounded-md border border-border bg-card p-3">
                <p className="font-serif text-sm font-medium">{l.name}</p>
                <p className="text-xs text-muted-foreground">{l.level}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* CTA */}
        <Section title="Get in touch">
          <p className="text-base leading-relaxed text-muted-foreground">
            Open to roles and collaborations in NLP, RAG, LLM applications and
            language technology research.
          </p>
          <a
            href="mailto:voitarthur@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Say hello <ArrowUpRight className="h-4 w-4" />
          </a>
        </Section>

        <footer className="mt-20 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Artúr Vojt-Antal · EU citizenship
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
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

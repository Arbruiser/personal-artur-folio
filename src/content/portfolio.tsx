import { MagneticLink } from "@/components/MagneticLink";

export const skills = {
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

export const experience = [
  {
    when: "Feb 2026 — present",
    title: "Junior Machine Learning Specialist · LUMI AI Factory",
    subtitle: "CSC — IT Center for Science",
    body: "Working across the full LLM lifecycle: fine-tuning, evaluation, LLM-as-a-judge, technical writing, user-guide creation, mentoring, and hands-on support to help industry teams get production value out of LUMI.",
  },
  {
    when: "Sep — Nov 2025",
    title: "Intern · Kielipankki",
    subtitle: "CSC — IT Center for Science",
    body: "Set up Federated Content Search for local corpora — refactored a Java Clarin FCS endpoint so the European search engine can query corpora hosted at CSC. Shipped despite a complex codebase and no prior Java experience.",
  },
];

/** `over` is the day after the event; the "upcoming" marker clears itself once that date passes. */
export const events = [
  {
    when: "Oct 2026",
    over: "2026-11-01",
    title: "Workshop: Agents on LUMI",
    subtitle: "Nordic AI Factory Summit · Stockholm",
    body: "A hands-on workshop on running coding and research agents against LLMs hosted on the LUMI supercomputer.",
  },
  {
    when: "Sep 2026",
    title: "Hackathon: An agent for HPC clusters",
    subtitle: "LRZ · Munich",
    body: "Built an agent that inspects an HPC system (hardware, modules, environment) and conditionally optimises code for whatever it finds it is running on.",
  },
  {
    when: "Jun 2026",
    title: "Talk: Aitta, the LUMI AI Factory inference platform",
    subtitle: "TPC Satellite Event 2026 · LRZ, Munich",
    body: "Presented Aitta, the inference platform developed by the LUMI AI Factory, and how it serves models on European HPC infrastructure.",
  },
];

export const lumiWork = [
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

export const projects = [
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

export const education = [
  { when: "2023 - 2025", title: "University of Helsinki", subtitle: "MA, Linguistic Diversity & Digital Humanities (Language Technology)", note: "100% tuition fee waiver · GPA 4.3 / 5.0" },
  { when: "2022 - 2023", title: "Eötvös Loránd University", subtitle: "MA, English Studies (Theoretical Linguistics)", note: "Stipendium Hungaricum · GPA 4.57 / 5.0" },
  { when: "2019 - 2022", title: "Eötvös Loránd University", subtitle: "BA, Pedagogy (Organising & Developing Education)", note: "Stipendium Hungaricum · GPA 4.8 / 5.0" },
  { when: "2016 - 2018", title: "Odessa National University", subtitle: "BA, Philology (Germanic Languages & Literatures)", note: "Full Ukrainian government scholarship · GPA 91 / 100" },
];

export const languages = [
  { name: "Ukrainian 🇺🇦", level: "Native" },
  { name: "English 🇬🇧", level: "C2 (near-native)" },
  { name: "Hungarian 🇭🇺", level: "B2 (upper-intermediate)" },
];

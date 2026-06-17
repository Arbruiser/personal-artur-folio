All edits are in `src/components/Portfolio.tsx` only.

## 1. "Open-source work at LUMI AI Factory" — update `lumiWork`

- **Remove** "AI Inference Examples" and "LUMI LLM Performance Guide" (current entry).
- **Update** "LUMI SSH Tunnel Coding Agent" — append a sentence linking the blog as the companion write-up:
  > "Also wrote the companion blog post on connecting opencode to LUMI." (linked to https://lumi-supercomputer.eu/connecting-opencode-to-lumi/)
  Implementation: extend the `blurb` field type to allow ReactNode so we can embed the link inline, or add an optional `extraLink: { label, href }` field rendered after the blurb. I'll go with `extraLink` to keep the data shape clean.
- **Update** "LUMI AIF Template" blurb — append: " Vibe-coded with Lovable."
- **Add** "LUMI AI Factory Onboarding":
  > "A practical survival guide for industry teams (startups, SMEs, enterprises) stepping onto LUMI for the first time — SSH, the command line, GPUs and storage tiers, Apptainer containers, Git, and Slurm, with no prior HPC experience assumed."
  Link: https://github.com/Arbruiser/LUMI_AIF_Onboarding
- **Add** "LUMI LLM Performance Guide" (re-added with a real description):
  > "A deep-dive companion to the LUMI AI Guide: how data moves between disk, VRAM and GPU cores, how KV-cache and context length actually cost you, and how to reason about prefill vs. decode throughput when serving LLMs."
  Link: https://github.com/Arbruiser/LUMI-LLM-performance-guide

Final order: SSH Tunnel Coding Agent → LUMI AI Guide → LUMI AIF Onboarding → LUMI LLM Performance Guide → LUMI AIF Template.

## 2. "Earlier projects" — add Kielipankki FCS endpoint right after the thesis entry

New item, inserted as the second entry in `projects`:
- title: "Kielipankki FCS Endpoint — European Search"
- tag: "CSC internship"
- href: https://github.com/CSCfi/Kielipankki-fcs-endpoint-ansible
- blurb: "Refactored and shipped a Clarin Federated Content Search endpoint in Java for Kielipankki during my internship on the Kielipankki team at CSC, so Finnish language corpora can be queried from the European federated search at contentsearch.clarin.eu — despite a complex existing codebase and no prior Java experience."

(The existing Experience entry about the same internship stays; this surfaces the concrete deliverable and links the repo + live search.)

## Technical notes

- Extend the `lumiWork` item shape to `{ title, blurb, href, extraLink?: { label, href } }`; render `extraLink` as a small inline `MagneticLink` on a new line under the blurb when present, styled like the existing project links (underline + arrow icon, muted size).
- No new components, no style-system changes, no other sections touched.

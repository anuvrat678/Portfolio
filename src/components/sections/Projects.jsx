import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../../data/content";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { primary, ghost } from "../ui/styles";

function ProjectList() {
  return (
    <div className="grid gap-6">
      {PROJECTS.map((p) => (
        <motion.article key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }}>
          <Card tilt className={p.featured ? "border-accent p-5 sm:p-9" : ""}>
            <p className="text-sm text-muted">{p.featured ? "Featured: " : ""}{p.kind}</p>
            <h3 className={`mt-1 font-display font-bold ${p.featured ? "text-3xl" : "text-2xl"}`}>{p.name}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{p.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={`${primary} w-full sm:w-auto`}><ExternalLink size={16} />Live Demo</a>}
              <a href={p.repo} target="_blank" rel="noreferrer" className={`${p.live ? ghost : primary} w-full sm:w-auto`}><Github size={16} />View Source Code</a>
            </div>
          </Card>
        </motion.article>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ProjectList />
    </Section>
  );
}

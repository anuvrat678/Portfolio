import { Layout, Server, Database, Wrench, Boxes } from "lucide-react";
import { SKILLS } from "../../data/content";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Tech } from "../fx";

const SK_ICONS = { Frontend: Layout, Backend: Server, Database: Database, Tools: Wrench, Concepts: Boxes };
export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(SKILLS).map(([cat, items], i) => {
          const I = SK_ICONS[cat];
          return (
            <Card key={cat} className={i === 4 ? "sm:col-span-2" : ""}>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent"><I size={20} /></span>
                <h3 className="font-display text-xl font-bold">{cat}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((t) => (
                  <li key={t} className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-sm font-medium text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-ink"><Tech n={t} size={18} />{t}</li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

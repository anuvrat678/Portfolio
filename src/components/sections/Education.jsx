import { GraduationCap } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Education() {
  const E = [["2026–2028", "Master of Computer Applications (MCA)", "Uka Tarsadia University", "Currently pursuing", true], ["2022–2025", "Bachelor of Computer Applications (BCA)", "Veer Narmad South Gujarat University", "", false]];
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {E.map(([y, d, u, st, now]) => (
          <Card key={d} className={now ? "border-accent" : ""}>
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-12 place-items-center rounded-xl bg-accent/15 text-accent"><GraduationCap size={24} /></span>
              <span className="font-display text-3xl font-bold text-accent">{y}</span>
            </div>
            <h3 className="mt-6 font-display text-xl font-bold">{d}</h3>
            <p className="mt-1 text-muted">{u}</p>
            {st && <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent2/15 px-3 py-1 text-sm font-semibold text-accent2"><span className="size-2 animate-pulse rounded-full bg-accent2" />{st}</p>}
          </Card>
        ))}
      </div>
    </Section>
  );
}

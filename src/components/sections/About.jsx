import { motion } from "motion/react";
import { GraduationCap, Code2, FolderGit2 } from "lucide-react";
import { Section } from "../ui/Section";
import { Spot } from "../fx";

const CODE = [["studying", '"MCA"'], ["university", '"Uka Tarsadia University"'], ["graduating", "2028"], ["previously", '"BCA, VNSGU (2022–2025)"'], ["stack", '["React", "Node.js", "Express.js", "MongoDB"]'], ["focus", '"full-stack web development"']];
const FACTS = [[GraduationCap, "MCA at Uka Tarsadia University", "2026–2028"], [Code2, "MERN stack", "React, Node.js, Express.js, MongoDB"], [FolderGit2, "Featured projects", "TurfBook and Farm Dashboard"]];

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="max-w-xl space-y-4 leading-relaxed text-muted">
            <p>I am pursuing a Master of Computer Applications at Uka Tarsadia University (2026–2028), after completing my Bachelor of Computer Applications at Veer Narmad South Gujarat University (2022–2025).</p>
            <p>My interest is full-stack web development. I have learned and used React, Tailwind CSS, Node.js, Express.js, and MongoDB to build web applications, including a booking platform with authentication, slot availability checks, and an admin dashboard.</p>
            <p>I focus on responsive, usable, and practical applications, and I keep learning by building.</p>
          </div>
          <ul className="mt-8 space-y-3">
            {FACTS.map(([I, t, d]) => (
              <li key={t} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><I size={20} /></span>
                <span><span className="block font-semibold">{t}</span><span className="text-sm text-muted">{d}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <Spot tilt className="self-start rounded-2xl border border-line bg-surface/80">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
            <span className="size-3 rounded-full bg-accent2" /><span className="size-3 rounded-full bg-accent/60" /><span className="size-3 rounded-full bg-line" />
            <span className="ml-3 text-xs text-muted">anuvrat.js</span>
          </div>
          <div className="space-y-1 p-5 font-mono text-[13px] leading-7" role="img" aria-label="Summary: studying MCA at Uka Tarsadia University, graduating 2028, previously BCA at VNSGU, working with React, Node.js, Express.js and MongoDB">
            <div className="text-muted">const <span className="text-ink">anuvrat</span> = {"{"}</div>
            {CODE.map(([k, v], n) => (
              <motion.div key={k} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: n * 0.12 }} className="break-words pl-5">
                <span className="text-accent2">{k}</span><span className="text-muted">: </span><span className="text-accent">{v}</span><span className="text-muted">,</span>
              </motion.div>
            ))}
            <div className="text-muted">{"};"}</div>
          </div>
        </Spot>
      </div>
    </Section>
  );
}

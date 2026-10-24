import { Tech } from "./Tech.jsx";

const RING1 = ["React.js", "Node.js", "Express.js", "MongoDB"];
const RING2 = ["Tailwind CSS", "JavaScript", "HTML5", "CSS3", "MySQL", "Git"];
function Ring({ items, cls, dur, rev }) {
  return (
    <div className={`orbit absolute rounded-full border border-dashed border-line ${cls}`} style={{ animationDuration: dur, animationDirection: rev ? "reverse" : "normal" }}>
      {items.map((n, i) => {
        const a = (360 / items.length) * i;
        return (
          <div key={n} className="absolute inset-0" style={{ transform: `rotate(${a}deg)` }}>
            <div className="absolute left-1/2 top-0 -ml-6 -mt-6" style={{ transform: `rotate(${-a}deg)` }}>
              <div className="unspin grid size-12 place-items-center rounded-full border border-line bg-surface shadow-lg" style={{ animationDuration: dur, animationDirection: rev ? "normal" : "reverse" }}><Tech n={n} size={26} /></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// Hero graphic: the tech stack orbiting a monogram.
export function Orbit() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-sm">
      <div className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-40" />
      <Ring items={RING2} cls="inset-0" dur="50s" />
      <Ring items={RING1} cls="inset-[22%]" dur="35s" rev />
      <div className="absolute inset-[38%] grid place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-display text-3xl font-bold text-on-accent shadow-2xl">AS</div>
    </div>
  );
}

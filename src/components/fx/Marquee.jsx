import { Tech } from "./Tech.jsx";

const Row = ({ items, rev }) => (
  <div className="overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className={`marq flex w-max ${rev ? "rev" : ""}`}>
      {[...items, ...items, ...items, ...items].map((t, i) => (
        <span key={i} className="mr-4 inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 px-5 py-3 font-display text-lg font-bold"><Tech n={t} size={24} />{t}</span>
      ))}
    </div>
  </div>
);
export function Marquee() {
  return (
    <div aria-hidden="true" className="my-10 space-y-4">
      <Row items={["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"]} />
      <Row items={["HTML5", "CSS3", "MySQL", "Git", "GitHub", "Vite"]} rev />
    </div>
  );
}

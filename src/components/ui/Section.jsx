import { Split } from "../fx";

export const Section = ({ id, title, children }) => (
  <section id={id} className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-28">
    <h2 aria-label={title} className="overflow-hidden pb-2 font-display text-3xl font-bold tracking-tight sm:text-5xl"><Split t={title} view /></h2>
    <div className="mt-8 sm:mt-10">{children}</div>
  </section>
);

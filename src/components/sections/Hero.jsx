import { motion } from "motion/react";
import { Github, Mail, FileText } from "lucide-react";
import { L, EMAIL, RESUME } from "../../data/content";
import { Split, Rotator, Mag, Orbit } from "../fx";
import { primary, ghost } from "../ui/styles";

export function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-5xl px-5 pb-6 pt-24 sm:pt-36">
      <h1 aria-label="Anuvrat Singh Rajpurohit" className="font-display text-[clamp(2.8rem,12vw,8rem)] font-bold leading-[1] tracking-tight">
        <span className="block overflow-hidden pb-1"><Split t="Anuvrat" /></span>
        <span className="block overflow-hidden pb-1"><Split t="Singh" d={0.25} /></span>
        <span className="block overflow-hidden pb-2"><Split t="Rajpurohit" d={0.45} cls="grad" /></span>
      </h1>
      <div className="mt-12 grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
          <p className="text-lg font-semibold sm:text-xl">MCA Student | Aspiring Full-Stack Developer</p>
          <p className="mt-2 text-lg text-muted">I build with <Rotator /></p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            I am an MCA student interested in full-stack web development, modern frontend technologies, and building practical web applications. I work with React, Tailwind CSS, Node.js, Express.js, and MongoDB, and continuously develop my skills through hands-on learning and application development.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Mag><a href="#projects" className={primary}>Explore My Projects</a></Mag>
            <Mag><a href="#contact" className={ghost}>Contact Me</a></Mag>
            <Mag><a href={RESUME} target="_blank" rel="noreferrer" className={ghost}><FileText size={16} />Resume</a></Mag>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <a className="inline-flex items-center gap-2 hover:text-ink" href={L.github} target="_blank" rel="noreferrer"><Github size={16} />github.com/anuvrat678</a>
            <a className="inline-flex items-center gap-2 hover:text-ink" href={`mailto:${EMAIL}`}><Mail size={16} />{EMAIL}</a>
          </div>
        </motion.div>
        <Orbit />
      </div>
    </section>
  );
}

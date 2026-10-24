import { MotionConfig } from "motion/react";
import { Glow, Cursor, Progress, Marquee } from "./components/fx";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Glow />
      <Cursor />
      <Progress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

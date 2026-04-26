import { motion } from "framer-motion";
import { profile } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <span className="eyebrow">Hello, I’m</span>
        <h1>{profile.name}</h1>
        <p className="hero-text">{profile.subtitle}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn accent">
            Let’s connect
          </a>
          <a href="#projects" className="btn ghost">
            View projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}

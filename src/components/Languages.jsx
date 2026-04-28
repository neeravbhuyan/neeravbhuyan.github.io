import { motion } from "framer-motion";
import { profile } from "../data";

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="section-header">
        <span>Programming</span>
        <h2>Languages</h2>
      </div>

      <div className="skills-grid">
        {profile.languages.map((language, index) => (
          <motion.span
            key={language}
            className="skill-pill"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            {language}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
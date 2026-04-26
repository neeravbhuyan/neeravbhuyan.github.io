import { motion } from "framer-motion";
import { profile } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span>Core strengths</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {profile.skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="skill-pill"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

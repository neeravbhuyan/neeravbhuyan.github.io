import { motion } from "framer-motion";
import { profile } from "../data";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {profile.projects.map((p, i) => (
        <motion.div
          key={i}
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
import { profile } from "../data";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>

      {profile.education.map((edu, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <h3>{edu.place}</h3>
          <p>{edu.degree}</p>
        </motion.div>
      ))}
    </section>
  );
}
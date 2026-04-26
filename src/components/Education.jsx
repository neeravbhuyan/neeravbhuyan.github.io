import { motion } from "framer-motion";
import { profile } from "../data";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-header">
        <span>My journey</span>
        <h2>Education</h2>
      </div>

      <div className="timeline">
        {profile.education.map((item, index) => (
          <motion.div
            key={item.institution}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
          >
            <div className="timeline-badge" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.institution}</h3>
                <span>{item.period}</span>
              </div>
              <p className="timeline-degree">{item.degree}</p>
              <p className="timeline-details">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

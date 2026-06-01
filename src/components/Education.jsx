import { motion } from "framer-motion";
import { profile } from "../data";
import "./Experience.css";


export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-header">
        <span>My journey</span>
        <h2>Education</h2>
      </div>

      <div className="experience-container">
        <div className="experience-timeline">
          {profile.education.map((item, index) => (
            <motion.div
              key={item.institution}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
            >
              <div className="experience-card-left">
                <span className="experience-company">{item.institution}</span>
                <span className="experience-duration">{item.period}</span>
              </div>
              <div className="experience-divider">
                <div className="experience-dot" />
                <div className="experience-line" />
              </div>
              <div className="experience-card-right">
                <h3 className="experience-role">{item.degree}</h3>
                <ul className="experience-points">
                  <li>{item.details}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { profile } from "../data";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-header">
        <span>Milestones</span>
        <h2>Achievements</h2>
      </div>

      <div className="achievement-list">
        {profile.achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            className="achievement-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="achievement-rank">{String(index + 1).padStart(2, "0")}</span>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              {achievement.details ? <p>{achievement.details}</p> : null}
              {achievement.resources?.length > 0 && (
                <div className="achievement-resource-list">
                  {achievement.resources.map((resource) => (
                    <a
                      key={resource.title}
                      className="project-resource"
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resource.title}
                      {resource.type ? <span className="resource-type">{resource.type}</span> : null}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

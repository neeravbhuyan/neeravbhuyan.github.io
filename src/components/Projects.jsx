import { motion } from "framer-motion";
import { profile } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span>Selected work</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {profile.projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-top">
              <span className="project-chip">Featured</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.resources?.length > 0 && (
              <div className="project-resources">
                <strong>Resources</strong>
                <div className="project-resource-list">
                  {project.resources.map((resource) => (
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
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import "./Experience.css";

const experiences = [
  {
    company: "CODSOFT",
    role: "Data Science Intern",
    duration: "May 2026 - June 2026",
    location: "Remote",
    points: [
      "Completed various tasks by utilising statistical tools like linear regression, logistic regression and random forest.",
      "Created models to predict survival outcomes, movie ratings and sales predictions.",
      "Learned to communicate results and apply them meaningfully.",
    ],
    tech: ["dplyr", "ggplot2", "randomforest", "caret"],
    repoLink: "https://github.com/neeravbhuyan/CODSOFT",
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-header">
        <span>My journey</span>
        <h2>Work Experience</h2>
      </div>

      <div className="experience-container">
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.company}>
              <div className="experience-card-left">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-duration">{exp.duration}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
              <div className="experience-divider">
                <div className="experience-dot" />
                <div className="experience-line" />
              </div>
              <div className="experience-card-right">
                <h3 className="experience-role">{exp.role}</h3>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.tech.map((t, i) => (
                    <span className="experience-tag" key={i}>{t}</span>
                  ))}
                </div>
                {exp.repoLink && (
                  <a
                    className="experience-repo-link"
                    href={exp.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    tech: ["dplyr", "ggplot2", "randomForest", "caret", "matplotlib.pyplot", "scikit-learn", "pandas", "numpy"],
    repoLink: "https://github.com/neeravbhuyan/CODSOFT",
  },
  {
    company: "IIT Ropar",
    role: "NS2ML-DE 2026 Workshop Participant",
    duration: "July 06 - July 10, 2026",
    location: "Rupnagar, India",
    points: [
      "Attended the NS2ML-DE 2026 workshop organized by the Department of Mathematics at IIT Ropar.",
      "Explored numerical methods and machine learning algorithms for solving ordinary and partial differential equations.",
      "Participated in lectures by eminent speakers and hands-on Matlab lab sessions.",
    ],
    tech: ["Numerical Methods", "Machine Learning", "Differential Equations", "Matlab"],
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

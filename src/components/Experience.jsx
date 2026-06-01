import "./Experience.css";

const experiences = [
  {
    company: "CODSOFT",
    role: "Software Development Intern",
    duration: "June 2024 – July 2024", // ← update these dates
    location: "Remote",
    points: [
      "Built and deployed [X feature/project] using React and Node.js.", // ← fill in your work
      "Collaborated with a cross-functional team to design and implement RESTful APIs.",
      "Improved application performance by optimizing database queries and front-end rendering.",
    ],
    tech: ["React", "Node.js", "JavaScript", "Git"], // ← update your tech stack
  },
  // Add more internships here in the same format
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-heading">
          <span className="experience-heading-accent">Work</span> Experience
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

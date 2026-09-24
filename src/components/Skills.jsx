import React, { useState } from 'react';

const categories = [
  { id: 'languages', label: 'Programming' },
  { id: 'web', label: 'Web Tech' },
  { id: 'datascience', label: 'Statistical Tools' },
  { id: 'tools', label: 'Environments' },
  { id: 'spoken', label: 'Spoken Languages' },
];

const skillsData = [
  // Programming Languages
  {
    name: 'Python',
    category: 'languages',
    level: 'Proficient',
    libraries: [
      'Pandas',
      'NumPy',
      'SciPy',
      'Scikit-learn',
      'Matplotlib',
      'OpenCV',
    ],
  },
  {
    name: 'R',
    category: 'languages',
    level: 'Proficient',
    libraries: ['dplyr', 'ggplot2', 'lattice'],
  },

  // Web Tech
  { name: 'HTML5 & CSS3', category: 'web', level: 'Intermediate' },
  { name: 'JavaScript', category: 'web', level: 'Intermediate' },


  // Statistical Tools
  { name: 'Regression Analysis', category: 'datascience', level: 'Proficient' },
  { name: ' Exploratory Data Analysis', category: 'datascience', level: 'Proficient' },
  { name: 'Linear Programming Modeling', category: 'datascience', level: 'Proficient' },
  { name: 'Quadratic Programming Modeling', category: 'datascience', level: 'Proficient' },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'tools', level: 'Proficient' },
  { name: 'VS Code', category: 'tools', level: 'Proficient' },
  { name: 'Jupyter Notebook', category: 'tools', level: 'Proficient' },
  { name: 'RStudio', category: 'tools', level: 'Proficient' },
  { name: 'CodeLite', category: 'tools', level: 'Proficient' },

  // Spoken Languages
  { name: 'English', category: 'spoken', level: 'Fluent / Professional' },
  { name: 'Hindi', category: 'spoken', level: 'Native / Bilingual' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const filteredItems = skillsData.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Languages</h2>
        <div className="section-divider"></div>

        {/* Category Tabs */}
        <div className="skills-tabs-container">
          {categories.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Unified Grid */}
        <div className="skills-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`skill-card ${item.libraries ? 'has-libraries' : ''}`}
            >
              <div className="skill-content">
                <div className="skill-header">
                  <span className="skill-name">{item.name}</span>
                  {item.level && (
                    <span className="skill-badge">{item.level}</span>
                  )}
                </div>

                {/* Sub-tags for Python and R libraries */}
                {item.libraries && item.libraries.length > 0 && (
                  <div className="skill-libraries">
                    {item.libraries.map((lib, libIdx) => (
                      <span key={libIdx} className="library-pill">
                        {lib}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

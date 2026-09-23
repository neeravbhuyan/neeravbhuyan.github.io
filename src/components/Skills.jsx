import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Programming' },
  { id: 'web', label: 'Web Tech' },
  { id: 'datascience', label: 'Statistical Tools' },
  { id: 'tools', label: 'Tools' },
  { id: 'spoken', label: 'Spoken Languages' },
];

const skillsData = [
  // Programming Languages
  { name: 'Python', category: 'languages', level: 'Proficient' },
  { name: 'R', category: 'languages', level: 'Proficient' },
  { name: 'SQL', category: 'languages', level: 'Intermediate' },
  { name: 'C++', category: 'languages', level: 'Intermediate' },

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
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? skillsData
    : skillsData.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Languages</h2>
        <div className="section-divider"></div>

        {/* Tab Controls */}
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
            <div key={index} className="skill-card">
              <div className="skill-content">
                <span className="skill-name">{item.name}</span>
                {item.level && (
                  <span className="skill-badge">{item.level}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

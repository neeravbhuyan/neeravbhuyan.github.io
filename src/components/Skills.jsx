import React, { useState } from 'react';
import { skills } from '../data'; // Pulling directly from your data.js

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  // Unified list combining technical skills and spoken languages from data.js
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Tech' },
    { id: 'datascience', label: 'Data Science & ML' },
    { id: 'tools', label: 'Tools' },
    { id: 'spoken', label: 'Languages' },
  ];

  // Map your existing data into a unified array if not already structured together
  const allItems = [
    ...(skills || []),
    ...(languages || []).map((lang) => ({
      ...lang,
      category: 'spoken',
      isLanguage: true,
    })),
  ];

  const filteredItems = activeTab === 'all'
    ? allItems
    : allItems.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Uses your site's heading structure */}
        <h2 className="section-title">Skills & Languages</h2>
        <div className="section-divider"></div>

        {/* Tab Controls */}
        <div className="skills-tabs-container">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Display */}
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

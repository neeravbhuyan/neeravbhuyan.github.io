import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Programming' },
  { id: 'frameworks', label: 'Frameworks & Libraries' },
  { id: 'tools', label: 'Tools & Platforms' },
  { id: 'spoken', label: 'Spoken Languages' },
];

const skillsData = [
  // Programming Languages
  { name: 'Python', category: 'languages', level: 'Advanced', icon: '🐍' },
  { name: 'JavaScript', category: 'languages', level: 'Advanced', icon: '⚡' },
  { name: 'C++', category: 'languages', level: 'Intermediate', icon: '⚙️' },
  { name: 'SQL', category: 'languages', level: 'Proficient', icon: '🗄️' },
  { name: 'HTML5 & CSS3', category: 'languages', level: 'Advanced', icon: '🎨' },

  // Frameworks & Libraries
  { name: 'React', category: 'frameworks', level: 'Advanced', icon: '⚛️' },
  { name: 'Node.js', category: 'frameworks', level: 'Intermediate', icon: '🟢' },
  { name: 'Express', category: 'frameworks', level: 'Intermediate', icon: '🚂' },
  { name: 'Tailwind CSS', category: 'frameworks', level: 'Advanced', icon: '🌊' },
  { name: 'Pandas / NumPy', category: 'frameworks', level: 'Proficient', icon: '📊' },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: '🐙' },
  { name: 'Vite', category: 'tools', level: 'Proficient', icon: '⚡' },
  { name: 'Docker', category: 'tools', level: 'Familiar', icon: '🐳' },
  { name: 'VS Code', category: 'tools', level: 'Advanced', icon: '💻' },
  { name: 'Linux / Bash', category: 'tools', level: 'Proficient', icon: '🐧' },

  // Spoken Languages
  { name: 'English', category: 'spoken', level: 'Fluent / Professional', icon: '🇬🇧' },
  { name: 'Hindi', category: 'spoken', level: 'Native', icon: '🇮🇳' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? skillsData
    : skillsData.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Skills & Languages
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-sm shadow-blue-500/10'
                : 'bg-white/[0.03] text-neutral-400 border border-white/[0.06] hover:bg-white/[0.07] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-200 group"
          >
            <span className="text-2xl select-none group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <div className="overflow-hidden">
              <h3 className="text-sm font-semibold text-neutral-100 truncate">
                {item.name}
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-0.5 truncate">
                {item.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

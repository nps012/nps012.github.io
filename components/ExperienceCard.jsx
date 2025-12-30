import React from 'react';

export default function ExperienceCard({ exp }) {
  // Simple helper to parse basic markdown bolding
  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-slate-900 font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="mb-24 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fas fa-briefcase"></i> {exp.period}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 serif-heading mb-2 leading-tight">
            {exp.role}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <span className="font-semibold text-blue-600">{exp.company}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 flex items-center gap-2">
              <i className="fas fa-location-dot text-sm"></i> {exp.location}
            </span>
          </div>
        </div>
      </div>

      <div className="relative pl-8 md:pl-12 border-l-2 border-slate-100 space-y-8">
        {exp.highlights.map((h, i) => (
          <div key={i} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full border-2 border-white bg-slate-200 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>

            <div className="bg-white p-2 rounded-xl transition-all">
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {formatText(h)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

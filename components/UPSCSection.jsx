
import React from 'react';

const UPSCSection: React.FC = () => {
  return (
    <section id="grit" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 serif-heading">Demonstrated Persistence & Learning Ability</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
            A professional foundation built on academic rigor and a proven ability to master complex information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Rigor</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Navigated the Civil Services Examination to the final Interview stage, placing within the top 0.2% of candidates. This journey represents significant analytical discipline and dedication.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cognitive Bandwidth</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Skilled at rapidly processing and synthesizing extensive information across multiple domains—a critical asset for adaptable roles in Management and Operations.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Resilient Strategy</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Developed a deep understanding of macroeconomics, ethics, and governance, translating into a structured approach for managing complex project lifecycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPSCSection;

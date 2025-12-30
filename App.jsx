
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import UPSCSection from './components/UPSCSection';
import ExperienceCard from './components/ExperienceCard';
import SkillsSection from './components/SkillsSection';
import LeadershipSection from './components/LeadershipSection';
import ResumeAssistant from './components/ResumeAssistant';
import { EXPERIENCES, ACHIEVEMENTS } from './constants.js';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Core Achievements Highlight */}
        <section id="achievements" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mb-6 text-3xl border border-blue-500/30">
                    <i className={`fas ${ach.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 serif-heading">{ach.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.detail}</p>
                  {ach.year && <span className="mt-4 text-xs font-mono text-blue-500 uppercase tracking-widest">{ach.year}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <UPSCSection />

        {/* Work Experience */}
        <section id="experience" className="py-24 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 serif-heading">Professional Journey</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
            
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} />
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />
        
        <LeadershipSection />
      </main>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 serif-heading">Ready to discuss your next project?</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="mailto:narendrapal012@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <i className="fas fa-envelope text-xl"></i> narendrapal012@gmail.com
            </a>
            <a href="tel:+919784118247" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <i className="fas fa-phone text-xl"></i> +91-9784118247
            </a>
            <a href="https://www.linkedin.com/in/narendra-pal-66154413b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i> LinkedIn Profile
            </a>
          </div>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Narendra Pal Singh. Designed for Excellence.</p>
        </div>
      </footer>

      <ResumeAssistant />
    </div>
  );
}


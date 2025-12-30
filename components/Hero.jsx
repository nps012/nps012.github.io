
import React from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold tracking-[0.4em] text-blue-600 uppercase mb-6">Ex-IIT Bombay | Project Manager | UPSC Achiever</h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight serif-heading tracking-tight">
              Grit, Discipline, & <span className="text-blue-600">Project Excellence</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              Project Manager with a documented history of delivering digital banking solutions. 
              From IIT Bombay to a distinguished performance in the UPSC CSE, I combine technical precision 
              with a high capacity for complex problem-solving. Ready to contribute to sales, generalist, and product leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 group shadow-xl active:scale-95"
              >
                View Professional Journey <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="mt-20 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

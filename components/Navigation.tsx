
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter serif-heading">
              Narendra Pal Singh
            </span>
          </div>
          {/* Removed non-functional nav links as per user request (boxed in blue in screenshot) */}
          <div className="flex items-center">
             <a href="mailto:narendrapal012@gmail.com" className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
               Contact Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
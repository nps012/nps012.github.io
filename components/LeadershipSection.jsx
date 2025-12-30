
import React from 'react';
import { LEADERSHIP } from '../constants';

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-slate-900 serif-heading mb-4">Leadership & <span className="text-blue-600">Influence</span></h2>
            <p className="text-slate-500">Beyond technical execution, I excel in driving community engagement and organizational change.</p>
          </div>
          <div className="hidden md:block h-px flex-1 mx-12 bg-slate-100"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {LEADERSHIP.map((item, idx) => (
            <div key={idx} className="group bg-white p-10 border border-slate-200 rounded-[2.5rem] hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{item.role}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{item.org}</p>
                </div>
                <div className="bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter">
                  {item.period}
                </div>
              </div>
              <div className="space-y-6">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                    <p className="text-slate-600 text-sm leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

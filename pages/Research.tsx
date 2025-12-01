import React from 'react';
import { RESEARCH_PILLARS } from '../constants';
import { Cpu, Network, ShieldCheck, Satellite, ArrowUpRight } from 'lucide-react';

const Research: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="h-12 w-12 text-quantum-400" />;
      case 'Network': return <Network className="h-12 w-12 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="h-12 w-12 text-emerald-400" />;
      case 'Satellite': return <Satellite className="h-12 w-12 text-amber-400" />;
      default: return <Cpu className="h-12 w-12" />;
    }
  };

  return (
    <div className="bg-space-950 min-h-screen">
      <div className="bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Research Pillars</h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            Our work is structured around four interconnected strategic pillars designed to address the challenges of 6G Space-Air-Ground Integrated Networks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {RESEARCH_PILLARS.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-shrink-0 bg-slate-800 p-8 rounded-2xl flex items-center justify-center border border-slate-700/50">
                {getIcon(pillar.iconName)}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-mono text-slate-500">0{index + 1}</span>
                  <div className="h-px bg-slate-700 w-12"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{pillar.title}</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-quantum-500">
                  <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-2 font-semibold">Primary Goal</h3>
                  <p className="text-white font-medium">{pillar.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-quantum-900/20 to-purple-900/20 border border-slate-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in collaboration?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We actively share our experimental environments and simulation code via our repositories to promote reproducible research.
          </p>
          <a 
            href="https://github.com/ailabteam" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-space-950 font-bold hover:bg-slate-200 transition-colors"
          >
            Visit Our GitHub <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Research;
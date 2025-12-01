import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Share2, Shield, Globe } from 'lucide-react';
import { ABOUT_TEXT, TAGLINE, RESEARCH_PILLARS, NEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-space-950">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/quantum/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-transparent to-space-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-quantum-900 bg-quantum-900/30 backdrop-blur-sm">
            <span className="text-quantum-400 text-sm font-semibold tracking-wide uppercase">Defining the 6G Era</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6">
            <span className="block">Bridging Quantum Intelligence</span>
            <span className="block gradient-text mt-2">with Future NTN</span>
          </h1>
          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {TAGLINE}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/research"
              className="px-8 py-3 rounded-lg bg-quantum-600 hover:bg-quantum-500 text-white font-medium text-lg transition-all shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:shadow-[0_0_30px_rgba(2,132,199,0.5)] flex items-center gap-2"
            >
              Explore Research <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / About Summary */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Pioneering Hybrid Architectures</h2>
              <div className="prose prose-invert text-slate-400 leading-relaxed">
                {ABOUT_TEXT.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50">
                <Activity className="h-8 w-8 text-quantum-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Optimization</h3>
                <p className="text-sm text-slate-400">Quantum-Inspired algorithms for satellite routing.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 mt-8">
                <Share2 className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Distributed AI</h3>
                <p className="text-sm text-slate-400">Federated Learning at the extreme edge.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50">
                <Shield className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Security</h3>
                <p className="text-sm text-slate-400">Post-Quantum Cryptography & QML.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 mt-8">
                <Globe className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">NTN Integration</h3>
                <p className="text-sm text-slate-400">Space-Air-Ground Integrated Networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="text-xl font-display font-bold text-white">Latest Updates</h3>
              <div className="h-1 w-12 bg-quantum-500 mt-2"></div>
            </div>
            <div className="md:w-3/4 grid gap-6">
              {NEWS.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-l-2 border-slate-700 pl-4">
                  <span className="text-quantum-400 font-mono text-sm whitespace-nowrap">{item.date}</span>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
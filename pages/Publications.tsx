import React from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Tag } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <div className="bg-space-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-display font-bold text-white mb-12">Publications</h1>
        
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-slate-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white leading-tight mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-slate-400 mb-2">
                    {pub.authors.map((author, i) => (
                      <span key={i} className={author.includes('Do') ? 'font-semibold text-slate-200' : ''}>
                        {author}{i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm">
                    <span className="text-quantum-400 font-medium italic">
                      {pub.venue}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300">{pub.year}</span>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                        <Tag className="h-3 w-3" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
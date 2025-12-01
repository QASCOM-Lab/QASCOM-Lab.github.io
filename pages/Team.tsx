import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Github, Linkedin, Globe, BookOpen } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-display font-bold text-white mb-12 text-center">People</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-quantum-500/50 transition-all duration-300 group">
              <div className="aspect-w-1 aspect-h-1 w-full h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-quantum-400 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="flex gap-4">
                  {member.links?.website && (
                    <a href={member.links.website} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                  {member.links?.github && (
                    <a href={member.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.links?.linkedin && (
                    <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.links?.scholar && (
                    <a href={member.links.scholar} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <BookOpen className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join Us</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            We are always looking for motivated students and collaborators interested in Quantum Computing, AI, and Next-Gen Networks.
          </p>
          <a href="mailto:haodp.sut@gmail.com" className="text-quantum-400 hover:text-quantum-300 font-medium underline">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
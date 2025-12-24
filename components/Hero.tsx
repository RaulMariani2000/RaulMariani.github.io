
import React from 'react';
import { ArrowRight, Sparkles, FileText } from 'lucide-react';
import { USER_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-sm font-medium mb-6 animate-pulse">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open for new collaborations
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Innovating towards <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              the future.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {USER_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href={USER_INFO.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-3 group"
            >
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

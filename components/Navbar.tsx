
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, ChevronDown } from 'lucide-react';
import { USER_INFO, PROJECTS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience', hasDropdown: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact-cta' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span 
              onClick={scrollToTop}
              className="font-display font-bold text-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer"
            >
              RAÚL MARIANI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </a>

                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 overflow-hidden">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-2 border-b border-slate-800/50 mb-1">
                        Professional History
                      </div>
                      <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                        {PROJECTS.map((project) => (
                          <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-all text-xs font-medium leading-tight mb-1"
                          >
                            <span className="block truncate">{project.shortTitle || project.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-4 ml-4 border-l border-slate-700 pl-4 h-6">
              <a href={USER_INFO.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={USER_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[calc(100vh-64px)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className="flex justify-between items-center px-3 py-3 text-slate-300 hover:text-white font-medium border-b border-slate-800 last:border-0"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </a>
                {link.hasDropdown && (
                  <div className="bg-slate-950/50 py-2 pl-4 pr-2 space-y-1 border-b border-slate-800">
                    {PROJECTS.map((project) => (
                      <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 truncate"
                      >
                        {project.shortTitle || project.title}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="flex items-center space-x-6 px-3 py-6 border-t border-slate-800">
              <a href={USER_INFO.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={USER_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

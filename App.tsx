
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { PROJECTS, PERSONAL_PROJECTS, SKILLS, USER_INFO } from './constants';
import { Mail, Github, Linkedin, ChevronDown, ChevronUp, Rocket } from 'lucide-react';

const App: React.FC = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const displayedExperiences = showAllExperiences ? PROJECTS : PROJECTS.slice(0, 3);

  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D5603AQEXg_9ehdN_vw/profile-displayphoto-crop_800_800/B56ZjCZ59RHUAM-/0/1755608229059?e=1767830400&v=beta&t=OSwbaRWCLm5HNlKl5lyTRYHbB_wKkh7f0MC_qmlG6xU";

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-400 selection:text-slate-950">
      <Navbar />
      
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900/30 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold mb-8">About Me</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  I am a passionate engineer dedicated to pushing the boundaries of what's possible at the intersection of web technology and aerospace. My journey involves crafting seamless digital interfaces while contributing to the future of space exploration through analog research.
                </p>
                <p className="text-slate-400 text-lg mb-12">
                  Technical excellence is my baseline, but my true drive is solving complex problems that have a meaningful impact on how we interact with technology and understand our place in the universe.
                </p>
                
                <h3 className="text-xl font-bold mb-6 text-indigo-400">Technical Proficiency</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {SKILLS.map((skill) => (
                    <div key={skill.name} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                      <div className="flex items-center gap-3 mb-4 text-indigo-400">
                        {skill.icon}
                        <h4 className="font-bold text-slate-100">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-500 h-full rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase mt-2 block tracking-widest text-right">
                        Expertise: {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 p-8">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                    <img 
                      src={profileImageUrl}
                      alt="Raúl Mariani" 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">{USER_INFO.name}</h3>
                  <div className="mb-4 space-y-1">
                    <a 
                      href="https://www.isunet.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-400 font-medium text-sm leading-relaxed block hover:text-cyan-400 transition-colors"
                    >
                      MSS on Space Policy and Entrepreneurship
                    </a>
                    <a 
                      href="https://www.uc.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-400 font-medium text-sm leading-relaxed block hover:text-cyan-400 transition-colors"
                    >
                      MEng on Aerospace Engineering
                    </a>
                    <a 
                      href="https://case.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-400 font-medium text-sm leading-relaxed block hover:text-cyan-400 transition-colors"
                    >
                      BA on Mechanical and Aerospace Engineering
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    "I believe in creating technology that feels like magic but is built with scientific precision."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-slate-900/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="font-display text-4xl font-bold mb-4">Previous Work Experience</h2>
              <p className="text-slate-400 text-lg">
                A collection of professional roles demonstrating expertise and professionalism in technical and innovative fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedExperiences.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700 hover:border-indigo-500/50 shadow-lg group"
              >
                {showAllExperiences ? 'Show Less' : 'View all Experiences'}
                {showAllExperiences ? (
                  <ChevronUp size={20} className="text-indigo-400 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown size={20} className="text-indigo-400 group-hover:translate-y-1 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section (Replacing AIAssistant) */}
        <section id="projects" className="py-24 bg-slate-950 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Rocket size={14} />
                  Side Projects
                </div>
                <h2 className="font-display text-4xl font-bold mb-4 text-white">Featured Projects</h2>
                <p className="text-slate-400 text-lg">
                  Innovative solutions at the intersection of aerospace engineering and full-stack development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PERSONAL_PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-slate-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to start <br /><span className="text-indigo-500">something great?</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
              Currently accepting new projects and consulting opportunities. Let's discuss how we can build your next big idea together.
            </p>
            <div className="flex justify-center">
              <a 
                id="contact-cta"
                href={`mailto:${USER_INFO.email}`} 
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-white/10 scroll-mt-32"
              >
                <Mail size={24} />
                Say Hello
              </a>
            </div>
            
            <div className="mt-20 flex justify-center gap-8">
              {[
                { icon: <Github />, label: 'Github', href: USER_INFO.social.github },
                { icon: <Linkedin />, label: 'LinkedIn', href: USER_INFO.social.linkedin }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Raúl Mariani Portfolio. All rights reserved. Built with precision.
          </div>
          <div className="flex items-center gap-6">
            <a href={USER_INFO.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-indigo-400 transition-colors">
              <Github size={18} />
            </a>
            <div className="font-display font-bold text-xl text-slate-700 tracking-widest">
              MARIANI CORE v1.0.0
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

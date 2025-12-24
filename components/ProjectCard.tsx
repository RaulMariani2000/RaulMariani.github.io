
import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
      </div>
      
      <div className="p-6 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4">
          {project.link ? (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
            >
              <ExternalLink size={16} />
              Link
            </a>
          ) : (
            <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 cursor-not-allowed opacity-50">
              <ExternalLink size={16} />
              Link
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

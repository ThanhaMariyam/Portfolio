import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={portfolioData.avatar}
            alt={portfolioData.name}
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full object-cover border border-slate-200 shadow-sm"
          />
          <span className="font-bold text-slate-800 tracking-tight">{portfolioData.name}</span>
        </div>
        <div className="flex gap-4">
          <a
            href={portfolioData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

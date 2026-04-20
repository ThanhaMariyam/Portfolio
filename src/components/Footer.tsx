import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="mb-4 text-slate-300 font-medium">Designed & Built by {portfolioData.name}</p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={portfolioData.links.github}
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={portfolioData.links.linkedin}
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-sm border-t border-slate-800 pt-8 max-w-md mx-auto">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

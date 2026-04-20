import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  return (
    <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Hi, I'm <span className="text-indigo-600">{portfolioData.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
            I'm a <span className="font-medium text-slate-800">{portfolioData.role}</span> crafting scalable,
            secure web applications. I focus on backend optimization, API design, and creating robust digital
            products.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
            >
              View My Work
            </a>
            <div className="flex items-center gap-4 text-slate-600">
              <a
                href={portfolioData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a
                href={portfolioData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

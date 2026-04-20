import { Mail, Phone } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data';

export default function ExpertiseSection() {
  return (
    <Section title="Expertise" className="bg-white border-y border-slate-100">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-800">About Me</h3>
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <img
              src={portfolioData.avatar}
              alt={portfolioData.name}
              referrerPolicy="no-referrer"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-slate-50 shadow-sm bg-slate-100 flex-shrink-0"
            />
            <p className="text-slate-600 leading-relaxed max-w-lg mt-1">{portfolioData.summary}</p>
          </div>
          <div className="space-y-3 mt-8">
            <div className="flex items-center gap-3 text-slate-600">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span>{portfolioData.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Phone className="w-5 h-5 text-indigo-500" />
              <span>{portfolioData.phone}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {[...portfolioData.skills.languages, ...portfolioData.skills.frameworks].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-md shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Databases & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {[...portfolioData.skills.databases, ...portfolioData.skills.tools].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-md shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Architecture & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.architecture.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { ChevronRight } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data';

export default function ExperienceSection() {
  return (
    <Section title="Experience">
      <div className="max-w-3xl">
        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[-31px] top-1.5 w-3 h-3 bg-indigo-200 border-2 border-white rounded-full mt-1.5 shadow-sm"></div>

              <div className="md:grid md:grid-cols-12 gap-8 md:border-l border-slate-200 md:pl-8 -ml-[7px]">
                <div className="md:col-span-3 mb-4 md:mb-0">
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <h4 className="text-lg text-indigo-600 font-medium mb-4">{exp.company}</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-slate-600 flex gap-3">
                        <ChevronRight className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

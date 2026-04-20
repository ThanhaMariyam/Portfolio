import Section from './Section';
import { portfolioData } from '../data';

export default function EducationSection() {
  return (
    <Section title="Education">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-3xl">
        {portfolioData.education.map((education, index) => (
          <div key={index}>
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2 sm:gap-0">
              <h3 className="text-lg font-bold text-slate-900">{education.degree}</h3>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                Class of {education.year}
              </span>
            </div>
            <p className="text-slate-600 mt-2">{education.institution}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

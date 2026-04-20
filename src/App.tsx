import EducationSection from './components/EducationSection';
import ExpertiseSection from './components/ExpertiseSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
    </div>
  );
}

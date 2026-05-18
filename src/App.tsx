import { Layout } from './components/ui/Layout';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { Expertise } from './components/sections/Expertise';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Philosophy, Contact } from './components/sections/Final';

export default function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Experience id="experience" translationKey="experience" />
      <Experience id="education" translationKey="education" />
            <Expertise />

      <Projects />
      <Philosophy />
      <Contact />
    </Layout>
  );
}

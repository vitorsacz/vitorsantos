import { Layout } from './components/ui/Layout';
import { Hero } from './components/sections/Hero';
import { AboutMe } from './components/sections/AboutMe';
import { Expertise } from './components/sections/Expertise';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Philosophy, Contact } from './components/sections/Final';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import en from './assets/i18n/en.json';
import pt from './assets/i18n/pt.json';

const translations = { en, pt };

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider content={translations}>
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
      </LanguageProvider>
    </ThemeProvider>
  );
}

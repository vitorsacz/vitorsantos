import React from 'react';
import { Section, Reveal } from '../ui/Base';
import { useLanguage } from '../../context/LanguageContext';

import photo from '../../assets/images/hero-2.svg';

export const AboutMe = () => {
  const { t } = useLanguage();
  const highlights = t('about.highlights');

  return (
    <Section id="about" className="border-t border-[var(--card-border)]">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-7">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-bold block">{t('about.label')}</span>
            <h2 className="text-5xl font-black mb-12 uppercase">{t('about.title')}</h2>
            <div className="space-y-8">
              <p className="text-xl text-[var(--muted)] leading-relaxed font-serif italic border-l-2 border-accent pl-8">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
                {highlights.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-[11px] uppercase tracking-widest font-mono text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 h-[500px] bg-[var(--card-bg)] border border-[var(--card-border)] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={photo} 
              alt="Profile" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle frame accents */}
          <div className="absolute top-4 left-4 w-4 h-px bg-accent" />
          <div className="absolute top-4 left-4 w-px h-4 bg-accent" />
          <div className="absolute bottom-4 right-4 w-4 h-px bg-accent" />
          <div className="absolute bottom-4 right-4 w-px h-4 bg-accent" />
        </div>
      </div>
    </Section>
  );
};

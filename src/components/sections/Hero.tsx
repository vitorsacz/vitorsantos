import React from 'react';
import { Section, Reveal } from '../ui/Base';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <Section className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end w-full">
        <div className="md:col-span-9">
          <Reveal>
            <span className="meta-label mb-8 block">{t('hero.subtitle')}</span>
            <h1 className="text-7xl md:text-[140px] leading-[0.8] font-black tracking-tighter mb-12">
              VITOR<br />
              <span className="stroke-text">SANTOS</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex gap-8 items-start">
              <div className="w-px h-32 bg-gradient-to-b from-accent to-transparent shrink-0" />
              <p className="text-xl md:text-2xl font-light text-[var(--muted)] leading-relaxed italic pr-12 font-serif max-w-2xl">
                {t('hero.description')}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-3 flex flex-col justify-end h-full md:border-l md:border-[var(--card-border)] md:pl-8 pb-4">
          <Reveal delay={0.4}>
            <div className="flex flex-col gap-6">
              <a 
                href="#projects" 
                className="group flex items-center justify-between p-6 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-accent transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold">{t('hero.cta_primary')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
              </a>
              <a 
                href="#contact" 
                className="group flex items-center justify-between p-6 border border-[var(--card-border)] hover:bg-[var(--card-bg)] transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold">{t('hero.cta_secondary')}</span>
                <div className="w-2 h-2 rounded-full bg-[var(--muted-light)] group-hover:bg-accent transition-colors" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

import React from 'react';
import { Section, Reveal } from '../ui/Base';
import { useLanguage } from '../../context/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();
  const items = t('experience.items');

  return (
    <Section id="experience" className="border-t border-[var(--card-border)]">
      <Reveal>
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-bold block">{t('experience.label')}</span>
        <h2 className="text-5xl font-black mb-20 uppercase">{t('experience.title')}</h2>
      </Reveal>

      <div className="space-y-0">
        {items.map((exp: any, idx: number) => (
          <div key={idx} className="border-b border-[var(--card-border)]">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-12 py-16 items-start">
                <div className="md:col-span-4">
                  <div className="sticky top-24">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[11px] font-mono text-accent">{exp.period}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
                    </div>
                    <h3 className="text-3xl font-black uppercase mb-3 leading-none italic">{exp.company}</h3>
                    <p className="text-[var(--muted)] font-mono text-[10px] uppercase tracking-[0.2em]">{exp.role}</p>
                  </div>
                </div>
                
                <div className="md:col-span-8 md:border-l md:border-[var(--card-border)] md:pl-12 pb-8">
                  <p className="text-2xl text-[var(--muted)] leading-relaxed mb-12 font-serif italic pr-12">
                    {exp.description}
                  </p>
                  <div className="grid sm:grid-cols-1 gap-8">
                    {exp.highlights.map((highlight: string, hIdx: number) => (
                      <div key={hIdx} className="flex gap-6 items-start group">
                        <div className="mt-2 w-4 h-px bg-accent group-hover:w-8 transition-all duration-500 shrink-0" />
                        <p className="text-[13px] text-[var(--muted)] leading-relaxed font-mono uppercase tracking-tight">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
};

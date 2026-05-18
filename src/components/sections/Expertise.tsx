import React from 'react';
import { Section, Reveal } from '../ui/Base';
import { useLanguage } from '../../context/LanguageContext';

export const Expertise = () => {
  const { t } = useLanguage();
  const items = t('expertise.items');

  return (
    <Section id="expertise" className="border-t border-[var(--card-border)]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 pb-12 md:pb-0">
          <Reveal>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-bold">{t('expertise.label')}</h3>
            <h2 className="text-5xl leading-tight font-black uppercase mb-8">{t('expertise.title')}</h2>
            <div className="w-12 h-[1px] bg-accent" />
          </Reveal>
        </div>

        <div className="md:col-span-8 grid md:grid-cols-2 gap-px bg-[var(--card-border)] border border-[var(--card-border)]">
          {items.map((item: any, idx: number) => (
            <div key={idx} className="bg-[var(--bg)] p-10">
              <Reveal delay={idx * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="text-[10px] items-center gap-3 font-mono text-[var(--muted-light)] mb-8 flex">
                    <span className="w-6 h-px bg-[var(--card-border)]" />
                    0{idx + 1} / STACK_CORE
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-black mb-8 text-[var(--text)] opacity-60">
                    {item.category}
                  </h3>
                  <ul className="space-y-4">
                    {item.skills.map((skill: string) => (
                      <li key={skill} className="text-[var(--muted)] text-[11px] font-mono tracking-tight flex items-center gap-3">
                        <span className="w-1 h-1 bg-[var(--muted-light)]" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

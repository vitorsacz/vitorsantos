import React from 'react';
import { Section, Reveal } from '../ui/Base';
import { useLanguage } from '../../context/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();
  const items = t('projects.items');

  return (
    <Section id="projects" className="border-t border-[var(--card-border)]">
      <Reveal>
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-bold block">{t('projects.label')}</span>
        <h2 className="text-5xl font-black mb-20 uppercase">{t('projects.title')}</h2>
      </Reveal>

      <div className="space-y-0">
        {items.map((project: any) => (
          <div key={project.id} className="border-b border-[var(--card-border)]">
            <Reveal>
              <div className="py-24 group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-end">
                  <div className="md:col-span-8">
                    <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[var(--muted)]">{project.role}</span>
                      <div className="flex-1 h-px bg-[var(--card-border)]" />
                    </div>
                  </div>
                  <div className="md:col-span-4 flex flex-wrap gap-2 justify-end">
                    {project.tech.map((t: string) => (
                      <span key={t} className="px-4 py-2 border border-[var(--card-border)] text-[9px] font-bold uppercase tracking-widest text-[var(--muted)] hover:text-white hover:border-[#444] transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-px bg-[var(--card-border)] border border-[var(--card-border)]">
                  <div className="p-10 bg-[var(--bg)] hover:bg-[var(--card-bg)] transition-colors">
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[var(--muted-light)] mb-8 font-mono">01 // CONTEXT_&_PROBLEM</p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed font-serif italic">
                      {project.context}
                      <br /><br />
                      <span className="text-[var(--text)] not-italic font-sans text-xs border-l-2 border-accent pl-4 block">{project.problem}</span>
                    </p>
                  </div>
                  
                  <div className="p-10 bg-[var(--bg)] border-x border-[var(--card-border)] hover:bg-[var(--card-bg)] transition-colors">
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent mb-8 font-mono">02 // ARCH_DECISION</p>
                    <div className="text-sm text-[var(--muted)] leading-relaxed font-mono uppercase tracking-tight">
                      <span className="text-[9px] block mb-4 text-[var(--muted-light)]">COMPLEXITY_LEVEL: {project.complexity}</span>
                      {project.decision}
                    </div>
                  </div>

                  <div className="p-10 bg-[var(--bg)] hover:bg-[var(--card-bg)] transition-colors">
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[var(--muted-light)] mb-8 font-mono">03 // OUTCOME_VAL</p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed font-serif italic">
                      {project.result}
                    </p>
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

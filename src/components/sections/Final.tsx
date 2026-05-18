import React from 'react';
import { Section, Reveal } from '../ui/Base';
import { useLanguage } from '../../context/LanguageContext';

export const Philosophy = () => {
  const { t } = useLanguage();
  const items = t('philosophy.items');

  return (
    <Section id="philosophy" className="border-t border-[#222]">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-12 mb-16">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-bold block">{t('philosophy.label')}</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-[0.9] max-w-4xl">
              {t('philosophy.title')}
            </h2>
            <p className="text-[#888] text-xl leading-relaxed max-w-2xl font-serif italic border-l-2 border-[#222] pl-8">
              {t('philosophy.description')}
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-12 grid md:grid-cols-3 gap-px bg-[#222] border border-[#222]">
          {items.map((item: any, idx: number) => (
            <div key={idx} className="bg-[#0F0F0F] p-10 hover:bg-[#161616] transition-colors group">
              <Reveal delay={idx * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(255,62,0,0.5)]" />
                    <span className="text-[9px] font-mono text-[#444] uppercase tracking-widest">{item.title}</span>
                  </div>
                  <p className="text-[13px] text-[#BBB] leading-relaxed font-mono uppercase tracking-tight">{item.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const Contact = () => {
  const { t } = useLanguage();
  return (
    <Section id="contact" className="border-t border-[#222] bg-[#161616]">
      <div className="max-w-5xl mx-auto py-12">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-12 block text-center">CONTACT_TERMINAL / v2.0</span>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase leading-[0.8] tracking-tighter">
                {t('contact.title').split('Fintech').map((part: string, i: number) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && <span className="stroke-text">Fintech</span>}
                  </React.Fragment>
                ))}
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-10 border-l border-[#222] md:pl-12">
              <a 
                href="mailto:vitorsaczfiap@gmail.com" 
                className="text-xl md:text-3xl font-mono hover:text-accent transition-all duration-500 font-bold uppercase tracking-tighter"
              >
                vitorsaczfiap@gmail.com
              </a>
              
              <div className="flex flex-wrap gap-8 items-center">
                <a href="https://www.linkedin.com/in/vitorsacz/" target="blank" className="text-[10px] uppercase tracking-[0.2em] text-[#666] hover:text-white transition-colors">{t('contact.links.linkedin')}</a>
                <div className="w-1 h-1 bg-[#222] rounded-full" />
                <a href="https://github.com/vitorsacz" target="blank" className="text-[10px] uppercase tracking-[0.2em] text-[#666] hover:text-white transition-colors">{t('contact.links.github')}</a>
                <div className="w-1 h-1 bg-[#222] rounded-full" />
                <a href="public/files" download="CVp-Vitor-Santos.pdf" className="text-[10px] uppercase tracking-[0.2em] text-[#666] hover:text-white transition-colors">{t('contact.links.resume')}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

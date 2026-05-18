import React from 'react';
import { GridBackground } from './Base';
import { motion, useScroll, useSpring } from 'motion/react';
import { ThemeToggle, LanguageToggle } from './Toggles';
import { useLanguage } from '../../context/LanguageContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-ink">
      <GridBackground />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--nav-bg)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase">Project Mapping / v1.0</span>
            <span className="text-[11px] tracking-[0.1em] text-[var(--muted)] font-mono mt-1">ARCH_PORTFOLIO_V2.0</span>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="hidden md:flex gap-10">
              {['Expertise', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] hover:text-white transition-colors cursor-pointer"
                >
                  {t(`nav.${item.toLowerCase()}`)}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-6 border-l border-[var(--card-border)] pl-6">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="border-t border-[var(--card-border)] mt-24 py-16 bg-[var(--card-bg)]">
        <div className="section-container flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-wrap gap-12 md:gap-20">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-widest text-[#555]">Mapeamento Local</span>
              <span className="text-xs font-medium text-[var(--text)] opacity-70">Estrutura de arquivos validada</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-widest text-[#555]">Regras de Negócio</span>
              <span className="text-xs font-medium text-[var(--text)] opacity-70">Mapeadas com sucesso</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-widest text-[#555]">© 2024</span>
              <div className="flex gap-4">
                <a href="#" className="text-xs text-[var(--muted)] hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-xs text-[var(--muted)] hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="text-[40px] font-black text-[var(--muted-light)] opacity-20 tracking-tighter select-none leading-none">
            V.SANTOS / 26
          </div>
        </div>
      </footer>
    </div>
  );
};

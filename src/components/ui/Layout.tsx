import React, { useState, useEffect } from 'react';
import { GridBackground } from './Base';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ThemeToggle, LanguageToggle } from './Toggles';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = ['About', 'Experience', 'Education', 'Expertise', 'Projects', 'Contact'];

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-ink">
      <GridBackground />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[70] origin-left"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-[var(--card-border)] bg-[var(--nav-bg)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase">Project Mapping / v1.0</span>
            <span className="text-[11px] tracking-[0.1em] text-[var(--muted)] font-mono mt-1">ARCH_PORTFOLIO_V2.0</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-12">
            <div className="hidden md:flex gap-10">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] hover:text-white transition-colors cursor-pointer"
                >
                  {t(`nav.${item.toLowerCase()}`)}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 border-l border-[var(--card-border)] pl-4 md:pl-6">
              <LanguageToggle />
              <ThemeToggle />
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:text-accent transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 h-screen bg-[var(--nav-bg)] backdrop-blur-lg md:hidden border-t border-[var(--card-border)]"
            >
              <div className="flex flex-col items-center justify-center pt-12 gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black uppercase tracking-widest text-[var(--text)] hover:text-accent transition-colors"
                  >
                    {t(`nav.${item.toLowerCase()}`)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

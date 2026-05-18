import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sun, Moon, Globe } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[var(--muted-light)] transition-colors text-[var(--text)]"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <button 
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] hover:bg-[var(--muted-light)] transition-colors text-[var(--text)]"
    >
      <Globe size={14} className="text-accent" />
      <span className="font-mono text-[10px] font-medium uppercase tracking-wider">
        {language === 'en' ? 'EN' : 'PT'}
      </span>
    </button>
  );
};

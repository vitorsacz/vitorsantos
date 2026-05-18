import React from 'react';
import { motion } from 'motion/react';

export const GridBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), 
                         linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
    <div className="absolute inset-0 bg-radial-gradient from-transparent via-[var(--bg)]/50 to-[var(--bg)]" />
  </div>
);

export const Section = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={className}>
    <div className="section-container">
      {children}
    </div>
  </section>
);

export const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

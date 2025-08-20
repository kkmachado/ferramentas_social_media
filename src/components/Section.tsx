import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center text-white mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-slate-400 text-center mb-10 max-w-3xl mx-auto">{subtitle}</p>}
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
};

export default Section;

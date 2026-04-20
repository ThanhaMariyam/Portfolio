import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type SectionProps = {
  children: ReactNode;
  title: string;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  title,
  className = '',
  id
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-indigo-600 block rounded-full"></span>
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

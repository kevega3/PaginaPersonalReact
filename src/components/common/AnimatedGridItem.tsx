'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedGridItemProps {
  children: React.ReactNode;
  index: number;
}

export default function AnimatedGridItem({ children, index }: AnimatedGridItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
